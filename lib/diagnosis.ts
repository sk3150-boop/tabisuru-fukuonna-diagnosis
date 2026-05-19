import { destinations } from "@/data/destinations";
import { questions } from "@/data/questions";
import type { Answers, Destination, RankedDestination } from "@/types/diagnosis";

const TAG_MATCH_POINTS = 10;
const AVOID_TAG_PENALTY = 18;
const VISITED_REGION_PENALTY = 16;

const getSelectedOptions = (answers: Answers) =>
  questions.flatMap((question) => {
    const answer = answers[question.id];

    if (!answer) {
      return [];
    }

    return Array.isArray(answer) ? answer : [answer];
  });

const unique = (items: string[]) => Array.from(new Set(items));

const getVisitedRegionPenalty = (destination: Destination, answers: Answers) => {
  const visitedAnswer = answers.visited;
  const selectedOptions = Array.isArray(visitedAnswer) ? visitedAnswer : visitedAnswer ? [visitedAnswer] : [];
  const shouldPreferUnvisited = selectedOptions.some((option) => option.visitedPreference === "preferUnvisited");

  if (!shouldPreferUnvisited) {
    return 0;
  }

  const visitedRegionTags = selectedOptions.flatMap((option) => option.visitedRegionTags ?? []);
  const matchedVisitedRegions = visitedRegionTags.filter((tag) => destination.tags.includes(tag));

  return matchedVisitedRegions.length * VISITED_REGION_PENALTY;
};

const scoreDestination = (destination: Destination, answers: Answers): RankedDestination => {
  const selectedOptions = getSelectedOptions(answers);
  const matchedTags: string[] = [];

  const matchPoints = selectedOptions.reduce((total, option) => {
    const tags = option.tags ?? [];
    const matches = tags.filter((tag) => destination.tags.includes(tag));
    matchedTags.push(...matches);
    return total + matches.length * TAG_MATCH_POINTS;
  }, 0);

  const scoreBoostPoints = selectedOptions.reduce((total, option) => {
    const boosts = option.scoreBoosts ?? {};
    return (
      total +
      Object.entries(boosts).reduce((sum, [key, weight]) => {
        const scoreKey = key as keyof Destination["scores"];
        return sum + destination.scores[scoreKey] * (weight ?? 0);
      }, 0)
    );
  }, 0);

  const avoidPenalty = selectedOptions.reduce((total, option) => {
    const avoidTags = option.avoidTags ?? [];
    const hits = avoidTags.filter((tag) => destination.tags.includes(tag));
    return total + hits.length * AVOID_TAG_PENALTY;
  }, 0);

  const visitedRegionPenalty = getVisitedRegionPenalty(destination, answers);
  const balancedQuality =
    destination.scores.safety * 0.35 +
    destination.scores.beginnerFriendly * 0.25 +
    destination.scores.womenFriendly * 0.25 +
    destination.scores.shortFlight * 0.15;

  return {
    ...destination,
    matchScore: Math.round(matchPoints + scoreBoostPoints + balancedQuality - avoidPenalty - visitedRegionPenalty),
    matchedTags: unique(matchedTags).slice(0, 6),
  };
};

export const getDiagnosisResults = (answers: Answers, limit = 3): RankedDestination[] => {
  const ranked = destinations
    .map((destination) => scoreDestination(destination, answers))
    .sort((a, b) => b.matchScore - a.matchScore);

  return pickDiverseResults(ranked, limit);
};

function pickDiverseResults(ranked: RankedDestination[], limit: number) {
  const selected: RankedDestination[] = [];

  for (const destination of ranked) {
    const countryAlreadySelected = selected.some((selectedDestination) => selectedDestination.country === destination.country);

    if (!countryAlreadySelected || selected.length === 0) {
      selected.push(destination);
    }

    if (selected.length === limit) {
      return selected;
    }
  }

  for (const destination of ranked) {
    if (!selected.some((selectedDestination) => selectedDestination.id === destination.id)) {
      selected.push(destination);
    }

    if (selected.length === limit) {
      return selected;
    }
  }

  return selected;
}
