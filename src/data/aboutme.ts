export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Xuan Nguyen",
  institution: "University of Texas at Dallas",
  // Note that links work in the description
  description:
    "I am a graduate student at the University of Texas at Dallas pursuing a Master’s degree in Business Analytics and Artificial Intelligence, with a strong foundation in Logistics and Supply Chain Management. I am actively seeking a full-time position where I can apply advanced data analytics, machine learning, and operational expertise to drive data-informed business decisions.",
  email: "khanhxuannguyen04@gmail.com",
  imageUrl:
    "https://snipboard.io/GO0Upm.jpg",
  githubUsername: "xuannguyen04",
  linkedinUsername: "xuannguyen411",
  blogUrl: "https://",
  cvUrl: "https://",
  institutionUrl: "https://www.utdallas.edu/",
  // altName: "",
  // secretDescription: "I like dogs.",
};
