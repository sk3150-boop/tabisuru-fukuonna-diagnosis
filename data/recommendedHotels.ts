import { destinationAffiliateLinks } from "@/data/destinationAffiliateLinks";

export type RecommendedHotel = {
  name: string;
  area: string;
  priceNote: string;
  summary: string;
  linkUrl: string;
  imageUrl?: string;
  imageAlt?: string;
};

function cityHotelLink(destinationId: string) {
  const link = destinationAffiliateLinks[destinationId]?.hotel;

  if (!link) {
    throw new Error(`Missing hotel affiliate link for ${destinationId}`);
  }

  return link;
}

function airTripHotelLink(hotelId: string) {
  const targetUrl = `https://www.skygate.co.jp/hotel/HTLITM/${hotelId}/?AgentCode=HTTOP`;

  return `https://px.a8.net/svt/ejp?a8mat=4B3U7A+5Q00UY+2YGS+BW0YB&a8ejpredirect=${encodeURIComponent(targetUrl)}`;
}

export const recommendedHotelsByDestination: Record<string, RecommendedHotel[]> = {
  taipei: [
    {
      name: "アーツリー ホテル",
      area: "松山",
      priceNote: "デザイン性の高いホテルを探したい人向け",
      summary: "緑やアートを感じる内装が印象的で、街歩きとホテル時間の両方を楽しみたい旅に合います。",
      linkUrl: "https://px.a8.net/svt/ejp?a8mat=4B3U7A+5Q00UY+2YGS+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.skygate.co.jp%2Fhotel%2FHTLITM%2F1928816%2F%3FAgentCode%3DHTTOP",
      imageUrl: "https://i.travelapi.com/lodging/20000000/19470000/19462300/19462202/99134f6c_z.jpg",
      imageAlt: "アーツリー ホテルのホテル画像",
    },
    {
      name: "ホテル プロバーブズ台北 台北賦楽旅居",
      area: "台北東区",
      priceNote: "大人っぽい台北ステイを楽しみたい人向け",
      summary: "買い物やカフェ巡りに便利なエリアで、落ち着いた雰囲気の滞在を選びたい人に向いています。",
      linkUrl: "https://px.a8.net/svt/ejp?a8mat=4B3U7A+5Q00UY+2YGS+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.skygate.co.jp%2Fhotel%2FHTLITM%2F1291762%2F%3FAgentCode%3DHTTOP",
      imageUrl: "https://i.travelapi.com/lodging/12000000/11790000/11789000/11788934/add57edb_z.jpg",
      imageAlt: "ホテル プロバーブズ台北 台北賦楽旅居のホテル画像",
    },
    {
      name: "グランド ハイアット台北",
      area: "信義",
      priceNote: "台北101周辺で安心感を重視したい人向け",
      summary: "有名エリアに滞在したい初台北や夫婦旅に選びやすく、観光と移動のしやすさが魅力です。",
      linkUrl: "https://px.a8.net/svt/ejp?a8mat=4B3U7A+5Q00UY+2YGS+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.skygate.co.jp%2Fhotel%2FHTLITM%2F203798%2F%3FAgentCode%3DHTTOP",
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
      linkUrl: "https://px.a8.net/svt/ejp?a8mat=4B3U7A+5Q00UY+2YGS+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.skygate.co.jp%2Fhotel%2FHTLITM%2F1189059%2F%3FAgentCode%3DHTTOP",
      imageUrl: "https://i.travelapi.com/lodging/10000000/9770000/9761300/9761216/0127b408_z.jpg",
      imageAlt: "ソラリア 西鉄 ホテル ソウル 明洞のホテル画像",
    },
    {
      name: "L7 明洞",
      area: "明洞",
      priceNote: "買い物と街歩きを楽しみたい人向け",
      summary: "明洞通りに近く、短期でもカフェ・買い物・グルメを動きやすく組み立てられます。",
      linkUrl: "https://px.a8.net/svt/ejp?a8mat=4B3U7A+5Q00UY+2YGS+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.skygate.co.jp%2Fhotel%2FHTLITM%2F1300551%2F%3FAgentCode%3DHTTOP",
      imageUrl: "https://i.travelapi.com/lodging/13000000/12520000/12511700/12511672/aff7da07_z.jpg",
      imageAlt: "L7 明洞のホテル画像",
    },
    {
      name: "アロフト・ソウル明洞",
      area: "明洞",
      priceNote: "スタイリッシュなホテルに泊まりたい人向け",
      summary: "観光にも買い物にも使いやすい立地で、デザイン性と快適さをほどよく重視できます。",
      linkUrl: "https://px.a8.net/svt/ejp?a8mat=4B3U7A+5Q00UY+2YGS+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.skygate.co.jp%2Fhotel%2FHTLITM%2F1715612%2F%3FAgentCode%3DHTTOP",
      imageUrl: "https://i.travelapi.com/lodging/17000000/16610000/16606300/16606220/c0fdd0c0_z.jpg",
      imageAlt: "アロフト・ソウル明洞のホテル画像",
    },
  ],
  busan: [
    {
      name: "ソラリア西鉄ホテル釜山",
      area: "西面",
      priceNote: "街歩きと買い物を重視したい人向け",
      summary: "西面エリアに泊まれるため、グルメ、買い物、地下鉄移動をまとめて楽しみやすいホテルです。",
      linkUrl: "https://px.a8.net/svt/ejp?a8mat=4B3U7A+5Q00UY+2YGS+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.skygate.co.jp%2Fhotel%2FHTLITM%2F1722565%2F%3FAgentCode%3DHTTOP",
    },
    {
      name: "Lavide Atlan Hotel 2",
      area: "海雲台",
      priceNote: "海辺の雰囲気も楽しみたい人向け",
      summary: "海雲台ビーチに近く、釜山らしいリゾート感と観光のしやすさを両方取り入れやすい立地です。",
      linkUrl: "https://px.a8.net/svt/ejp?a8mat=4B3U7A+5Q00UY+2YGS+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.skygate.co.jp%2Fhotel%2FHTLITM%2F3255312%2F%3FAgentCode%3DHTTOP",
    },
    {
      name: "LCT Residence Y Collection",
      area: "海雲台",
      priceNote: "ゆったり滞在や家族旅にも向く上質ステイ",
      summary: "海雲台周辺で広めの滞在先を選びたいときに候補にしやすく、景色重視の旅にも合います。",
      linkUrl: "https://px.a8.net/svt/ejp?a8mat=4B3U7A+5Q00UY+2YGS+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.skygate.co.jp%2Fhotel%2FHTLITM%2F3508858%2F%3FAgentCode%3DHTTOP",
    },
  ],
  bangkok: [
    {
      name: "マリオット バンコク スクンビット",
      area: "スクンビット",
      priceNote: "ホテルステイも楽しみたい大人旅向け",
      summary: "BTS沿線で動きやすく、スパやルーフトップも楽しみたい非日常のバンコク旅に合います。",
      linkUrl: "https://px.a8.net/svt/ejp?a8mat=4B3U7A+5Q00UY+2YGS+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.skygate.co.jp%2Fhotel%2FHTLITM%2F259544%2F%3FAgentCode%3DHTTOP",
      imageUrl: "https://i.travelapi.com/lodging/6000000/5800000/5795000/5794999/bc7a021b_z.jpg",
      imageAlt: "マリオット バンコク スクンビットのホテル画像",
    },
    {
      name: "ザ ウェスティン グランデ スクンビット バンコク",
      area: "アソーク",
      priceNote: "観光と買い物の移動しやすさ重視の人向け",
      summary: "ターミナル21周辺に滞在したい人に選びやすく、初バンコクでも行動計画を立てやすい立地です。",
      linkUrl: "https://px.a8.net/svt/ejp?a8mat=4B3U7A+5Q00UY+2YGS+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.skygate.co.jp%2Fhotel%2FHTLITM%2F167186%2F%3FAgentCode%3DHTTOP",
      imageUrl: "https://i.travelapi.com/lodging/1000000/380000/372400/372351/a23a5767_z.jpg",
      imageAlt: "ザ ウェスティン グランデ スクンビット バンコクのホテル画像",
    },
    {
      name: "ザ ランドマーク バンコク",
      area: "ナナ",
      priceNote: "駅近で便利な滞在を選びたい人向け",
      summary: "BTSナナ駅近くで移動しやすく、街歩きやグルメを効率よく楽しみたい旅に向いています。",
      linkUrl: "https://px.a8.net/svt/ejp?a8mat=4B3U7A+5Q00UY+2YGS+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.skygate.co.jp%2Fhotel%2FHTLITM%2F16210%2F%3FAgentCode%3DHTTOP",
      imageUrl: "https://i.travelapi.com/lodging/1000000/30000/20300/20211/83e2e94b_z.jpg",
      imageAlt: "ザ ランドマーク バンコクのホテル画像",
    },
  ],
  singapore: [
    {
      name: "パーク レジス バイ プリンス シンガポール",
      area: "クラークキー",
      priceNote: "観光と街歩きをバランスよく楽しみたい人向け",
      summary: "MRT駅やチャイナタウンへ動きやすく、初シンガポールでも予定を組み立てやすい立地です。",
      linkUrl: "https://px.a8.net/svt/ejp?a8mat=4B3U7A+5Q00UY+2YGS+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.skygate.co.jp%2Fhotel%2FHTLITM%2F66072%2F%3FAgentCode%3DHTTOP",
      imageUrl: "https://i.travelapi.com/lodging/5000000/4020000/4018200/4018160/709ffd51_z.jpg",
      imageAlt: "パーク レジス バイ プリンス シンガポールのホテル画像",
    },
    {
      name: "ジェン シンガポール オーチャードゲートウェイ バイ シャングリ・ラ",
      area: "オーチャード",
      priceNote: "買い物とホテルの快適さを重視したい人向け",
      summary: "オーチャード中心で移動しやすく、ショッピングやカフェ巡りを楽しみたい旅に合います。",
      linkUrl: "https://px.a8.net/svt/ejp?a8mat=4B3U7A+5Q00UY+2YGS+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.skygate.co.jp%2Fhotel%2FHTLITM%2F685943%2F%3FAgentCode%3DHTTOP",
      imageUrl: "https://i.travelapi.com/lodging/1000000/910000/906100/906062/2f0f95da_z.jpg",
      imageAlt: "ジェン シンガポール オーチャードゲートウェイ バイ シャングリ・ラのホテル画像",
    },
    {
      name: "グランド コプソーン ウォーターフロント ホテル シンガポール",
      area: "シンガポール川",
      priceNote: "落ち着いた川沿いステイを選びたい人向け",
      summary: "中心部に近く、ホテル時間も大切にしながら観光を楽しみたい夫婦旅や家族旅に向いています。",
      linkUrl: "https://px.a8.net/svt/ejp?a8mat=4B3U7A+5Q00UY+2YGS+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.skygate.co.jp%2Fhotel%2FHTLITM%2F17123%2F%3FAgentCode%3DHTTOP",
      imageUrl: "https://i.travelapi.com/lodging/1000000/560000/553900/553889/478ca87f_z.jpg",
      imageAlt: "グランド コプソーン ウォーターフロント ホテル シンガポールのホテル画像",
    },
  ],
  "kuala-lumpur": [
    {
      name: "ホテル ロイヤル クアラルンプール",
      area: "ブキッビンタン",
      priceNote: "買い物と街歩きをしやすくしたい人向け",
      summary: "ブキッビンタン周辺に泊まれるため、ショッピング、屋台、カフェ巡りを組み合わせやすいホテルです。",
      linkUrl: "https://px.a8.net/svt/ejp?a8mat=4B3U7A+5Q00UY+2YGS+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.skygate.co.jp%2Fhotel%2FHTLITM%2F17333%2F%3FAgentCode%3DHTTOP",
    },
    {
      name: "ロイヤルスイーツ アット プラチナム クアラルンプール ブキッビンタン KLCC",
      area: "ゴールデン トライアングル",
      priceNote: "夜景や高層ホテル感を楽しみたい人向け",
      summary: "KLCCや中心部への動きやすさがあり、都市型ステイを楽しみたい旅に合わせやすい候補です。",
      linkUrl: "https://px.a8.net/svt/ejp?a8mat=4B3U7A+5Q00UY+2YGS+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.skygate.co.jp%2Fhotel%2FHTLITM%2F1743437%2F%3FAgentCode%3DHTTOP",
    },
    {
      name: "M リゾート & ホテル",
      area: "ブキット キアラ",
      priceNote: "落ち着いた滞在を重視したい人向け",
      summary: "中心部のにぎやかさから少し離れ、ホテル時間も大切にしたい人に向いています。",
      linkUrl: "https://px.a8.net/svt/ejp?a8mat=4B3U7A+5Q00UY+2YGS+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.skygate.co.jp%2Fhotel%2FHTLITM%2F3218171%2F%3FAgentCode%3DHTTOP",
    },
  ],
  "hong-kong": [
    {
      name: "ザ ロイヤル ガーデン",
      area: "尖沙咀",
      priceNote: "観光とホテルの快適さを両立したい人向け",
      summary: "尖沙咀周辺に泊まれるため、夜景、ショッピング、街歩きを効率よく楽しみやすいホテルです。",
      linkUrl: "https://px.a8.net/svt/ejp?a8mat=4B3U7A+5Q00UY+2YGS+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.skygate.co.jp%2Fhotel%2FHTLITM%2F59156%2F%3FAgentCode%3DHTTOP",
    },
    {
      name: "ザ カオルーン ホテル",
      area: "尖沙咀",
      priceNote: "駅近で動きやすいホテルを選びたい人向け",
      summary: "尖沙咀駅周辺で移動しやすく、短い日数でも香港観光を詰め込みやすい候補です。",
      linkUrl: "https://px.a8.net/svt/ejp?a8mat=4B3U7A+5Q00UY+2YGS+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.skygate.co.jp%2Fhotel%2FHTLITM%2F166350%2F%3FAgentCode%3DHTTOP",
    },
    {
      name: "ページ 148 ページ ホテルズ",
      area: "尖沙咀",
      priceNote: "すっきりした雰囲気の滞在先を選びたい人向け",
      summary: "廟街夜市やハーバーシティ方面へ動きやすく、街歩き中心の香港旅に合わせやすいホテルです。",
      linkUrl: "https://px.a8.net/svt/ejp?a8mat=4B3U7A+5Q00UY+2YGS+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.skygate.co.jp%2Fhotel%2FHTLITM%2F2230615%2F%3FAgentCode%3DHTTOP",
    },
  ],
  "da-nang": [
    {
      name: "ハイアット リージェンシー ダナン リゾート アンド スパ",
      area: "グーハインソン",
      priceNote: "海沿いリゾートをしっかり楽しみたい人向け",
      summary: "ビーチリゾート感があり、ホテルステイと観光をバランスよく楽しみたいダナン旅に合います。",
      linkUrl: "https://px.a8.net/svt/ejp?a8mat=4B3U7A+5Q00UY+2YGS+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.skygate.co.jp%2Fhotel%2FHTLITM%2F182900%2F%3FAgentCode%3DHTTOP",
    },
    {
      name: "ステラ マリス ビーチ ダナン",
      area: "ミーケービーチ周辺",
      priceNote: "ビーチ近くでコスパも見たい人向け",
      summary: "ミーケービーチ周辺を拠点にしやすく、海、カフェ、街歩きを気軽に組み合わせられます。",
      linkUrl: "https://px.a8.net/svt/ejp?a8mat=4B3U7A+5Q00UY+2YGS+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.skygate.co.jp%2Fhotel%2FHTLITM%2F2814590%2F%3FAgentCode%3DHTTOP",
    },
    {
      name: "ナミ ブティック ホテル & アパートメント",
      area: "プオック ミー",
      priceNote: "気軽な滞在と動きやすさを重視したい人向け",
      summary: "ビーチや市内方面へ移動しやすく、予算を抑えながらダナンを楽しみたい旅に向いています。",
      linkUrl: "https://px.a8.net/svt/ejp?a8mat=4B3U7A+5Q00UY+2YGS+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.skygate.co.jp%2Fhotel%2FHTLITM%2F3527022%2F%3FAgentCode%3DHTTOP",
    },
  ],
  "hoi-an": [
    {
      name: "ホテル ロイヤル ホイアン",
      area: "ホイアン",
      priceNote: "旧市街とホテル時間を両方楽しみたい人向け",
      summary: "ホイアンらしい街歩きと、落ち着いたホテル滞在を組み合わせたい旅に使いやすい候補です。",
      linkUrl: "https://px.a8.net/svt/ejp?a8mat=4B3U7A+5Q00UY+2YGS+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.skygate.co.jp%2Fhotel%2FHTLITM%2F923100%2F%3FAgentCode%3DHTTOP",
    },
    {
      name: "アナンタラ ホイアン リゾート",
      area: "ホイアン シティ センター",
      priceNote: "記念旅行や上質な滞在を選びたい人向け",
      summary: "中心部に近く、ホイアンの街並みとリゾート感をゆったり楽しみたい人に向いています。",
      linkUrl: "https://px.a8.net/svt/ejp?a8mat=4B3U7A+5Q00UY+2YGS+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.skygate.co.jp%2Fhotel%2FHTLITM%2F142486%2F%3FAgentCode%3DHTTOP",
    },
    {
      name: "コイ リゾート アンド スパ ホイアン",
      area: "クア ダイ",
      priceNote: "スパやリゾート感を重視したい人向け",
      summary: "にぎやかな中心部だけでなく、ゆっくり過ごす時間も取りたいホイアン旅に合わせやすいホテルです。",
      linkUrl: "https://px.a8.net/svt/ejp?a8mat=4B3U7A+5Q00UY+2YGS+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.skygate.co.jp%2Fhotel%2FHTLITM%2F1719028%2F%3FAgentCode%3DHTTOP",
    },
  ],
  bali: [
    {
      name: "インターコンチネンタル バリ サヌール リゾート by IHG",
      area: "サヌール",
      priceNote: "1泊1室 44,000円台からの表示例",
      summary: "落ち着いた海辺ステイを楽しみたい人に合いやすい、上質なリゾート候補です。",
      linkUrl: "https://px.a8.net/svt/ejp?a8mat=4B3U7A+5Q00UY+2YGS+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.skygate.co.jp%2Fhotel%2FHTLITM%2F251989%2F%3FAgentCode%3DHTTOP",
      imageUrl: "https://i.travelapi.com/lodging/6000000/5440000/5433900/5433816/f94f366d_z.jpg",
      imageAlt: "インターコンチネンタル バリ サヌール リゾート by IHGのホテル画像",
    },
    {
      name: "ハイアット リージェンシー バリ",
      area: "サヌール",
      priceNote: "1泊1室 30,000円台からの表示例",
      summary: "リゾート感と価格のバランスを重視したい人に見やすい人気ホテルです。",
      linkUrl: "https://px.a8.net/svt/ejp?a8mat=4B3U7A+5Q00UY+2YGS+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.skygate.co.jp%2Fhotel%2FHTLITM%2F2141337%2F%3FAgentCode%3DHTTOP",
      imageUrl:
        "https://i.travelapi.com/lodging/1000000/180000/178400/178384/w3837h2557x3y3-6b6c1a8d_z.jpg",
      imageAlt: "ハイアット リージェンシー バリのホテル画像",
    },
    {
      name: "マヤ サヌール リゾート＆スパ",
      area: "サヌール",
      priceNote: "1泊1室 37,000円台からの表示例",
      summary: "スパや写真映えも楽しみたい、ゆったり派のバリ旅に合う候補です。",
      linkUrl: "https://px.a8.net/svt/ejp?a8mat=4B3U7A+5Q00UY+2YGS+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.skygate.co.jp%2Fhotel%2FHTLITM%2F1188765%2F%3FAgentCode%3DHTTOP",
      imageUrl:
        "https://i.travelapi.com/lodging/10000000/9730000/9725600/9725575/9695098a_z.jpg",
      imageAlt: "マヤ サヌール リゾート＆スパのホテル画像",
    },
  ],
  hanoi: [
    {
      name: "ジ エンバシー ホテル ハノイ",
      area: "オールド クォーター",
      priceNote: "初めてのハノイで観光しやすくしたい人向け",
      summary: "ホアンキエム湖や水上人形劇場へ動きやすく、旧市街を中心に歩きたい旅に向いています。",
      linkUrl: "https://px.a8.net/svt/ejp?a8mat=4B3U7A+5Q00UY+2YGS+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.skygate.co.jp%2Fhotel%2FHTLITM%2F3534163%2F%3FAgentCode%3DHTTOP",
    },
    {
      name: "ハノイ ル シャトー ホテル & スパ",
      area: "オールド クォーター",
      priceNote: "旧市街ステイとスパ感を楽しみたい人向け",
      summary: "ナイトマーケットやホアンキエム湖に近く、短い滞在でもハノイらしさを感じやすい候補です。",
      linkUrl: "https://px.a8.net/svt/ejp?a8mat=4B3U7A+5Q00UY+2YGS+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.skygate.co.jp%2Fhotel%2FHTLITM%2F3435591%2F%3FAgentCode%3DHTTOP",
    },
    {
      name: "ヒルトン ガーデン イン ハノイ",
      area: "ホアンキエム",
      priceNote: "安心感のあるホテルブランドを選びたい人向け",
      summary: "中心部観光に動きやすく、ホテルの安定感も重視したいハノイ旅に合わせやすいホテルです。",
      linkUrl: "https://px.a8.net/svt/ejp?a8mat=4B3U7A+5Q00UY+2YGS+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.skygate.co.jp%2Fhotel%2FHTLITM%2F249777%2F%3FAgentCode%3DHTTOP",
    },
  ],
  "ho-chi-minh": [
    {
      name: "M ビレッジ ホテル トン タット ダム",
      area: "1区",
      priceNote: "中心部で街歩きを楽しみたい人向け",
      summary: "サイゴンスクエアやドンコイ通りへ歩きやすく、カフェ、買い物、観光をまとめやすい立地です。",
      linkUrl: "https://px.a8.net/svt/ejp?a8mat=4B3U7A+5Q00UY+2YGS+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.skygate.co.jp%2Fhotel%2FHTLITM%2F3565838%2F%3FAgentCode%3DHTTOP",
    },
    {
      name: "サイゴン プリンス ホテル",
      area: "グエンフエ通り",
      priceNote: "王道観光を効率よく回りたい人向け",
      summary: "ドンコイ通りやベンタイン市場方面へ動きやすく、初めてのホーチミンにも選びやすいホテルです。",
      linkUrl: "https://px.a8.net/svt/ejp?a8mat=4B3U7A+5Q00UY+2YGS+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.skygate.co.jp%2Fhotel%2FHTLITM%2F5901%2F%3FAgentCode%3DHTTOP",
    },
    {
      name: "ダイナムブティックホテル",
      area: "1区",
      priceNote: "価格と中心部アクセスのバランスを見たい人向け",
      summary: "中心部を拠点にしながら、予算を抑えた滞在先も検討したい人に向いています。",
      linkUrl: "https://px.a8.net/svt/ejp?a8mat=4B3U7A+5Q00UY+2YGS+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.skygate.co.jp%2Fhotel%2FHTLITM%2F58247%2F%3FAgentCode%3DHTTOP",
    },
  ],
  macau: [
    {
      name: "ハーバービュー ホテル マカオ",
      area: "マカオ",
      priceNote: "雰囲気のあるホテルで観光したい人向け",
      summary: "マカオらしい上質感を取り入れつつ、街歩きやカジノ周辺観光にも合わせやすい候補です。",
      linkUrl: "https://px.a8.net/svt/ejp?a8mat=4B3U7A+5Q00UY+2YGS+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.skygate.co.jp%2Fhotel%2FHTLITM%2F1189945%2F%3FAgentCode%3DHTTOP",
    },
    {
      name: "ニュー オリエント ランドマーク ホテル",
      area: "マカオ",
      priceNote: "観光とホテル感のバランスを見たい人向け",
      summary: "中心部を拠点にしやすく、短いマカオ滞在でも動きやすいホテル候補です。",
      linkUrl: "https://px.a8.net/svt/ejp?a8mat=4B3U7A+5Q00UY+2YGS+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.skygate.co.jp%2Fhotel%2FHTLITM%2F683232%2F%3FAgentCode%3DHTTOP",
    },
    {
      name: "ハーバービュー ホテル",
      area: "マカオ",
      priceNote: "落ち着いた雰囲気で泊まりたい人向け",
      summary: "観光の拠点にしながら、ホテルの世界観も楽しみたいマカオ旅に合わせやすい候補です。",
      linkUrl: "https://px.a8.net/svt/ejp?a8mat=4B3U7A+5Q00UY+2YGS+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.skygate.co.jp%2Fhotel%2FHTLITM%2F1192813%2F%3FAgentCode%3DHTTOP",
    },
  ],
  taichung: [
    {
      name: "台中駅・宮原眼科周辺ホテル",
      area: "台中駅周辺",
      priceNote: "初めての台中で移動しやすくしたい人向け",
      summary: "鉄道やバスで動きやすく、宮原眼科や第二市場などの街歩きを組み込みやすいエリアです。",
      linkUrl: cityHotelLink("taichung"),
    },
    {
      name: "逢甲夜市周辺ホテル",
      area: "逢甲",
      priceNote: "夜市グルメを楽しみたい人向け",
      summary: "夜まで気軽に食べ歩きを楽しみたい旅に向き、台中らしいローカル感を味わいやすい候補です。",
      linkUrl: cityHotelLink("taichung"),
    },
    {
      name: "草悟道・勤美周辺ホテル",
      area: "草悟道",
      priceNote: "カフェや雑貨店めぐりをしたい人向け",
      summary: "緑の多い通りやおしゃれなカフェを楽しみやすく、ゆったりした女子旅にも合います。",
      linkUrl: cityHotelLink("taichung"),
    },
  ],
  "chiang-mai": [
    {
      name: "旧市街周辺ホテル",
      area: "旧市街",
      priceNote: "寺院巡りと街歩きを楽しみたい人向け",
      summary: "寺院、カフェ、ナイトマーケットへ動きやすく、初めてのチェンマイにも選びやすいエリアです。",
      linkUrl: cityHotelLink("chiang-mai"),
    },
    {
      name: "ニマンヘミン周辺ホテル",
      area: "ニマンヘミン",
      priceNote: "カフェや雑貨、写真映えを重視したい人向け",
      summary: "おしゃれなカフェやショップが多く、ゆっくり滞在しながら街を楽しみたい旅に向いています。",
      linkUrl: cityHotelLink("chiang-mai"),
    },
    {
      name: "リバーサイド周辺ホテル",
      area: "ピン川周辺",
      priceNote: "落ち着いたホテル時間も大切にしたい人向け",
      summary: "中心部のにぎわいから少し離れ、食事やスパも含めて穏やかに過ごしたい旅に合います。",
      linkUrl: cityHotelLink("chiang-mai"),
    },
  ],
  prague: [
    {
      name: "旧市街広場周辺ホテル",
      area: "旧市街",
      priceNote: "王道観光を徒歩中心で楽しみたい人向け",
      summary: "天文時計やカレル橋へ動きやすく、短い滞在でもプラハらしさを感じやすいエリアです。",
      linkUrl: cityHotelLink("prague"),
    },
    {
      name: "マラー・ストラナ周辺ホテル",
      area: "マラー・ストラナ",
      priceNote: "石畳の街並みと落ち着きを重視したい人向け",
      summary: "プラハ城方面へ行きやすく、歴史ある街の雰囲気をゆっくり味わいたい旅に向いています。",
      linkUrl: cityHotelLink("prague"),
    },
    {
      name: "新市街周辺ホテル",
      area: "新市街",
      priceNote: "価格と移動のバランスを見たい人向け",
      summary: "駅やトラムを使いやすく、観光だけでなく買い物や食事も組み合わせやすい候補です。",
      linkUrl: cityHotelLink("prague"),
    },
  ],
  budapest: [
    {
      name: "ドナウ川沿いホテル",
      area: "ドナウ川周辺",
      priceNote: "夜景と雰囲気を楽しみたい人向け",
      summary: "国会議事堂やくさり橋の景色を楽しみやすく、ブダペストらしい滞在感があります。",
      linkUrl: cityHotelLink("budapest"),
    },
    {
      name: "ペスト中心部ホテル",
      area: "ペスト側",
      priceNote: "観光と食事を効率よく楽しみたい人向け",
      summary: "カフェ、レストラン、ショッピングへ動きやすく、初めてのブダペストにも選びやすいエリアです。",
      linkUrl: cityHotelLink("budapest"),
    },
    {
      name: "ブダ城周辺ホテル",
      area: "ブダ側",
      priceNote: "歴史ある景色と落ち着きを重視したい人向け",
      summary: "王宮の丘や漁夫の砦方面へ行きやすく、静かめの滞在を選びたい人に向いています。",
      linkUrl: cityHotelLink("budapest"),
    },
  ],
  lisbon: [
    {
      name: "バイシャ周辺ホテル",
      area: "バイシャ",
      priceNote: "初めてのリスボンで観光しやすくしたい人向け",
      summary: "広場、トラム、レストランへ動きやすく、街歩きの拠点にしやすい中心エリアです。",
      linkUrl: cityHotelLink("lisbon"),
    },
    {
      name: "シアード周辺ホテル",
      area: "シアード",
      priceNote: "買い物とカフェ巡りを楽しみたい人向け",
      summary: "坂道の街並みと洗練された店を楽しみやすく、女性向けメディアらしい旅に合います。",
      linkUrl: cityHotelLink("lisbon"),
    },
    {
      name: "アルファマ周辺ホテル",
      area: "アルファマ",
      priceNote: "ローカル感と写真映えを重視したい人向け",
      summary: "細い路地や展望台を楽しみやすく、リスボンらしい情緒を味わいたい人に向いています。",
      linkUrl: cityHotelLink("lisbon"),
    },
  ],
  porto: [
    {
      name: "リベイラ周辺ホテル",
      area: "リベイラ",
      priceNote: "川沿いの景色を楽しみたい人向け",
      summary: "ドウロ川沿いの街並みを楽しみやすく、写真映えするポルト旅にぴったりです。",
      linkUrl: cityHotelLink("porto"),
    },
    {
      name: "サン・ベント駅周辺ホテル",
      area: "中心部",
      priceNote: "観光と移動を効率よくしたい人向け",
      summary: "駅や主要観光地へ動きやすく、短い滞在でも街歩きを組み立てやすい候補です。",
      linkUrl: cityHotelLink("porto"),
    },
    {
      name: "ヴィラ・ノヴァ・デ・ガイア周辺ホテル",
      area: "ガイア側",
      priceNote: "ワインと夜景を楽しみたい人向け",
      summary: "ワインセラーや川越しの景色を楽しみやすく、少し大人っぽい滞在に向いています。",
      linkUrl: cityHotelLink("porto"),
    },
  ],
  malta: [
    {
      name: "バレッタ周辺ホテル",
      area: "バレッタ",
      priceNote: "歴史と街歩きを楽しみたい人向け",
      summary: "世界遺産の街並みを歩きやすく、短い滞在でもマルタらしさを感じやすい拠点です。",
      linkUrl: cityHotelLink("malta"),
    },
    {
      name: "スリーマ周辺ホテル",
      area: "スリーマ",
      priceNote: "買い物と海沿い散歩を楽しみたい人向け",
      summary: "フェリー移動や海沿いの散歩がしやすく、観光と滞在のバランスを取りやすいエリアです。",
      linkUrl: cityHotelLink("malta"),
    },
    {
      name: "セントジュリアンズ周辺ホテル",
      area: "セントジュリアンズ",
      priceNote: "リゾート感と食事を重視したい人向け",
      summary: "レストランやホテル施設を楽しみやすく、華やかな滞在を選びたい人に合います。",
      linkUrl: cityHotelLink("malta"),
    },
  ],
  tallinn: [
    {
      name: "旧市街周辺ホテル",
      area: "旧市街",
      priceNote: "中世の街並みを満喫したい人向け",
      summary: "城壁や石畳の街歩きを楽しみやすく、タリンの雰囲気を一番感じやすいエリアです。",
      linkUrl: cityHotelLink("tallinn"),
    },
    {
      name: "ロッテルマン地区周辺ホテル",
      area: "ロッテルマン",
      priceNote: "デザイン性と便利さを重視したい人向け",
      summary: "新旧の建築が混ざるエリアで、カフェや買い物も楽しみたい旅に向いています。",
      linkUrl: cityHotelLink("tallinn"),
    },
    {
      name: "港周辺ホテル",
      area: "タリン港周辺",
      priceNote: "ヘルシンキとの周遊も考えたい人向け",
      summary: "フェリー移動を組み合わせやすく、北欧・バルト周遊の拠点として使いやすい候補です。",
      linkUrl: cityHotelLink("tallinn"),
    },
  ],
  ljubljana: [
    {
      name: "旧市街周辺ホテル",
      area: "旧市街",
      priceNote: "小さな街を徒歩で楽しみたい人向け",
      summary: "川沿いのカフェや市場へ動きやすく、リュブリャナの穏やかな雰囲気を楽しめます。",
      linkUrl: cityHotelLink("ljubljana"),
    },
    {
      name: "リュブリャナ駅周辺ホテル",
      area: "駅周辺",
      priceNote: "ブレッド湖など日帰り旅も考えたい人向け",
      summary: "鉄道やバス移動を組み込みやすく、スロベニア周遊の入口として便利なエリアです。",
      linkUrl: cityHotelLink("ljubljana"),
    },
    {
      name: "ティヴォリ公園周辺ホテル",
      area: "ティヴォリ公園",
      priceNote: "静かでゆったりした滞在を選びたい人向け",
      summary: "中心部に近すぎない落ち着きがあり、散歩や自然も楽しみたい人に向いています。",
      linkUrl: cityHotelLink("ljubljana"),
    },
  ],
  dubrovnik: [
    {
      name: "旧市街周辺ホテル",
      area: "旧市街",
      priceNote: "世界遺産の街並みを満喫したい人向け",
      summary: "城壁歩きや石畳の路地を楽しみやすく、ドブロブニクらしい滞在感があります。",
      linkUrl: cityHotelLink("dubrovnik"),
    },
    {
      name: "ピレ門周辺ホテル",
      area: "ピレ門",
      priceNote: "観光しやすさを重視したい人向け",
      summary: "旧市街入口に近く、日中の観光と夜の散策を組み合わせやすい候補です。",
      linkUrl: cityHotelLink("dubrovnik"),
    },
    {
      name: "ラパド周辺ホテル",
      area: "ラパド",
      priceNote: "海沿いリゾート感も楽しみたい人向け",
      summary: "ビーチやホテル時間を大切にしながら、旧市街観光も組み合わせたい旅に合います。",
      linkUrl: cityHotelLink("dubrovnik"),
    },
  ],
  helsinki: [
    {
      name: "中央駅周辺ホテル",
      area: "中央駅周辺",
      priceNote: "初めてのヘルシンキで動きやすくしたい人向け",
      summary: "鉄道、トラム、空港アクセスを組み立てやすく、短い滞在でも観光しやすい拠点です。",
      linkUrl: cityHotelLink("helsinki"),
    },
    {
      name: "デザイン地区周辺ホテル",
      area: "デザイン地区",
      priceNote: "北欧雑貨やカフェを楽しみたい人向け",
      summary: "ショップやギャラリーを巡りやすく、落ち着いた北欧旅にぴったりです。",
      linkUrl: cityHotelLink("helsinki"),
    },
    {
      name: "港・マーケット広場周辺ホテル",
      area: "港周辺",
      priceNote: "海辺の景色と市場を楽しみたい人向け",
      summary: "マーケット広場やフェリー移動に便利で、タリン日帰りも考えやすいエリアです。",
      linkUrl: cityHotelLink("helsinki"),
    },
  ],
  paris: [
    {
      name: "インターコンチネンタル パリ シャンゼリゼ by IHG",
      area: "シャンゼリゼ",
      priceNote: "王道パリとホテルの特別感を重視したい人向け",
      summary: "シャンゼリゼ周辺を拠点にしやすく、買い物や名所巡りを華やかに楽しみたい旅に合います。",
      linkUrl: airTripHotelLink("51343"),
    },
    {
      name: "シタディーヌ レ アール パリ",
      area: "レ アール",
      priceNote: "観光と暮らすような滞在を両立したい人向け",
      summary: "ルーブル方面や地下鉄移動を組み立てやすく、街歩き中心のパリ旅に使いやすい候補です。",
      linkUrl: airTripHotelLink("145416"),
    },
    {
      name: "ニュー ホテル オペラ",
      area: "オペラ周辺",
      priceNote: "価格と中心部アクセスのバランスを見たい人向け",
      summary: "オペラ方面へ動きやすく、買い物、カフェ、美術館めぐりを無理なく組み合わせやすいホテルです。",
      linkUrl: airTripHotelLink("542132"),
    },
  ],
  rome: [
    {
      name: "ホテル ディンギルテッラ ローマ - スターホテルズ コレツィオーネ",
      area: "ローマ中心部",
      priceNote: "王道ローマを上質に楽しみたい人向け",
      summary: "スペイン広場や中心部観光に動きやすく、記念旅行や大人の街歩きにも合わせやすい候補です。",
      linkUrl: airTripHotelLink("9428"),
    },
    {
      name: "マスター トレビ",
      area: "トレビの泉周辺",
      priceNote: "名所近くで観光しやすくしたい人向け",
      summary: "トレビの泉周辺を拠点にしやすく、短い滞在でもローマらしい景色を楽しみやすいホテルです。",
      linkUrl: airTripHotelLink("3498968"),
    },
    {
      name: "メディチ ローマ ホテル",
      area: "テルミニ",
      priceNote: "移動しやすさと価格感を見たい人向け",
      summary: "テルミニ駅方面を使いやすく、鉄道移動や他都市周遊も考えるローマ旅に向いています。",
      linkUrl: airTripHotelLink("528700"),
    },
  ],
  florence: [
    {
      name: "ドゥオモ周辺ホテル",
      area: "ドゥオモ",
      priceNote: "名所を徒歩で巡りたい人向け",
      summary: "大聖堂や美術館へ動きやすく、短い滞在でもフィレンツェらしさを感じやすいエリアです。",
      linkUrl: cityHotelLink("florence"),
    },
    {
      name: "サンタ・マリア・ノヴェッラ駅周辺ホテル",
      area: "駅周辺",
      priceNote: "移動と観光のバランスを見たい人向け",
      summary: "列車移動や周遊にも便利で、初めてのフィレンツェでも使いやすい候補です。",
      linkUrl: cityHotelLink("florence"),
    },
    {
      name: "オルトラルノ周辺ホテル",
      area: "オルトラルノ",
      priceNote: "落ち着いた工房街の雰囲気を楽しみたい人向け",
      summary: "中心部から少し離れ、職人街やカフェを巡りたい大人旅に向いています。",
      linkUrl: cityHotelLink("florence"),
    },
  ],
  barcelona: [
    {
      name: "カタロニア プラザ カタルーニャ",
      area: "カタルーニャ広場",
      priceNote: "初めてのバルセロナで動きやすくしたい人向け",
      summary: "中心部に泊まりやすく、観光、買い物、食事をまとめて楽しみたい旅に使いやすいホテルです。",
      linkUrl: airTripHotelLink("663386"),
    },
    {
      name: "W バルセロナ",
      area: "バルセロネータ",
      priceNote: "海沿いの特別感と写真映えを重視したい人向け",
      summary: "海辺の景色とホテルステイを楽しみやすく、記念旅行やリゾート感のある滞在に合います。",
      linkUrl: airTripHotelLink("54586"),
    },
    {
      name: "ホテル カレドニアン",
      area: "エイサンプル",
      priceNote: "街歩きと価格のバランスを見たい人向け",
      summary: "中心部へ動きやすく、建築めぐりや買い物を無理なく組み合わせたい旅に向いています。",
      linkUrl: airTripHotelLink("5997"),
    },
  ],
  vienna: [
    {
      name: "リング通り周辺ホテル",
      area: "リング通り",
      priceNote: "王道観光と上品な街歩きを楽しみたい人向け",
      summary: "国立歌劇場や美術館へ動きやすく、ウィーンらしい優雅な滞在に合います。",
      linkUrl: cityHotelLink("vienna"),
    },
    {
      name: "シュテファン大聖堂周辺ホテル",
      area: "旧市街",
      priceNote: "初めてのウィーンで観光しやすくしたい人向け",
      summary: "旧市街の名所やカフェへ歩きやすく、短い滞在でも満足度を上げやすいエリアです。",
      linkUrl: cityHotelLink("vienna"),
    },
    {
      name: "マリアヒルファー通り周辺ホテル",
      area: "マリアヒルフ",
      priceNote: "買い物とコスパを重視したい人向け",
      summary: "ショッピング通りに近く、中心部より少し価格を見ながら選びたい旅に向いています。",
      linkUrl: cityHotelLink("vienna"),
    },
  ],
  istanbul: [
    {
      name: "スルタンアフメット周辺ホテル",
      area: "旧市街",
      priceNote: "世界遺産と王道観光を楽しみたい人向け",
      summary: "ブルーモスクやアヤソフィアへ動きやすく、初めてのイスタンブールに選びやすいエリアです。",
      linkUrl: cityHotelLink("istanbul"),
    },
    {
      name: "ガラタ・カラキョイ周辺ホテル",
      area: "ガラタ",
      priceNote: "カフェや海峡の雰囲気を楽しみたい人向け",
      summary: "坂道の街並みやおしゃれな店を巡りやすく、写真映えする滞在に向いています。",
      linkUrl: cityHotelLink("istanbul"),
    },
    {
      name: "タクシム周辺ホテル",
      area: "新市街",
      priceNote: "食事と買い物、夜のにぎわいを重視したい人向け",
      summary: "新市街の移動拠点にしやすく、レストランやショップを楽しみたい旅に合います。",
      linkUrl: cityHotelLink("istanbul"),
    },
  ],
};
