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
      "A framework for discovering causal relationships in high-dimensional time series data using state-of-the-art machine learning techniques.",
    technologies: ["R", "Decision Tree", "Logistics Regression"],
    projectUrl: "https://cometmail-my.sharepoint.com/:p:/g/personal/chk210000_utdallas_edu/IQD5tpK1bT9jQbt31yhTqh_hAexgt5z92Mw_-5aM9skg1Os?e=0D5MEy",
    imageUrl:
      "https://imgur.com/a/POfYArp",
    codeUrl: "https://github.com/xuannguyen04/what-drives-happiness/blob/main/Happiness_RNotebook(v2).Rmd",
  },
];
