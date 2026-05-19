import type { AffiliateLinkKey } from "@/data/affiliateLinks";

export type DestinationAffiliateLinks = Partial<Record<AffiliateLinkKey, string>>;

export const destinationAffiliateLinks: Record<string, DestinationAffiliateLinks> = {
  // A8の「商品リンク作成」で都市別のURLを作ったら、ここに追加します。
  // 例:
  // bali: {
  //   hotel: "https://px.a8.net/...",
  //   flight: "https://px.a8.net/...",
  // },
};
