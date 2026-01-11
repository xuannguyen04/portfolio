export interface Portfolio {
  title: string;
  description: string;
  technologies?: string[];
  imageUrl?: string;
  projectUrl?: string;
  codeUrl?: string;
}

export const portfolioData: Portfolio[] = [
  // Example entry
  {
    title: "What Drives Happiness? ",
    description:
      "Applied logistic regression and decision tree models in R to analyze the World Happiness dataset, identifying key determinants of global happiness including healthy life expectancy and social support",
    technologies: ["R", "Decision Tree", "Logistics Regression"],
    projectUrl: "https://cometmail-my.sharepoint.com/:p:/g/personal/chk210000_utdallas_edu/IQD5tpK1bT9jQbt31yhTqh_hAexgt5z92Mw_-5aM9skg1Os?e=0D5MEy",
    imageUrl:
      "https://img.freepik.com/free-photo/world-smile-day-emojis-arrangement_23-2149024492.jpg?semt=ais_hybrid&w=740&q=80",
    codeUrl: "https://github.com/xuannguyen04/what-drives-happiness/blob/main/Happiness_RNotebook(v2).Rmd",
  },
];
