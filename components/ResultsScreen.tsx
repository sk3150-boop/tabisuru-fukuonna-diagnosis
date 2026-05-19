import type { Answers, RankedDestination } from "@/types/diagnosis";
import { ResultCard } from "./ResultCard";

type ResultsScreenProps = {
  results: RankedDestination[];
  answers: Answers;
  onRestart: () => void;
};

export function ResultsScreen({ results, answers, onRestart }: ResultsScreenProps) {
  const highlights = getAnswerHighlights(answers);

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-5 pb-10">
      <section className="mb-5 overflow-hidden rounded-lg border border-white/80 bg-white shadow-soft">
        <div className="relative h-44">
          <img src="/images/top-banner.png" alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/15 via-white/48 to-white" />
          <div className="absolute bottom-0 left-0 right-0 px-5 pb-5">
            <p className="text-sm font-bold text-lagoon">診断結果</p>
            <h1 className="mt-2 text-2xl font-bold leading-snug text-ink">あなたに合いそうな海外旅行先はこちら</h1>
          </div>
        </div>
        <div className="px-5 pb-5 text-sm leading-7 text-cocoa">
          <p>回答内容に近いタグとスコアをもとに、上位3都市を選びました。</p>
          {highlights.length > 0 && (
            <p className="mt-3 rounded-lg bg-roseMilk/70 px-4 py-3 font-bold text-ink">
              今回は「{highlights.join("・")}」を重視する旅として診断しています。
            </p>
          )}
        </div>
      </section>

      <div className="grid gap-4">
        {results.map((destination, index) => (
          <ResultCard key={destination.id} destination={destination} rank={index + 1} />
        ))}
      </div>

      <div className="mt-7 grid gap-3 sm:grid-cols-2">
        <button
          type="button"
          data-testid="restart-diagnosis"
          onClick={onRestart}
          className="min-h-14 rounded-lg bg-ink px-5 py-4 font-bold text-white shadow-soft transition hover:bg-cocoa"
        >
          もう一度診断する
        </button>
        <a
          href="https://note.com/hukuonna"
          className="min-h-14 rounded-lg border border-blush bg-white px-5 py-4 text-center font-bold text-cocoa shadow-sm transition hover:bg-roseMilk"
        >
          note記事へ戻る
        </a>
      </div>
    </main>
  );
}

function getAnswerHighlights(answers: Answers) {
  const priorityQuestionIds = ["purpose", "mood", "days", "budget", "worry", "priority"];

  return priorityQuestionIds
    .flatMap((questionId) => {
      const answer = answers[questionId];

      if (!answer) {
        return [];
      }

      return Array.isArray(answer) ? answer.map((option) => option.label) : [answer.label];
    })
    .slice(0, 4);
}
