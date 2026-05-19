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
      imageUrl: "https://i.travelapi.com/lodging/6000000/5440000/5433900/5433816/f94f366d_z.jpg",
      imageAlt: "インターコンチネンタル バリ サヌール リゾート by IHGのホテル画像",
    },
    {
      name: "ハイアット リージェンシー バリ",
      area: "サヌール",
      priceNote: "1泊1室 30,000円台からの表示例",
      summary: "リゾート感と価格のバランスを重視したい人に見やすい人気ホテルです。",
      linkUrl: "https://www.skygate.co.jp/hotel/HTLITM/2141337/?AgentCode=HTTOP",
      imageUrl:
        "https://i.travelapi.com/lodging/1000000/180000/178400/178384/w3837h2557x3y3-6b6c1a8d_z.jpg",
      imageAlt: "ハイアット リージェンシー バリのホテル画像",
    },
    {
      name: "マヤ サヌール リゾート＆スパ",
      area: "サヌール",
      priceNote: "1泊1室 37,000円台からの表示例",
      summary: "スパや写真映えも楽しみたい、ゆったり派のバリ旅に合う候補です。",
      linkUrl: "https://www.skygate.co.jp/hotel/HTLITM/1188765/?AgentCode=HTTOP",
      imageUrl:
        "https://i.travelapi.com/lodging/10000000/9730000/9725600/9725575/9695098a_z.jpg",
      imageAlt: "マヤ サヌール リゾート＆スパのホテル画像",
    },
  ],
};
