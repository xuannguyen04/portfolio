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
  title: "Ph.D. Candidate",
  institution: "University of Texas at Dallas",
  // Note that links work in the description
  description:
    "I am a graduate student at the University of Texas at Dallas pursuing a Master’s degree in Business Analytics and Artificial Intelligence, with a strong foundation in Logistics and Supply Chain Management. I am actively seeking a full-time position where I can apply advanced data analytics, machine learning, and operational expertise to drive data-informed business decisions.",
  email: "______@stanford.edu",
  imageUrl:
    "https://images.unsplash.com/photo-1581481615985-ba4775734a9b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  githubUsername: "xuannguyen04",
  linkedinUsername: "xuannguyen411",
  blogUrl: "https://",
  cvUrl: "https://",
  institutionUrl: "https://www.stanford.edu",
  // altName: "",
  // secretDescription: "I like dogs.",
};
