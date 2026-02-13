export type Mandal = {
  id: string;
  name: string;
  villages: number;
  programs: string[];
  stats: { label: string; value: string }[];
  stories: { quote: string; author: string }[];
  svgPath: string;
  color: string;
};

export const mandals: Mandal[] = [
  {
    id: "penukonda",
    name: "Penukonda",
    villages: 85,
    programs: ["Watershed Management", "Education", "Low Carbon Farming"],
    stats: [
      { label: "Check Dams Built", value: "120+" },
      { label: "Trees Planted", value: "500,000+" },
      { label: "Acres Reforested", value: "1,200" },
    ],
    stories: [
      {
        quote:
          "The check dams changed everything. Our wells have water now even in summer.",
        author: "Ramesh, Farmer",
      },
    ],
    svgPath:
      "M 180 80 L 260 60 L 300 100 L 310 160 L 280 200 L 220 210 L 170 180 L 160 120 Z",
    color: "#16a34a",
  },
  {
    id: "roddam",
    name: "Roddam",
    villages: 72,
    programs: ["Biogas Digesters", "CDM", "Watershed Management"],
    stats: [
      { label: "Biogas Digesters", value: "1,200" },
      { label: "Households Benefited", value: "800+" },
      { label: "CO2 Offset (tonnes)", value: "3,500" },
    ],
    stories: [
      {
        quote:
          "We no longer need to scrub sooty cooking pots. Biogas changed our kitchen completely.",
        author: "Lakshmi, Homemaker",
      },
    ],
    svgPath:
      "M 300 100 L 380 70 L 420 110 L 430 170 L 400 210 L 310 160 Z",
    color: "#15803d",
  },
  {
    id: "gorantla",
    name: "Gorantla",
    villages: 65,
    programs: ["Education", "Women's Empowerment", "NRM"],
    stats: [
      { label: "Women Trained", value: "3,000+" },
      { label: "Students Supported", value: "200+" },
      { label: "Self-Help Groups", value: "45" },
    ],
    stories: [
      {
        quote:
          "The vocational training gave me skills to support my family independently.",
        author: "Padma, Artisan",
      },
    ],
    svgPath:
      "M 160 120 L 220 210 L 200 280 L 140 300 L 90 260 L 80 180 Z",
    color: "#22c55e",
  },
  {
    id: "somandepalli",
    name: "Somandepalli",
    villages: 58,
    programs: ["Low Carbon Farming", "Watershed Management", "CDM"],
    stats: [
      { label: "Farm Plots Converted", value: "450+" },
      { label: "Crop Yield Increase", value: "40%" },
      { label: "Pesticide Reduction", value: "60%" },
    ],
    stories: [
      {
        quote:
          "Low carbon farming methods doubled my groundnut yield while cutting costs.",
        author: "Venkatesh, Farmer",
      },
    ],
    svgPath:
      "M 220 210 L 280 200 L 310 160 L 400 210 L 380 280 L 320 310 L 260 300 L 200 280 Z",
    color: "#4ade80",
  },
  {
    id: "chilamathur",
    name: "Chilamathur",
    villages: 70,
    programs: ["NRM", "Education", "Biogas Digesters"],
    stats: [
      { label: "Villages Reached", value: "70" },
      { label: "Acres Restored", value: "800+" },
      { label: "Water Sources Revived", value: "35" },
    ],
    stories: [
      {
        quote:
          "Wildlife has returned to our hills. We even spotted leopards last monsoon.",
        author: "Suresh, Village Elder",
      },
    ],
    svgPath:
      "M 90 260 L 140 300 L 200 280 L 260 300 L 320 310 L 300 370 L 220 390 L 130 370 L 80 320 Z",
    color: "#86efac",
  },
];
