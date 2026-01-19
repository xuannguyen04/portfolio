export interface Portfolio {
  title: string;
  description: string;
  technologies?: string[];
  imageUrl?: string;
  projectUrl?: string;
  codeUrl?: string;
  vizUrl?: string;
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
    title: "Sentiment Analysis & Topic Modeling on IMDb Reviews",
    description:
      "Analyzed how three NLP preprocessing pipelines impact sentiment classification and topic modeling on movie reviews, comparing Logistic Regression with LDA vs. NMF. Found that a Unigrams + Bigrams pipeline combined with NMF delivered the best overall performance, achieving the highest F1-score and topic coherence while maintaining efficient runtime.",
    technologies: ["Python", "NLP", "LDA", "NMF","pyLDAvis"],
    projectUrl: "https://cometmail-my.sharepoint.com/:b:/g/personal/xdn240000_utdallas_edu/IQAyCvl4VG4iSaNEtb0tkD5rAdOq75eF6Mg8psaN93aw1eM?e=Aq9V2b",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqIQziDJsoXUonXNK6Rcw5CHJ8UlkcDzCpEQ&s",
    codeUrl: "https://github.com/xuannguyen04/IMDB-review-topic-modeling-and-sentiment-analysis",
  }, 
    {
    title: "Diabetes Prediction",
    description:
      "Performed EDA and feature engineering to build and evaluate multiple classification models for diabetes prediction. Achieved strong results with Logistic Regression, reaching an AUC of 0.823 and 75.2% accuracy.",
    technologies: ["Python", "Logistics Regression", "SVC", "Random Forest"],
    imageUrl:
      "https://scitechdaily.com/images/Diabetes-Paper.jpg",
    codeUrl: "https://github.com/xuannguyen04/diabetes-prediction-/blob/main/DiabetesML.ipynb",
  }, 
     {
    title: "North Texas Logistics Case Competition",
    description:
      "Redesigned NT Logistics’ medical supply distribution network using targeted cross-docking and direct LTL shipments. The new network reduced annual distribution costs by nearly $400K, delivering a 17.4% cost savings.",
    technologies: ["Excel", "Power Query","Power BI"],
    projectUrl: "https://www.canva.com/design/DAFSo_V_ayo/U8BsnC-9oNcigqOs4xPI_w/edit?utm_content=DAFSo_V_ayo&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    imageUrl:
      "https://www.shipbob.com/wp-content/uploads/2021/10/cross-docking.jpg",
    vizUrl: "https://app.powerbi.com/view?r=eyJrIjoiOWM5NGRmZGQtMTMzZC00OTI4LTgxYjUtNDA3MjU5OGJjNGQ0IiwidCI6IjcwZGUxOTkyLTA3YzYtNDgwZi1hMzE4LWExYWZjYmEwMzk4MyIsImMiOjN9",
  }, 
     {
    title: "E-commerce Order Tracking Dashboard",
    description:
      "Developed a comprehensive tracking system using Power Query on Excel and Power BI to monitor end-to-end lead time delivery for all orders",
    technologies: ["Excel", "Power Query","Power BI"],
    imageUrl:
      "https://cdn-icons-png.flaticon.com/512/3456/3456419.png",
    vizUrl: "https://app.powerbi.com/view?r=eyJrIjoiY2FhYTNhMTgtZGNkZS00Mzc2LWJiN2QtNTM1ZDJiMGYzNmE2IiwidCI6IjcwZGUxOTkyLTA3YzYtNDgwZi1hMzE4LWExYWZjYmEwMzk4MyIsImMiOjN9",
  }
];
