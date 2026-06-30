export const profile = {
  name: "Vaibhavi Bachu",
  firstName: "Vaibhavi",
  title: "AI/ML Engineer",
  tagline: "Turning complex data into intelligent automation and actionable insights.",
  bio: `I'm Vaibhavi, an AI/ML Engineer who enjoys turning ideas into products. Whether it's automating job applications, monitoring machine vibrations, analyzing market trends, or simplifying messy data, I love building solutions that make technology more useful, efficient, and impactful.`,
  location: "Hyderabad, India",
  email: "vaibhavibachu@gmail.com",
  github: "https://github.com/vaibhaviBachu",
  linkedin: "https://www.linkedin.com/in/bachu-vaibhavi-gupta",
  photo: "/profile.jpg",
};

export const education = {
  degree: "B.Tech in Computer Science",
  specialization: "Specialization in Data Science",
  institution: "CMR Institute of Technology, Hyderabad",
};

export const experience = [
  {
    role: "AI/ML Engineer",
    company: "Sensovibe Reliability Pvt. Ltd.",
    duration: "Feb 2026 – Present",
    points: [
      "Working on predictive maintenance solutions powered by vibration data and machine learning models.",
      "Currently building an AI-powered monitoring and recommendation dashboard for industrial reliability applications.",
      "Developing predictive systems that predict machinery failure even before it occurs, significantly reducing unplanned downtime.",
      "Implementing AI-powered monitoring and recommendation solutions for real-time industrial reliability insights.",
    ],
  },
  {
    role: "ML Intern",
    company: "Edugene Technologies",
    duration: "2 months",
    points: [
      "Gained hands-on experience with data preprocessing, model building, and evaluation on real-world datasets.",
      "Collaborated on machine learning projects, building a strong foundation in the end-to-end ML workflow.",
    ],
  },
];

export const skills = [
  {
    category: "Programming Languages",
    items: ["Python (NumPy, Pandas, Scikit-learn)", "SQL", "Linux/Bash"],
  },
  {
    category: "Machine Learning & Data Science",
    items: [
      "Supervised Learning (Classification, Regression)",
      "Unsupervised Learning (Clustering, Dimensionality Reduction)",
      "Feature Engineering",
      "Exploratory Data Analysis (EDA)",
      "Data Preprocessing & Cleaning",
      "Statistical Analysis",
    ],
  },
  {
    category: "Deep Learning & Neural Networks",
    items: [
      "TensorFlow",
      "PyTorch",
      "Keras",
      "CNN",
      "RNN",
      "Transfer Learning",
      "Image Classification",
      "NLP Fundamentals",
    ],
  },
  {
    category: "Generative AI & LLMs",
    items: [
      "Large Language Model fundamentals",
      "Prompt Engineering",
      "Generative AI applications",
      "Exposure to Claude & ChatGPT",
    ],
  },
  {
    category: "Data Visualization & Tools",
    items: ["Matplotlib", "Seaborn", "Plotly", "Jupyter Notebook", "VS Code", "Google Colab"],
  },
  {
    category: "Modern Tools & Frameworks",
    items: ["Git/GitHub", "Docker", "MLOps concepts", "CI/CD pipelines", "SQL"],
  },
];

export const projects = [
  {
    title: "AI Trading Platform",
    description:
      "An algorithmic trading platform that uses machine learning models to analyze market data, identify patterns, and generate trading signals to support data-driven trading decisions.",
    tech: ["Python", "TypeScript", "Machine Learning", "Pandas", "Docker", "APIs"],
    github: "https://github.com/vaibhaviBachu/Trading_Platform.git",
    inProgress: true,
  },
  {
    title: "AI-Powered Data Cleaning Platform",
    description:
      "An intelligent data cleaning tool that automates preprocessing — handling missing values, outliers, and duplicates — using ML-driven heuristics to prepare raw datasets for analysis.",
    tech: ["Python", "FastAPI", "Streamlit", "PostgreSQL", "Docker", "MinIO", "Ollama", "Prometheus", "Grafana", "N8N", "Pandas"],
    github: "https://github.com/vaibhaviBachu/Automatic_dataCleaning.git",
  },
  {
    title: "Automated Job Application Bot",
    description:
      "A CI/CD-powered automation pipeline using GitHub Actions that scans job postings and automatically applies on a schedule, reducing manual effort in the job search process.",
    tech: ["Python", "GitHub Actions", "Automation", "CI/CD"],
    github: "https://github.com/vaibhaviBachu/Automatic_JobParser.git",
  },
  {
    title: "Predictive Maintenance — AI-Powered Vibration Monitoring",
    description:
      "An end-to-end predictive maintenance system that analyzes vibration sensor data to detect early signs of machinery failure using deep learning models, helping prevent unplanned downtime.",
    tech: ["Python", "PostgreSQL", "FastAPI", "SQLAlchemy", "React", "Docker", "Swagger", "ORM"],
    github: "https://github.com/vaibhaviBachu",
  },
  {
    title: "AI Chatbot",
    description:
      "A conversational AI chatbot that understands natural language queries and generates intelligent, context-aware responses for interactive, real-time conversations.",
    tech: ["Python", "NLP", "LLMs", "Generative AI"],
    github: "https://github.com/vaibhaviBachu/chatbot.git",
  },
  {
    title: "AI-Powered Monitoring & Recommendation Dashboard",
    description:
      "Currently building a real-time dashboard that combines predictive maintenance insights with recommendation features for industrial reliability use cases.",
    tech: ["Python", "Machine Learning", "Dashboards"],
    github: null,
    inProgress: true,
  },
];
