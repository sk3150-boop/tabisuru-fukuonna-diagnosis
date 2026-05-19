import type { AffiliateLinkKey } from "@/data/affiliateLinks";

export type DestinationAffiliateLinks = Partial<Record<AffiliateLinkKey, string>>;

export const destinationAffiliateLinks: Record<string, DestinationAffiliateLinks> = {
  bali: {
    hotel: "https://www.skygate.co.jp/hotel/list?regionId=1054&form=research&sort=1&AgentCode=HTTOP&preAgentCode=HTTOP",
  },
};
