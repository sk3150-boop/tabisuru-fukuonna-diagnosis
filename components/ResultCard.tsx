import { affiliateLinkOrder, getAffiliateLinksForDestination } from "@/data/affiliateLinks";
import { destinationFlagCodes, destinationMedia } from "@/data/destinationMedia";
import { recommendedHotelsByDestination } from "@/data/recommendedHotels";
import type { RankedDestination } from "@/types/diagnosis";
import { RecommendedHotels } from "@/components/RecommendedHotels";

type ResultCardProps = {
  destination: RankedDestination;
  rank: number;
};

export function ResultCard({ destination, rank }: ResultCardProps) {
  const isTop = rank === 1;
  const media = destinationMedia[destination.id];
  const flagCode = destinationFlagCodes[destination.id];
  const affiliateLinks = getAffiliateLinksForDestination(destination);
  const recommendedHotels = recommendedHotelsByDestination[destination.id] ?? [];

  return (
    <article className={`overflow-hidden rounded-lg border bg-white shadow-soft ${isTop ? "border-lagoon" : "border-blush/80"}`}>
      <div className={`h-2 ${isTop ? "bg-lagoon" : "bg-blush"}`} />
      {media && (
        <div className="relative h-44 overflow-hidden bg-mist">
          <img
            src={getDisplayImageUrl(media.imageUrl)}
            alt={media.imageAlt}
            className="destination-photo h-full w-full object-cover"
            loading="eager"
            onError={(event) => {
              event.currentTarget.src = "/images/top-banner.png";
            }}
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/34" />
          {flagCode && (
            <span className="absolute bottom-3 left-3 rounded-full bg-white/92 p-1.5 shadow-sm backdrop-blur">
              <img
                src={`https://flagcdn.com/w80/${flagCode}.png`}
                alt={`${destination.country}の国旗`}
                className="h-7 w-10 rounded-full object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />
            </span>
          )}
        </div>
      )}

      <div className={isTop ? "p-5" : "p-4"}>
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-bold text-lagoon">
              {isTop ? "あなたに一番おすすめ" : `おすすめ ${rank}位`}
            </p>
            <h2 className={`${isTop ? "text-2xl" : "text-xl"} mt-2 font-bold leading-tight text-ink`}>
              {destination.city}
              <span className="ml-2 text-base text-cocoa">{destination.country}</span>
            </h2>
          </div>
          <div className="rounded-full bg-shell px-3 py-1 text-xs font-bold text-cocoa">{destination.matchScore}pt</div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2 text-xs font-bold text-cocoa">
          <div className="rounded-lg bg-mist/75 px-3 py-2">予算 {destination.budget}</div>
          <div className="rounded-lg bg-shell px-3 py-2">日数 {destination.recommendedDays}</div>
        </div>

        {destination.matchedTags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {destination.matchedTags.map((tag) => (
              <span key={tag} className="rounded-full bg-roseMilk px-3 py-1 text-xs font-bold text-cocoa">
                {tag}
              </span>
            ))}
          </div>
        )}

        <p className="mt-4 border-l-4 border-blush pl-4 text-sm font-bold leading-7 text-cocoa">
          {destination.summary}
        </p>

        <div className="mt-5 grid gap-3 text-sm leading-7">
          <InfoBlock title="おすすめ理由" body={destination.recommendedReason} />
          <InfoBlock title="注意点" body={destination.caution} />
          <InfoBlock title="向いている旅行者" body={destination.suitedFor} />
        </div>

        <RecommendedHotels city={destination.city} hotels={recommendedHotels} fallbackImageUrl={media?.imageUrl} />

        <div className="mt-5 rounded-lg bg-gradient-to-br from-roseMilk to-mist/70 p-4">
          <p className="text-sm font-bold text-ink">旅の準備をする</p>
          <p className="mt-1 text-xs leading-5 text-cocoa">
            まずは「{destination.city} ホテル」「{destination.city} 航空券」の相場を見ると、旅の予算感をつかみやすいです。
          </p>
          <div className="mt-3 grid gap-2">
            {affiliateLinkOrder.map((key) => {
              const link = affiliateLinks[key];
              const isPrimary = key === "hotel";

              return (
                <a
                  key={key}
                  data-testid={`affiliate-${key}`}
                  href={link.url}
                  target="_blank"
                  rel="sponsored noopener"
                  className={`min-h-12 rounded-lg border px-4 py-3 text-center text-sm font-bold shadow-sm transition ${
                    isPrimary
                      ? "border-ink bg-ink text-white hover:bg-cocoa"
                      : "border-white/80 bg-white/90 text-ink hover:bg-white"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </article>
  );
}

function getDisplayImageUrl(imageUrl: string) {
  if (!imageUrl.includes("upload.wikimedia.org")) {
    return imageUrl;
  }

  const url = new URL(imageUrl);
  const parts = url.pathname.split("/").filter(Boolean);
  const fileName = parts.includes("thumb") ? parts.at(-2) : parts.at(-1);

  if (!fileName) {
    return imageUrl;
  }

  return `https://commons.wikimedia.org/wiki/Special:FilePath/${fileName}?width=900`;
}

function InfoBlock({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-lg bg-roseMilk/70 px-4 py-3">
      <p className="text-xs font-bold text-lagoon">{title}</p>
      <p className="mt-1 text-cocoa">{body}</p>
    </div>
  );
}
