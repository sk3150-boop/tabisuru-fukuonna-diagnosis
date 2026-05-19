type StartScreenProps = {
  onStart: () => void;
};

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-5 pb-10">
      <section className="overflow-hidden rounded-lg border border-white/80 bg-white shadow-soft">
        <div className="relative h-64">
          <img
            src="/images/top-banner.png"
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/8 to-white/48" />
          <div className="absolute left-4 top-4 flex flex-wrap gap-2">
              {["海外旅行", "10問診断", "個人情報なし"].map((item) => (
                <span key={item} className="rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold text-cocoa shadow-sm backdrop-blur">
                  {item}
                </span>
              ))}
          </div>
        </div>

        <div className="px-5 pb-6 pt-5">
          <p className="text-xs font-bold tracking-[0.18em] text-lagoon">旅する福女</p>
          <h1 className="mt-2 text-3xl font-bold leading-tight text-ink">
            あなたに合う海外旅行先診断
          </h1>
          <p className="mt-4 text-lg font-bold leading-8 text-cocoa">
            10問で、あなたの予算・日数・旅の目的に合う海外旅行先を提案します。
          </p>
          <p className="mt-4 text-sm leading-7 text-cocoa">
            予算、日数、旅に求めること、不安なことから、あなたに合いそうな海外旅行先を提案します。
          </p>
          <button
            type="button"
            data-testid="start-diagnosis"
            onClick={onStart}
            className="mt-5 min-h-14 w-full rounded-lg bg-ink px-6 py-4 text-base font-bold text-white shadow-soft transition hover:bg-cocoa active:scale-[0.99]"
          >
            診断をはじめる
          </button>
        </div>
      </section>

      <section className="mt-5 grid gap-3 sm:grid-cols-3">
        {[
          ["個人情報なし", "ログインやメール入力なし。気軽に試せます。"],
          ["静的診断", "外部APIやデータベース接続は使いません。"],
          ["3都市提案", "条件に合う候補を読みやすく表示します。"],
        ].map(([title, body]) => (
          <div key={title} className="rounded-lg border border-white/80 bg-white/82 p-4 shadow-sm backdrop-blur">
            <p className="font-bold text-ink">{title}</p>
            <p className="mt-2 text-sm leading-6 text-cocoa">{body}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
