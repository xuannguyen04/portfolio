export interface Education {
  year: string;
  institution: string;
  degree: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
}

export const educationData: Education[] = [
  // If you don't want to show education, just make the array empty.
  {
    year: "2024—2025",
    institution: "University of Texas at Dallas",
    degree: "M.S in Business of Analytics and Business Intelligence",
  },
  {
    year: "2019—2022",
    institution: "University of North Texas",
    degree: "B.S. in Logistics and Supply Chain Management",
  },
];
