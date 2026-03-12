export const personalInfo = {
  name: "Utsav Italia",
  title: "AI/ML Engineer & Data Analyst",
  subtitle: "Building intelligent systems that bridge research and production",
  email: "ujitalia@gmail.com",
  github: "https://github.com/utsavitalia",
  linkedin: "https://linkedin.com/in/utsav-italia",
  twitter: "https://x.com/UtsavItalia",
  location: "New York, NY",
  availableForWork: true,
  bio: "I'm a Data Analyst with 3 years of experience transitioning into ML/AI Engineering. My foundation in data analysis combined with hands-on web development projects and a growing focus on machine learning gives me a unique perspective on building data-driven applications end-to-end.",
  longBio: `I'm passionate about the intersection of data and artificial intelligence. With 3 years of experience as a Data Analyst, I've developed a strong foundation in understanding data, drawing insights, and solving real-world problems — and now I'm channeling that into building ML/AI systems.

My philosophy: Good ML starts with good data. My analytics background gives me an edge in understanding the full pipeline — from raw data to a model that actually works in the real world.

When I'm not learning new ML frameworks or working on projects, you'll find me exploring AI research, building side projects, and sharpening my skills to bridge the gap between analysis and engineering.`,
};

export const skills = {
  "Data & Analytics": [
    { name: "Python / Pandas / NumPy", level: 85 },
    { name: "Tableau", level: 80 },
    { name: "SQL (advanced)", level: 82 },
    { name: "Statistics & Probability", level: 78 },
    { name: "Data Modeling", level: 75 },
    { name: "Jupyter / Colab", level: 80 },
  ],
  "Machine Learning & AI": [
    { name: "Scikit-learn", level: 65 },
    { name: "PyTorch", level: 40 },        // 🎯 learn next
    { name: "TensorFlow / Keras", level: 35 }, // 🎯 learn next
    { name: "HuggingFace Transformers", level: 30 }, // 🎯 after PyTorch
    { name: "LangChain", level: 25 },      // 🎯 for LLM apps
    { name: "MLflow", level: 20 },         // 🎯 for experiment tracking
  ],
  "Full-Stack": [
    { name: "React / Next.js", level: 88 },
    { name: "Node.js / Express", level: 80 },
    { name: "TypeScript", level: 82 },
    { name: "MongoDB", level: 78 },
    { name: "REST API Design", level: 82 },
    { name: "Socket.io", level: 70 },
  ],
  "Infrastructure & Tools": [
    { name: "AWS (Lambda, S3)", level: 70 },
    { name: "Docker", level: 60 },
    { name: "Git / GitHub", level: 85 },
    { name: "FastAPI / Flask", level: 40 }, // 🎯 essential for ML APIs
    { name: "PostgreSQL / Redis", level: 65 },
  ],
};

export type ProjectCategory =
  | "Data Analytics"
  | "Machine Learning"
  | "AI Web Application"
  | "Full Stack"
  | "NLP"
  | "MLOps";

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: ProjectCategory;
  techStack: string[];
  github: string;
  demo: string;
  image: string;
  results: string[];
  featured: boolean;
  year: number;
}

export const projects: Project[] = [
  // Data Analytics
  {
    id: "da-1",
    title: "Customer Churn Prediction Platform",
    description:
      "End-to-end churn prediction system built on real sales data, combining data analysis with ML to identify at-risk customers.",
    longDescription:
      "Leveraged my data analyst experience to build a churn prediction pipeline using Python and Scikit-learn. Includes data preprocessing, feature engineering, model training, and a React dashboard visualizing churn probability and key drivers.",
    category: "Data Analytics",
    techStack: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "XGBoost",
      "React",
      "Chart.js",
      "FastAPI",
      "PostgreSQL",
    ],
    github: "https://github.com/utsavitalia/churn-prediction",
    demo: "",
    image: "/images/churn.jpg",
    results: [
      "85% prediction accuracy on holdout set",
      "Identified top 5 churn indicators from behavioral data",
      "Interactive dashboard for business stakeholders",
      "Built on patterns from real-world DA experience",
    ],
    featured: true,
    year: 2025,
  },
  {
    id: "da-2",
    title: "Smart Data Dashboard",
    description:
      "Upload any CSV and get automatic insights — summary stats, correlation analysis, and AI-generated observations.",
    longDescription:
      "A full-stack analytics tool where users upload datasets and receive automated EDA. Built with Python and Pandas on the backend, React + Chart.js on the frontend, and OpenAI API for natural language insight generation.",
    category: "Data Analytics",
    techStack: [
      "Python",
      "Pandas",
      "NumPy",
      "React",
      "Chart.js",
      "Node.js",
      "OpenAI API",
      "FastAPI",
    ],
    github: "https://github.com/utsavitalia/smart-dashboard",
    demo: "",
    image: "/images/smart-dashboard.jpg",
    results: [
      "Auto-generates correlation matrix and distribution plots",
      "AI-written summary of key dataset insights",
      "Supports datasets up to 100k rows",
      "Combines DA background with full-stack skills",
    ],
    featured: true,
    year: 2025,
  },

  // Machine Learning
  {
    id: "ml-1",
    title: "ML Stock Price Predictor",
    description:
      "Time series forecasting app predicting stock trends using Scikit-learn models with a live visualization dashboard.",
    longDescription:
      "Built a stock price prediction pipeline using historical OHLCV data, feature engineering, and regression models. Deployed via FastAPI with a React frontend showing predictions vs actuals and model performance metrics.",
    category: "Machine Learning",
    techStack: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "FastAPI",
      "React",
      "Chart.js",
      "yFinance",
    ],
    github: "https://github.com/utsavitalia/stock-predictor",
    demo: "",
    image: "/images/stock-predictor.jpg",
    results: [
      "Compared Linear Regression, Random Forest, and SVR models",
      "Interactive chart showing predicted vs actual prices",
      "Model performance metrics dashboard",
      "First end-to-end ML deployment with FastAPI",
    ],
    featured: false,
    year: 2025,
  },

  // NLP
  {
    id: "nlp-1",
    title: "Fake News Detection App",
    description:
      "NLP classifier that detects whether a news article is real or fake, with confidence scores and explanation.",
    longDescription:
      "Text classification pipeline using TF-IDF and Logistic Regression as baseline, with plans to upgrade to BERT. Built a clean React UI where users paste article text and get a prediction with probability breakdown.",
    category: "NLP",
    techStack: [
      "Python",
      "Scikit-learn",
      "NLTK",
      "Pandas",
      "FastAPI",
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],
    github: "https://github.com/utsavitalia/fake-news-detector",
    demo: "",
    image: "/images/fake-news.jpg",
    results: [
      "91% accuracy on LIAR dataset",
      "Confidence score with visual probability bar",
      "Clean UI with real-time classification",
      "Baseline model — BERT upgrade in progress",
    ],
    featured: true,
    year: 2025,
  },

  // AI Web Applications
  {
    id: "ai-web-1",
    title: "AI Resume Analyzer",
    description:
      "Upload your resume and a job description — get ATS score, skill gap analysis, and improvement suggestions.",
    longDescription:
      "Built with OpenAI API for NLP-powered resume evaluation. Users upload a resume PDF and paste a job description. The system returns match score, missing keywords, and actionable recommendations. React frontend with Node.js backend.",
    category: "AI Web Application",
    techStack: [
      "React",
      "TypeScript",
      "Node.js",
      "OpenAI API",
      "Python",
      "FastAPI",
      "Tailwind CSS",
      "MongoDB",
    ],
    github: "https://github.com/utsavitalia/resume-analyzer",
    demo: "",
    image: "/images/resume-analyzer.jpg",
    results: [
      "ATS match score with keyword breakdown",
      "Skill gap detection against job description",
      "Actionable bullet-point improvement suggestions",
      "Built using OpenAI API + my own job search experience",
    ],
    featured: true,
    year: 2025,
  },
  {
    id: "ai-web-2",
    title: "AI Meeting Notes Generator",
    description:
      "Upload a meeting recording and get a structured summary, key decisions, and action items automatically.",
    longDescription:
      "Uses Whisper API for speech-to-text transcription and OpenAI API for summarization. Built a React frontend where users upload audio files and receive formatted meeting notes with sections for summary, decisions, and next steps.",
    category: "AI Web Application",
    techStack: [
      "React",
      "TypeScript",
      "Node.js",
      "Whisper API",
      "OpenAI API",
      "Tailwind CSS",
      "Express",
      "MongoDB",
    ],
    github: "https://github.com/utsavitalia/meeting-notes-ai",
    demo: "",
    image: "/images/meeting-notes.jpg",
    results: [
      "Auto-transcribes and summarizes in under 60 seconds",
      "Extracts action items with owner and deadline",
      "Structured markdown export",
      "Combines web dev strength with AI APIs",
    ],
    featured: false,
    year: 2025,
  },
  {
    id: "ai-web-3",
    title: "AI Knowledge Base (RAG System)",
    description:
      "Upload documents and chat with them — semantic search and conversational Q&A powered by LangChain and vector embeddings.",
    longDescription:
      "Built a full RAG pipeline where users upload PDFs or text files, which get chunked, embedded, and stored in a vector database. A conversational interface lets users ask questions and get answers grounded in the uploaded content with source citations.",
    category: "AI Web Application",
    techStack: [
      "React",
      "TypeScript",
      "Node.js",
      "LangChain",
      "OpenAI API",
      "Pinecone",
      "FastAPI",
      "Tailwind CSS",
    ],
    github: "https://github.com/utsavitalia/ai-knowledge-base",
    demo: "",
    image: "/images/rag-system.jpg",
    results: [
      "Semantic search across uploaded documents",
      "Conversational Q&A with source citations",
      "Supports PDF and text file ingestion",
      "Built on full RAG architecture end-to-end",
    ],
    featured: true,
    year: 2025,
  },
  {
    id: "mlops-1",
    title: "ML Model Deployment Platform",
    description:
      "Upload any trained ML model, get an instant REST API endpoint, and monitor predictions in a live dashboard.",
    longDescription:
      "Built a platform where data scientists can upload serialized ML models (pickle, joblib) and instantly get a FastAPI-powered REST endpoint. Includes a React dashboard for tracking prediction volume, latency, and drift detection.",
    category: "MLOps",
    techStack: [
      "Python",
      "FastAPI",
      "Docker",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Scikit-learn",
      "Tailwind CSS",
    ],
    github: "https://github.com/utsavitalia/ml-deployment-platform",
    demo: "",
    image: "/images/mlops-platform.jpg",
    results: [
      "Supports any Scikit-learn compatible model",
      "Auto-generated API docs via FastAPI",
      "Live prediction monitoring dashboard",
      "Containerized with Docker for easy deployment",
    ],
    featured: false,
    year: 2025,
  },
  {
    id: "fs-2",
    title: "Trip Planner",
    description:
      "Full-stack travel planning web app with real-time chat, third-party API integrations, and optimized caching.",
    longDescription:
      "Developed in a team of 5 at Stevens Institute of Technology. Integrated reservation, weather, and tourism APIs for a seamless travel planning experience. Used Redis for caching, Socket.io for real-time chat, and deployed on AWS with Docker.",
    category: "Full Stack",
    techStack: [
      "React",
      "Firebase",
      "Redis",
      "Socket.io",
      "Redux",
      "Docker",
      "AWS",
      "Node.js",
    ],
    github: "https://github.com/UtsavItalia/SIT_MSCS/tree/110ec6a56eadb772ffd29025fa55d7ec035fd5e7/CS554/CS554_project",
    demo: "https://www.youtube.com/watch?v=53acw4Xv9wA",
    image: "/images/trip-planner.jpg",
    results: [
      "30% performance improvement through Redis caching",
      "75% better user experience via third-party API integrations",
      "Real-time chat with Redux and Socket.io",
      "40% faster deployment with Docker on AWS",
    ],
    featured: false,
    year: 2022,
  },
  {
    id: "fs-3",
    title: "Bug Tracker",
    description:
      "Interactive bug tracking system with dynamic dashboards, JWT auth, and XSS protection.",
    longDescription:
      "Built at Stevens Institute of Technology using TypeScript and Angular for the frontend, Express and MongoDB for the backend. Features dynamic Chart.js dashboards for visualizing bug data and team productivity metrics.",
    category: "Full Stack",
    techStack: [
      "TypeScript",
      "Angular",
      "Express",
      "MongoDB",
      "JWT",
      "Chart.js",
      "Node.js",
      "REST APIs",
    ],
    github: "https://github.com/UtsavItalia/SIT_MSCS/tree/110ec6a56eadb772ffd29025fa55d7ec035fd5e7/CS546/FinalProject",
    demo: "https://www.youtube.com/watch?v=TGJOxmeyZ0M",
    image: "/images/bug-tracker.jpg",
    results: [
      "15% faster issue resolution with streamlined tracking",
      "Dynamic dashboards for bug visualization and team productivity",
      "XSS protection increasing app security by 15%",
      "JWT-based authentication and role management",
    ],
    featured: false,
    year: 2021,
  },

  // Machine Learning (continued)
  {
    id: "ml-2",
    title: "Credit Card Fraud Detection",
    description:
      "ML classification system detecting fraudulent transactions using ensemble models with 85% prediction accuracy.",
    longDescription:
      "Led a 3-member team at Stevens Institute of Technology to build a fraud detection classifier. Compared Decision Trees, KNN, Naive Bayes, and SVM models. Includes thorough data preprocessing, normalization, and a correlation matrix for pattern detection.",
    category: "Machine Learning",
    techStack: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Jupyter",
    ],
    github: "https://github.com/utsavitalia/fraud-detection",
    demo: "",
    image: "/images/fraud-detection.jpg",
    results: [
      "85% prediction accuracy across 4 classification models",
      "20% boost in model reliability via data preprocessing",
      "Correlation matrix reducing false fraud alerts by 25%",
      "Compared Decision Trees, KNN, Naive Bayes, and SVM",
    ],
    featured: false,
    year: 2021,
  },
];

export const certifications = [
  {
    id: "cert-1",
    name: "CS50's Introduction to Artificial Intelligence with Python",
    issuer: "Harvard University",
    date: "2026",
    credentialId: "",
    link: "https://cs50.harvard.edu/ai/",
    icon: "harvard",
    color: "#A51C30",
  },
  {
    id: "cert-2",
    name: "AlgoExpert Certificate",
    issuer: "AlgoExpert",
    date: "2026",
    credentialId: "",
    link: "https://www.algoexpert.io",
    icon: "algoexpert",
    color: "#00B8A9",
  },
];

export const stats = [
  { label: "Years in Data Analytics", value: "3+" },
  { label: "Projects Built", value: "9+" },
  { label: "Technologies Used", value: "25+" },
  { label: "Certifications", value: "3" },
];
