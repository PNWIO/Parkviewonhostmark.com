export const SITE = {
  name: "Parkview at Hostmark",
  shortName: "Parkview",
  address: "1272 NE Hostmark Street",
  city: "Poulsbo, WA 98370",
  parcel: "232601-1-008-2008",
  acres: 3.06,
  phase1Lots: 8,
  contact: {
    name: "Ian Laughlin",
    title: "Vice President",
    company: "Laughlin Development LLC",
    email: "ian@laughlindevelopmentllc.com",
    phone: "206.226.1988",
    phoneHref: "tel:+12062261988",
    mailHref: "mailto:ian@laughlindevelopmentllc.com",
    poBox: "PO Box 10607, Bainbridge Island, WA 98110",
  },
  mapsQuery: "1272 NE Hostmark Street, Poulsbo, WA 98370",
} as const;

export type Lot = {
  id: number;
  name: string;
  /** Plat lot area from the survey / pre-preliminary plat */
  areaSqFt: number;
  acres: number;
  /** Concept living area sized to the lot — not the plat square footage */
  homeSqFt: number;
  orientation: string;
  homeImage: string;
  homeName: string;
  summary: string;
  features: string[];
  /** SVG polygon points, viewBox 0 0 560 430 */
  points: string;
};

export const LOTS: Lot[] = [
  {
    id: 1,
    name: "Lot 1",
    areaSqFt: 5000,
    acres: 0.11,
    homeSqFt: 1980,
    orientation: "Southwest · private lane",
    homeImage: "/images/house-1.jpg",
    homeName: "The Lane House",
    summary:
      "The first home you meet on the lane — a compact two-story cedar volume of about 1,980 SF, with a gravel court and Hostmark just beyond the open space.",
    features: ["1,980 SF concept", "Lane frontage", "Morning light"],
    points: "28,292 148,292 148,358 36,358 28,330",
  },
  {
    id: 2,
    name: "Lot 2",
    areaSqFt: 5000,
    acres: 0.11,
    homeSqFt: 2140,
    orientation: "West · private lane",
    homeImage: "/images/house-2.jpg",
    homeName: "The Fir House",
    summary:
      "A 2,140 SF dark timber house in the trees. Shou sugi ban cedar and a glass corner looking into retained firs along the west line.",
    features: ["2,140 SF concept", "West tree line", "Two-story glass corner"],
    points: "28,226 148,226 148,292 28,292",
  },
  {
    id: 3,
    name: "Lot 3",
    areaSqFt: 5000,
    acres: 0.11,
    homeSqFt: 1860,
    orientation: "West · private lane",
    homeImage: "/images/house-3.jpg",
    homeName: "The Court House",
    summary:
      "A pale-cedar court on a 5,000 SF lot — about 1,860 SF of house, a sheltered entry, mossy stones, and a garden wall of glass.",
    features: ["1,860 SF concept", "Sheltered court", "Garden exposure"],
    points: "28,160 148,160 148,226 28,226",
  },
  {
    id: 4,
    name: "Lot 4",
    areaSqFt: 5000,
    acres: 0.11,
    homeSqFt: 2220,
    orientation: "Northwest · park edge",
    homeImage: "/images/house-4.jpg",
    homeName: "The Overlook",
    summary:
      "Northwest corner of Phase 1. A 2,220 SF cedar upper volume on a concrete plinth, with the park close at hand beyond the north line.",
    features: ["2,220 SF concept", "Park-adjacent", "Hillside terrace"],
    points: "28,92 148,92 148,160 28,160",
  },
  {
    id: 5,
    name: "Lot 5",
    areaSqFt: 7500,
    acres: 0.17,
    homeSqFt: 2460,
    orientation: "East of the lane · south",
    homeImage: "/images/house-5.jpg",
    homeName: "The Rain House",
    summary:
      "A 7,500 SF mid-block lot east of the lane. The rain-screen cedar house is about 2,460 SF, with a steel carport and open space to the south.",
    features: ["2,460 SF concept", "7,500 SF lot", "Open space to the south"],
    points: "176,238 286,238 286,306 198,306 176,280",
  },
  {
    id: 6,
    name: "Lot 6",
    areaSqFt: 7885,
    acres: 0.18,
    homeSqFt: 2740,
    orientation: "East of the lane · mid",
    homeImage: "/images/house-6.jpg",
    homeName: "The Canopy House",
    summary:
      "The largest of the mid-block lots at 7,885 SF. A 2,740 SF honey-cedar house, a balcony in the trees, and room for a true Northwest contemporary.",
    features: ["2,740 SF concept", "7,885 SF lot", "Treetop balcony"],
    points: "176,164 286,164 286,238 176,238",
  },
  {
    id: 7,
    name: "Lot 7",
    areaSqFt: 7170,
    acres: 0.16,
    homeSqFt: 2380,
    orientation: "East of the lane · north",
    homeImage: "/images/house-7.jpg",
    homeName: "The Shed House",
    summary:
      "North of the mid-block, under Lot 8. A 2,380 SF long shed-roof house on a 7,170 SF lot, a side terrace, and a short walk to the park-edge open space.",
    features: ["2,380 SF concept", "7,170 SF lot", "North light"],
    points: "176,92 286,92 286,164 176,164",
  },
  {
    id: 8,
    name: "Lot 8",
    areaSqFt: 12861,
    acres: 0.3,
    homeSqFt: 3160,
    orientation: "North · Wilderness Park",
    homeImage: "/images/house-8.jpg",
    homeName: "The Park House",
    summary:
      "The signature parcel — 12,861 SF on the north line. A 3,160 SF park house among retained firs, with Poulsbo’s Wilderness Park at the back.",
    features: ["3,160 SF concept", "12,861 SF lot", "Park edge"],
    points: "148,34 322,34 322,92 176,92 176,74 148,74",
  },
];

export function getLot(id: number) {
  return LOTS.find((lot) => lot.id === id);
}

export const DRIVE_TIMES = [
  { label: "Downtown Poulsbo · Liberty Bay", time: "3 min" },
  { label: "Naval Base Kitsap – Bangor", time: "10 min" },
  { label: "Silverdale retail core", time: "15 min" },
  { label: "Bainbridge–Seattle ferry", time: "20 min" },
  { label: "Kingston–Edmonds ferry", time: "20 min" },
] as const;
