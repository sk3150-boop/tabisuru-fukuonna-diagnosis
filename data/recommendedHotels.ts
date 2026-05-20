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
  taipei: [
    {
      name: "アーツリー ホテル",
      area: "松山",
      priceNote: "デザイン性の高いホテルを探したい人向け",
      summary: "緑やアートを感じる内装が印象的で、街歩きとホテル時間の両方を楽しみたい旅に合います。",
      linkUrl: "https://www.skygate.co.jp/hotel/HTLITM/1928816/?AgentCode=HTTOP",
      imageUrl: "https://i.travelapi.com/lodging/20000000/19470000/19462300/19462202/99134f6c_z.jpg",
      imageAlt: "アーツリー ホテルのホテル画像",
    },
    {
      name: "ホテル プロバーブズ台北 台北賦楽旅居",
      area: "台北東区",
      priceNote: "大人っぽい台北ステイを楽しみたい人向け",
      summary: "買い物やカフェ巡りに便利なエリアで、落ち着いた雰囲気の滞在を選びたい人に向いています。",
      linkUrl: "https://www.skygate.co.jp/hotel/HTLITM/1291762/?AgentCode=HTTOP",
      imageUrl: "https://i.travelapi.com/lodging/12000000/11790000/11789000/11788934/add57edb_z.jpg",
      imageAlt: "ホテル プロバーブズ台北 台北賦楽旅居のホテル画像",
    },
    {
      name: "グランド ハイアット台北",
      area: "信義",
      priceNote: "台北101周辺で安心感を重視したい人向け",
      summary: "有名エリアに滞在したい初台北や夫婦旅に選びやすく、観光と移動のしやすさが魅力です。",
      linkUrl: "https://www.skygate.co.jp/hotel/HTLITM/203798/?AgentCode=HTTOP",
      imageUrl: "https://i.travelapi.com/lodging/1000000/30000/21100/21035/156bcd05_z.jpg",
      imageAlt: "グランド ハイアット台北のホテル画像",
    },
  ],
  seoul: [
    {
      name: "ソラリア 西鉄 ホテル ソウル 明洞",
      area: "明洞",
      priceNote: "初めてのソウルでも選びやすい日系ホテル",
      summary: "明洞中心部に滞在でき、日本語対応や安心感を重視したい女子旅・初韓国に向いています。",
      linkUrl: "https://www.skygate.co.jp/hotel/HTLITM/1189059/?AgentCode=HTTOP",
      imageUrl: "https://i.travelapi.com/lodging/10000000/9770000/9761300/9761216/0127b408_z.jpg",
      imageAlt: "ソラリア 西鉄 ホテル ソウル 明洞のホテル画像",
    },
    {
      name: "L7 明洞",
      area: "明洞",
      priceNote: "買い物と街歩きを楽しみたい人向け",
      summary: "明洞通りに近く、短期でもカフェ・買い物・グルメを動きやすく組み立てられます。",
      linkUrl: "https://www.skygate.co.jp/hotel/HTLITM/1300551/?AgentCode=HTTOP",
      imageUrl: "https://i.travelapi.com/lodging/13000000/12520000/12511700/12511672/aff7da07_z.jpg",
      imageAlt: "L7 明洞のホテル画像",
    },
    {
      name: "アロフト・ソウル明洞",
      area: "明洞",
      priceNote: "スタイリッシュなホテルに泊まりたい人向け",
      summary: "観光にも買い物にも使いやすい立地で、デザイン性と快適さをほどよく重視できます。",
      linkUrl: "https://www.skygate.co.jp/hotel/HTLITM/1715612/?AgentCode=HTTOP",
      imageUrl: "https://i.travelapi.com/lodging/17000000/16610000/16606300/16606220/c0fdd0c0_z.jpg",
      imageAlt: "アロフト・ソウル明洞のホテル画像",
    },
  ],
  bangkok: [
    {
      name: "マリオット バンコク スクンビット",
      area: "スクンビット",
      priceNote: "ホテルステイも楽しみたい大人旅向け",
      summary: "BTS沿線で動きやすく、スパやルーフトップも楽しみたい非日常のバンコク旅に合います。",
      linkUrl: "https://www.skygate.co.jp/hotel/HTLITM/259544/?AgentCode=HTTOP",
      imageUrl: "https://i.travelapi.com/lodging/6000000/5800000/5795000/5794999/bc7a021b_z.jpg",
      imageAlt: "マリオット バンコク スクンビットのホテル画像",
    },
    {
      name: "ザ ウェスティン グランデ スクンビット バンコク",
      area: "アソーク",
      priceNote: "観光と買い物の移動しやすさ重視の人向け",
      summary: "ターミナル21周辺に滞在したい人に選びやすく、初バンコクでも行動計画を立てやすい立地です。",
      linkUrl: "https://www.skygate.co.jp/hotel/HTLITM/167186/?AgentCode=HTTOP",
      imageUrl: "https://i.travelapi.com/lodging/1000000/380000/372400/372351/a23a5767_z.jpg",
      imageAlt: "ザ ウェスティン グランデ スクンビット バンコクのホテル画像",
    },
    {
      name: "ザ ランドマーク バンコク",
      area: "ナナ",
      priceNote: "駅近で便利な滞在を選びたい人向け",
      summary: "BTSナナ駅近くで移動しやすく、街歩きやグルメを効率よく楽しみたい旅に向いています。",
      linkUrl: "https://www.skygate.co.jp/hotel/HTLITM/16210/?AgentCode=HTTOP",
      imageUrl: "https://i.travelapi.com/lodging/1000000/30000/20300/20211/83e2e94b_z.jpg",
      imageAlt: "ザ ランドマーク バンコクのホテル画像",
    },
  ],
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
