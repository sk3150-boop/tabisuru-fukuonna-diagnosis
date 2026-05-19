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
    templateUrl: "https://example.com/affiliate/hotel?city={city}&country={country}",
  },
  flight: {
    label: "航空券を探す",
    templateUrl: "https://example.com/affiliate/flight?to={city}&country={country}",
  },
  esim: {
    label: "eSIMを準備する",
    templateUrl: "https://example.com/affiliate/esim?destination={country}",
  },
  insurance: {
    label: "旅行保険を確認する",
    templateUrl: "https://example.com/affiliate/insurance?destination={country}",
  },
  goods: {
    label: "旅行グッズを見る",
    templateUrl: "https://example.com/affiliate/goods?theme=overseas-travel",
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
