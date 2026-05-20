import type { RecommendedHotel } from "@/data/recommendedHotels";

type RecommendedHotelsProps = {
  city: string;
  hotels: RecommendedHotel[];
  fallbackImageUrl?: string;
};

export function RecommendedHotels({ city, hotels, fallbackImageUrl }: RecommendedHotelsProps) {
  if (hotels.length === 0) {
    return null;
  }

  return (
    <section className="mt-5 rounded-lg border border-blush/70 bg-white p-4">
      <div className="flex items-end justify-between gap-3">
        <div>
          <p className="text-xs font-bold tracking-[0.18em] text-lagoon">HOTEL PICKS</p>
          <h3 className="mt-1 whitespace-nowrap text-base font-bold text-ink sm:text-lg">{city}のおすすめホテル3選</h3>
        </div>
        <span className="shrink-0 rounded-full bg-shell px-3 py-1 text-xs font-bold text-cocoa">人気順</span>
      </div>

      <div className="mt-4 grid gap-3">
        {hotels.map((hotel, index) => {
          const imageUrl = hotel.imageUrl ?? fallbackImageUrl;

          return (
            <article
              key={hotel.name}
              className="grid grid-cols-[104px_minmax(0,1fr)] gap-3 rounded-lg border border-blush/70 bg-roseMilk/35 p-3 sm:grid-cols-[112px_minmax(0,1fr)]"
            >
              <div className="relative aspect-square overflow-hidden rounded-lg bg-mist">
                {imageUrl && (
                  <img
                    src={getDisplayImageUrl(imageUrl)}
                    alt={hotel.imageAlt ?? `${hotel.name}のイメージ`}
                    className="h-full w-full object-cover"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={(event) => {
                      if (fallbackImageUrl && event.currentTarget.src !== getDisplayImageUrl(fallbackImageUrl)) {
                        event.currentTarget.src = getDisplayImageUrl(fallbackImageUrl);
                      }
                    }}
                  />
                )}
                <span className="absolute left-2 top-2 rounded-full border border-white/90 bg-[#211818]/95 px-2.5 py-1.5 text-[11px] font-bold leading-none text-white shadow-[0_6px_18px_rgba(0,0,0,0.6)]">
                  人気{index + 1}位
                </span>
              </div>

              <div className="min-w-0">
                <p className="text-xs font-bold text-lagoon">{hotel.area}</p>
                <h4 className="mt-1 text-sm font-bold leading-5">
                  <a
                    href={hotel.linkUrl}
                    target="_blank"
                    rel="sponsored noopener"
                    className="text-ink underline decoration-blush decoration-2 underline-offset-4 transition hover:text-cocoa"
                  >
                    {hotel.name}
                  </a>
                </h4>
                <p className="mt-2 text-xs leading-5 text-cocoa">{hotel.summary}</p>
                <p className="mt-2 rounded-lg bg-white/80 px-3 py-2 text-xs font-bold leading-5 text-cocoa">{hotel.priceNote}</p>
                <p className="mt-2 text-[11px] font-bold text-lagoon">ホテル名から詳細を確認</p>
              </div>
            </article>
          );
        })}
      </div>

      <p className="mt-3 text-xs leading-5 text-cocoa">
        ホテル料金や空室は検索条件で変わります。気になるホテルは、予約前に最新条件をご確認ください。
      </p>
    </section>
  );
}

function getDisplayImageUrl(imageUrl: string) {
  return imageUrl;
}
