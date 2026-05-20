import type { AffiliateLinkKey } from "@/data/affiliateLinks";

export type DestinationAffiliateLinks = Partial<Record<AffiliateLinkKey, string>>;

export const destinationAffiliateLinks: Record<string, DestinationAffiliateLinks> = {
  taipei: {
    hotel: "https://px.a8.net/svt/ejp?a8mat=4B3U7A+5Q00UY+2YGS+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.skygate.co.jp%2Fhotel%2FLIST%2F6226684%2F%3FAgentCode%3DHTTOP",
  },
  taichung: {
    hotel: "https://px.a8.net/svt/ejp?a8mat=4B3U7A+5Q00UY+2YGS+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.skygate.co.jp%2Fhotel%2FHTLCTY%2FRMQ%2F%3FAgentCode%3DHTTOP",
  },
  seoul: {
    hotel: "https://px.a8.net/svt/ejp?a8mat=4B3U7A+5Q00UY+2YGS+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.skygate.co.jp%2Fhotel%2FHTLCTY%2FSEL%2F%3FAgentCode%3DHTTOP",
  },
  busan: {
    hotel: "https://px.a8.net/svt/ejp?a8mat=4B3U7A+5Q00UY+2YGS+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.skygate.co.jp%2Fhotel%2FHTLCTY%2FPUS%2F%3FAgentCode%3DHTTOP",
  },
  bangkok: {
    hotel: "https://px.a8.net/svt/ejp?a8mat=4B3U7A+5Q00UY+2YGS+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.skygate.co.jp%2Fhotel%2FHTLCTY%2FBKK%2F%3FAgentCode%3DHTTOP",
  },
  "chiang-mai": {
    hotel: "https://px.a8.net/svt/ejp?a8mat=4B3U7A+5Q00UY+2YGS+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.skygate.co.jp%2Fhotel%2FHTLCTY%2FCNX%2F%3FAgentCode%3DHTTOP",
  },
  "da-nang": {
    hotel: "https://px.a8.net/svt/ejp?a8mat=4B3U7A+5Q00UY+2YGS+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.skygate.co.jp%2Fhotel%2FHTLCTY%2FDAD%2F%3FAgentCode%3DHTTOP",
  },
  "hoi-an": {
    hotel: "https://px.a8.net/svt/ejp?a8mat=4B3U7A+5Q00UY+2YGS+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.skygate.co.jp%2Fhotel%2FHTLCTY%2FDAD%2F%3FAgentCode%3DHTTOP",
  },
  singapore: {
    hotel: "https://px.a8.net/svt/ejp?a8mat=4B3U7A+5Q00UY+2YGS+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.skygate.co.jp%2Fhotel%2FHTLCTY%2FSIN%2F%3FAgentCode%3DHTTOP",
  },
  "kuala-lumpur": {
    hotel: "https://px.a8.net/svt/ejp?a8mat=4B3U7A+5Q00UY+2YGS+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.skygate.co.jp%2Fhotel%2FHTLCTY%2FKUL%2F%3FAgentCode%3DHTTOP",
  },
  bali: {
    hotel: "https://px.a8.net/svt/ejp?a8mat=4B3U7A+5Q00UY+2YGS+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.skygate.co.jp%2Fhotel%2Flist%3FregionId%3D1054%26form%3Dresearch%26sort%3D1%26AgentCode%3DHTTOP%26preAgentCode%3DHTTOP",
  },
  hanoi: {
    hotel: "https://px.a8.net/svt/ejp?a8mat=4B3U7A+5Q00UY+2YGS+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.skygate.co.jp%2Fhotel%2FHTLCTY%2FHAN%2F%3FAgentCode%3DHTTOP",
  },
  "ho-chi-minh": {
    hotel: "https://px.a8.net/svt/ejp?a8mat=4B3U7A+5Q00UY+2YGS+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.skygate.co.jp%2Fhotel%2FHTLCTY%2FSGN%2F%3FAgentCode%3DHTTOP",
  },
  "hong-kong": {
    hotel: "https://px.a8.net/svt/ejp?a8mat=4B3U7A+5Q00UY+2YGS+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.skygate.co.jp%2Fhotel%2FHTLCTY%2FHKG%2F%3FAgentCode%3DHTTOP",
  },
  macau: {
    hotel: "https://px.a8.net/svt/ejp?a8mat=4B3U7A+5Q00UY+2YGS+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.skygate.co.jp%2Fhotel%2FHTLCTY%2FMFM%2F%3FAgentCode%3DHTTOP",
  },
  prague: {
    hotel: "https://px.a8.net/svt/ejp?a8mat=4B3U7A+5Q00UY+2YGS+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.skygate.co.jp%2Fhotel%2FHTLCTY%2FPRG%2F%3FAgentCode%3DHTTOP",
  },
  budapest: {
    hotel: "https://px.a8.net/svt/ejp?a8mat=4B3U7A+5Q00UY+2YGS+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.skygate.co.jp%2Fhotel%2FHTLCTY%2FBUD%2F%3FAgentCode%3DHTTOP",
  },
  lisbon: {
    hotel: "https://px.a8.net/svt/ejp?a8mat=4B3U7A+5Q00UY+2YGS+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.skygate.co.jp%2Fhotel%2FHTLCTY%2FLIS%2F%3FAgentCode%3DHTTOP",
  },
  porto: {
    hotel: "https://px.a8.net/svt/ejp?a8mat=4B3U7A+5Q00UY+2YGS+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.skygate.co.jp%2Fhotel%2FHTLCTY%2FOPO%2F%3FAgentCode%3DHTTOP",
  },
  malta: {
    hotel: "https://px.a8.net/svt/ejp?a8mat=4B3U7A+5Q00UY+2YGS+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.skygate.co.jp%2Fhotel%2FHTLCTY%2FMLA%2F%3FAgentCode%3DHTTOP",
  },
  tallinn: {
    hotel: "https://px.a8.net/svt/ejp?a8mat=4B3U7A+5Q00UY+2YGS+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.skygate.co.jp%2Fhotel%2FHTLCTY%2FTLL%2F%3FAgentCode%3DHTTOP",
  },
  ljubljana: {
    hotel: "https://px.a8.net/svt/ejp?a8mat=4B3U7A+5Q00UY+2YGS+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.skygate.co.jp%2Fhotel%2FHTLCTY%2FLJU%2F%3FAgentCode%3DHTTOP",
  },
  dubrovnik: {
    hotel: "https://px.a8.net/svt/ejp?a8mat=4B3U7A+5Q00UY+2YGS+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.skygate.co.jp%2Fhotel%2FHTLCTY%2FDBV%2F%3FAgentCode%3DHTTOP",
  },
  helsinki: {
    hotel: "https://px.a8.net/svt/ejp?a8mat=4B3U7A+5Q00UY+2YGS+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.skygate.co.jp%2Fhotel%2FHTLCTY%2FHEL%2F%3FAgentCode%3DHTTOP",
  },
  paris: {
    hotel: "https://px.a8.net/svt/ejp?a8mat=4B3U7A+5Q00UY+2YGS+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.skygate.co.jp%2Fhotel%2FHTLCTY%2FPAR%2F%3FAgentCode%3DHTTOP",
  },
  rome: {
    hotel: "https://px.a8.net/svt/ejp?a8mat=4B3U7A+5Q00UY+2YGS+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.skygate.co.jp%2Fhotel%2FHTLCTY%2FROM%2F%3FAgentCode%3DHTTOP",
  },
  florence: {
    hotel: "https://px.a8.net/svt/ejp?a8mat=4B3U7A+5Q00UY+2YGS+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.skygate.co.jp%2Fhotel%2FHTLCTY%2FFLR%2F%3FAgentCode%3DHTTOP",
  },
  barcelona: {
    hotel: "https://px.a8.net/svt/ejp?a8mat=4B3U7A+5Q00UY+2YGS+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.skygate.co.jp%2Fhotel%2FHTLCTY%2FBCN%2F%3FAgentCode%3DHTTOP",
  },
  vienna: {
    hotel: "https://px.a8.net/svt/ejp?a8mat=4B3U7A+5Q00UY+2YGS+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.skygate.co.jp%2Fhotel%2FHTLCTY%2FVIE%2F%3FAgentCode%3DHTTOP",
  },
  istanbul: {
    hotel: "https://px.a8.net/svt/ejp?a8mat=4B3U7A+5Q00UY+2YGS+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.skygate.co.jp%2Fhotel%2FHTLCTY%2FIST%2F%3FAgentCode%3DHTTOP",
  },
};
