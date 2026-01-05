export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
}

export const experienceData: Experience[] = [
  {
    date: "Feb 2023 - Dec 2023",
    title: "Inbound Logistics Specialist",
    company: "Samsung Electronics",
    description:
      "Enhanced inventory efficiency by minimizing excess stock and improving fulfillment rates for backordered orders.",
    companyUrl: "https://www.samsung.com/us/",
  },
  {
    date: "Summer 2022",
    title: "Logistics Executive Intern",
    company: "L'Oreal",
    description:
      "Created an end-to-end delivery tracking and SLA performance analysis solution using Excel Power Query and Power BI, identifying reconciliation gaps across logistics systems to improve order accuracy and reduce fulfillment delays.",
    companyUrl: "https://www.loreal.com/en/",
  },
];
