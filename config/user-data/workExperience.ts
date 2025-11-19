export interface IWorkExperience {
  company: string;
  companyUrl?: string;
  projectUrl?: string;
  position: string;
  period: string;
  responsibilities: string[];
  shortDescription?: string;
}

export const UserWorkExperienceData: IWorkExperience[] = [

{
  company: "SmartTechBridge",
  companyUrl: "https://smarttechbridge.example.com",
  position: "Lead Mobile Engineer",
  period: "2023 - Present",
  shortDescription: "Building mobile products tailored for Nigerian students and everyday users.",
  responsibilities: [
    "Architected and shipped 'SkulBell', a lecture reminder app used by FUTA students to manage weekly schedules and get real-time notifications.",
    "Built scalable React Native modules supporting offline data storage through AsyncStorage and SQLite.",
    "Integrated push notifications, animations, and modern UI flows that match premium app standards.",
    "Designed reusable frontend components that reduced future development time by 35%.",
    "Collaborated with early testers on campus to validate features and improve usability.",
    "Managed project planning, feature roadmaps, and version releases as founding engineer."
  ]
},

  {
    company: "InnovateLabs",
    companyUrl: "https://innovatelabs.example.com",
    position: "Full Stack Developer",
    period: "Mar 2022 - Dec 2023",
    shortDescription: "Built and maintained multiple client-facing applications",
    responsibilities: [
      "Developed responsive web applications using React and Node.js",
      "Implemented real-time features using WebSocket technology",
      "Optimized database queries resulting in 50% faster load times",
      "Integrated third-party APIs for payment processing and analytics",
      "Created comprehensive API documentation using Swagger",
      "Participated in daily stand-ups and sprint planning meetings"
    ]
  },
  {
    company: "StartupX",
    projectUrl: "https://startupx.example.com",
    position: "Backend Developer",
    period: "Jun 2024 - Feb 2025",
    shortDescription: "Core developer for an AI-powered analytics platform",
    responsibilities: [
      "Built RESTful APIs using Express.js and MongoDB",
      "Implemented user authentication using JWT and OAuth2",
      "Developed automated testing suites with Jest",
      "Created data processing pipelines for machine learning models",
      "Optimized application performance and scalability",
      "Collaborated with data scientists to implement ML features"
    ]
  },
  {
    company: "CodeCraft Solutions",
    position: "Junior Developer",
    period: "Jan 2024 - May 2024",
    shortDescription: "Contributed to various client projects as part of an agile team",
    responsibilities: [
      "Developed and maintained features for e-commerce platforms",
      "Fixed bugs and improved existing codebase",
      "Participated in code reviews and documentation",
      "Assisted in deployment and monitoring of applications",
      "Learned and implemented best practices in software development"
    ]
  }
];
