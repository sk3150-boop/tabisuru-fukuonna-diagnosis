export type ScoreKey =
  | "safety"
  | "lowCost"
  | "beginnerFriendly"
  | "womenFriendly"
  | "soloFriendly"
  | "gourmet"
  | "scenery"
  | "historyCulture"
  | "shopping"
  | "shortFlight"
  | "hiddenGem";

export type DestinationScores = Record<ScoreKey, number>;

export type Destination = {
  id: string;
  city: string;
  country: string;
  summary: string;
  recommendedReason: string;
  caution: string;
  suitedFor: string;
  recommendedDays: string;
  budget: string;
  tags: string[];
  scores: DestinationScores;
};

export type DestinationMedia = {
  imageUrl: string;
  imageAlt: string;
  flag: string;
  sourceLabel: string;
  sourceUrl: string;
};

export type AnswerOption = {
  id: string;
  label: string;
  group?: string;
  groupLabel?: string;
  tags?: string[];
  avoidTags?: string[];
  visitedRegionTags?: string[];
  visitedPreference?: "preferUnvisited" | "includeVisited" | "firstTrip";
  scoreBoosts?: Partial<Record<ScoreKey, number>>;
  exclusiveGroup?: string;
  clearsOptionIds?: string[];
};

export type Question = {
  id: string;
  text: string;
  description?: string;
  multiple?: boolean;
  minSelections?: number;
  requiredGroups?: string[];
  options: AnswerOption[];
};

export type AnswerValue = AnswerOption | AnswerOption[];

export type Answers = Record<string, AnswerValue>;

export type RankedDestination = Destination & {
  matchScore: number;
  matchedTags: string[];
};
