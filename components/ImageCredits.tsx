import { destinationMedia } from "@/data/destinationMedia";

export function ImageCredits() {
  const credits = Object.entries(destinationMedia);

  return (
    <section className="mx-auto w-full max-w-3xl px-5 pb-8">
      <details className="rounded-lg border border-blush/70 bg-white/70 px-4 py-3 text-xs leading-6 text-cocoa shadow-sm">
        <summary className="cursor-pointer font-bold text-cocoa">画像出典について</summary>
        <p className="mt-3">
          結果カードの観光写真はWikimedia Commons / Wikipedia等の公開画像を参照しています。各画像の詳細は以下の出典ページで確認できます。
        </p>
        <div className="mt-3 grid gap-1">
          {credits.map(([id, media]) => (
            <a key={id} href={media.sourceUrl} target="_blank" rel="noreferrer" className="underline-offset-2 hover:underline">
              {media.imageAlt}: {media.sourceLabel}
            </a>
          ))}
        </div>
        <p className="mt-3">国旗画像はFlagCDNを使用しています。</p>
      </details>
    </section>
  );
}
