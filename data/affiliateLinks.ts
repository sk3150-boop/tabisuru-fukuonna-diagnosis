import type { Destination } from "@/types/diagnosis";

export type AffiliateLinkKey = "hotel" | "flight" | "esim" | "insurance" | "goods";

export type AffiliateLink = {
  label: string;
  url: string;
};

type AffiliateLinkTemplate = {
  label: string;
  templateUrl: string;
};

export const affiliateLinks: Record<AffiliateLinkKey, AffiliateLinkTemplate> = {
  hotel: {
    label: "ホテルを探す",
    templateUrl: "https://px.a8.net/svt/ejp?a8mat=4B3U7A+5Q0036+2YGS+64RJ6",
  },
  flight: {
    label: "航空券を探す",
    templateUrl: "https://px.a8.net/svt/ejp?a8mat=4B3U7A+5Q0036+2YGS+5YJRM",
  },
  esim: {
    label: "eSIMを準備する",
    templateUrl: "https://px.a8.net/svt/ejp?a8mat=4B3UZ2+AGVEPE+5UDW+5YJRM",
  },
  insurance: {
    label: "旅行保険を確認する",
    templateUrl: "https://px.a8.net/svt/ejp?a8mat=4B3U7A+5Q0036+2YGS+64RJ6",
  },
  goods: {
    label: "旅行グッズを見る",
    templateUrl: "https://px.a8.net/svt/ejp?a8mat=4B3UZ2+FJ21TE+5VYU+5YRHE",
  },
};

export const affiliateLinkOrder: AffiliateLinkKey[] = [
  "hotel",
  "flight",
  "esim",
  "insurance",
  "goods",
];

export const getAffiliateLinksForDestination = (destination: Destination): Record<AffiliateLinkKey, AffiliateLink> => {
  const values = {
    city: encodeURIComponent(destination.city),
    country: encodeURIComponent(destination.country),
  };

  return Object.fromEntries(
    Object.entries(affiliateLinks).map(([key, link]) => [
      key,
      {
        label: link.label,
        url: link.templateUrl
          .replaceAll("{city}", values.city)
          .replaceAll("{country}", values.country),
      },
    ]),
  ) as Record<AffiliateLinkKey, AffiliateLink>;
};
