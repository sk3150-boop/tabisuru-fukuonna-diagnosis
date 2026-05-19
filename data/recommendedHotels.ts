export type RecommendedHotel = {
  name: string;
  area: string;
  priceNote: string;
  summary: string;
  linkUrl: string;
  imageUrl?: string;
  imageAlt?: string;
};

export const recommendedHotelsByDestination: Record<string, RecommendedHotel[]> = {
  bali: [
    {
      name: "インターコンチネンタル バリ サヌール リゾート by IHG",
      area: "サヌール",
      priceNote: "1泊1室 44,000円台からの表示例",
      summary: "落ち着いた海辺ステイを楽しみたい人に合いやすい、上質なリゾート候補です。",
      linkUrl: "https://www.skygate.co.jp/hotel/HTLITM/251989/?AgentCode=HTTOP",
      imageUrl: "https://digital.ihg.com/is/image/ihg/intercontinental-bali-7818756849-2x1?wid=1100",
      imageAlt: "インターコンチネンタル バリ サヌール リゾート by IHGの外観空撮",
    },
    {
      name: "ハイアット リージェンシー バリ",
      area: "サヌール",
      priceNote: "1泊1室 30,000円台からの表示例",
      summary: "リゾート感と価格のバランスを重視したい人に見やすい人気ホテルです。",
      linkUrl: "https://www.skygate.co.jp/hotel/HTLITM/2141337/?AgentCode=HTTOP",
      imageUrl:
        "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2023/05/31/0203/DPSBL-P0661-Pool-Beach-View-Aerial.jpg/DPSBL-P0661-Pool-Beach-View-Aerial.16x9.jpg?imwidth=1200",
      imageAlt: "ハイアット リージェンシー バリのプールとビーチ",
    },
    {
      name: "マヤ サヌール リゾート＆スパ",
      area: "サヌール",
      priceNote: "1泊1室 37,000円台からの表示例",
      summary: "スパや写真映えも楽しみたい、ゆったり派のバリ旅に合う候補です。",
      linkUrl: "https://www.skygate.co.jp/hotel/HTLITM/1188765/?AgentCode=HTTOP",
      imageUrl:
        "https://mayaresorts.com/assets/images/sanur/facilities/main-swimming-pool/gallery-full/main-swimming-pool-gf-1.webp",
      imageAlt: "マヤ サヌール リゾート＆スパのインフィニティプール",
    },
  ],
};
