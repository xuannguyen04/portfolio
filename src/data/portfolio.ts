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
  {
    title: "Warehouse and Supplier Order Management System",
    description:
      "Designed and implemented a normalized SQL database to manage warehouse inventory and supplier orders by tracking products, warehouses, and stock levels, resulting in accurate inventory monitoring and improved order management.",
    technologies: ["SQL", "ERD"],
    projectUrl: "https://cometmail-my.sharepoint.com/:p:/g/personal/xdn240000_utdallas_edu/IQAUarMSgdcRTqXCEu7qntnDAfuhIeolM7VPdJQLikJt4rY?e=8qAJVh",
    imageUrl:
      "https://media.istockphoto.com/id/1138429558/photo/rows-of-shelves.jpg?s=612x612&w=0&k=20&c=0E4uvaa-THb-Wj-QZKpUSPgwjfIMFW3vH7NRx1iWMIc=",
    codeUrl: "https://github.com/xuannguyen04/supplier-order-database-management-",
  },
  {
    title: "NBA Prediction",
    description:
      "Analyzed 16 years of historical NBA data, finding out shooting accuracy and rebounding percentage as critical performance indicators, which correlated with a 15% increase in home team wins when optimized, resulting in higher fan engagement and increased merchandise sales",
    technologies: ["Python", "Decision Tree", "Logistics Regression", "Linear SVM"],
    projectUrl: "https://drive.google.com/file/d/1LM8meHxFdcSC-ROWCf_S8zGqpAhPFXug/view?usp=sharing",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL9aJ8TpeTtOTScedTXqJEdGE-Of-Xyic7hw&s",
    codeUrl: "https://github.com/xuannguyen04/nba-prediction/blob/main/NBA_Prediction_Group2_BUAN6341.ipynb",
  },
  {
    title: "What Drives Happiness? ",
    description:
      "Applied logistic regression and decision tree models in R to analyze the World Happiness dataset, identifying key determinants of global happiness including healthy life expectancy and social support",
    technologies: ["R", "Decision Tree", "Logistics Regression"],
    projectUrl: "https://cometmail-my.sharepoint.com/:p:/g/personal/chk210000_utdallas_edu/IQD5tpK1bT9jQbt31yhTqh_hAexgt5z92Mw_-5aM9skg1Os?e=0D5MEy",
    imageUrl:
      "https://img.freepik.com/free-photo/world-smile-day-emojis-arrangement_23-2149024492.jpg?semt=ais_hybrid&w=740&q=80",
    codeUrl: "https://github.com/xuannguyen04/what-drives-happiness/blob/main/Happiness_RNotebook(v2).Rmd",
  }
];
