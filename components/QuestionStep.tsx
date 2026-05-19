import type { AnswerOption, AnswerValue, Question } from "@/types/diagnosis";

type QuestionStepProps = {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  selectedAnswer?: AnswerValue;
  canGoBack: boolean;
  onSelect: (option: AnswerOption) => void;
  onNext: () => void;
  onBack: () => void;
};

export function QuestionStep({
  question,
  questionNumber,
  totalQuestions,
  selectedAnswer,
  canGoBack,
  onSelect,
  onNext,
  onBack,
}: QuestionStepProps) {
  const progress = (questionNumber / totalQuestions) * 100;
  const selectedOptions = Array.isArray(selectedAnswer) ? selectedAnswer : selectedAnswer ? [selectedAnswer] : [];
  const selectedOptionIds = selectedOptions.map((option) => option.id);
  const selectedGroups = new Set(selectedOptions.map((option) => option.group).filter(Boolean));
  const hasEnoughSelections = selectedOptions.length >= (question.minSelections ?? 1);
  const hasRequiredGroups = (question.requiredGroups ?? []).every((group) => selectedGroups.has(group));
  const canProceed = hasEnoughSelections && hasRequiredGroups;
  let previousGroupLabel = "";

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-5 pb-10">
      <section className="rounded-lg border border-white/80 bg-white/85 p-5 shadow-soft backdrop-blur">
        <div className="flex items-center justify-between gap-4 text-sm font-bold text-cocoa">
          <span>
            Question {questionNumber} / {totalQuestions}
          </span>
          <span className="rounded-full bg-shell px-3 py-1">{Math.round(progress)}%</span>
        </div>
        <div className="mt-3 h-2 overflow-hidden rounded-full bg-shell">
          <div
            className="h-full rounded-full bg-gradient-to-r from-blush via-lagoon to-mist transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="mt-6 rounded-lg bg-gradient-to-br from-roseMilk to-mist/80 px-4 py-5">
          <p className="text-xs font-bold tracking-[0.16em] text-lagoon">TRAVEL QUESTION</p>
          <h1 className="mt-2 text-2xl font-bold leading-snug text-ink">{question.text}</h1>
          {question.description && <p className="mt-3 text-sm leading-7 text-cocoa">{question.description}</p>}
        </div>

        <div className="mt-6 grid gap-3">
          {question.options.map((option) => {
            const selected = selectedOptionIds.includes(option.id);
            const showGroupLabel = option.groupLabel && option.groupLabel !== previousGroupLabel;
            previousGroupLabel = option.groupLabel ?? previousGroupLabel;

            return (
              <div key={option.id} className="grid gap-2">
                {showGroupLabel && (
                  <p className="pt-2 text-xs font-bold tracking-[0.14em] text-lagoon">{option.groupLabel}</p>
                )}
                <button
                  type="button"
                  data-testid={`answer-${option.id}`}
                  aria-pressed={selected}
                  onClick={() => onSelect(option)}
                  className={`min-h-14 rounded-lg border px-4 py-4 text-left text-base font-bold leading-6 transition active:scale-[0.99] ${
                    selected
                      ? "border-lagoon bg-mist text-ink shadow-sm ring-2 ring-lagoon/15"
                      : "border-blush/70 bg-white text-cocoa shadow-sm hover:border-lagoon/60 hover:bg-roseMilk"
                  }`}
                >
                  <span className="flex items-center justify-between gap-3">
                    <span>{option.label}</span>
                    <span
                      className={`grid h-5 w-5 shrink-0 place-items-center rounded-full border text-[11px] ${
                        selected ? "border-lagoon bg-lagoon text-white" : "border-blush bg-white text-transparent"
                      }`}
                    >
                      ✓
                    </span>
                  </span>
                </button>
              </div>
            );
          })}
        </div>

        <div className="mt-7 grid grid-cols-2 gap-3">
          <button
            type="button"
            data-testid="back-button"
            onClick={onBack}
            disabled={!canGoBack}
            className="min-h-[52px] rounded-lg border border-blush bg-white px-4 py-3 font-bold text-cocoa transition hover:bg-roseMilk disabled:cursor-not-allowed disabled:opacity-40"
          >
            戻る
          </button>
          <button
            type="button"
            data-testid="next-button"
            onClick={onNext}
            disabled={!canProceed}
            className="min-h-[52px] rounded-lg bg-ink px-4 py-3 font-bold text-white shadow-sm transition hover:bg-cocoa disabled:cursor-not-allowed disabled:opacity-40"
          >
            {questionNumber === totalQuestions ? "結果を見る" : "次へ"}
          </button>
        </div>
      </section>
    </main>
  );
}
