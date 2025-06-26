/* Change this file to get your personal Portfolio */

import emoji from "react-easy-emoji";

// Your Summary And Greeting Section

const greeting = {
  username: "Al-Amin Tokee",
  title: "Hi, I'm Al-Amin",
  subTitle: emoji(
    "Software Engineer 👨‍💻 | Researcher 🤖 | Mentor ✍️ "
  ),
  resumeLink:
    "https://drive.google.com/file/d/1J6axh9fS4WtV4YkWmkoKO-8EXIAL_2Bx/view",
  about : "I am a highly motivated and detail-oriented professional with a solid background in software engineering and a deep interest in the fields of artificial intelligence (AI), machine learning (ML), deep learning, computer vision, and natural language processing (NLP). With two years of industry experience as a software engineer, I have developed and deployed scalable software solutions, gained practical knowledge of system design and development workflows, and become proficient in working with both structured and unstructured data. Throughout my professional and academic journey, I have been driven by a curiosity to understand how machines learn, interpret, and interact with the world—particularly in healthcare, where AI technologies have the potential to revolutionize diagnostics, patient care, and clinical workflows. My work has increasingly focused on leveraging deep learning models such as convolutional neural networks (CNNs) and transformers for medical image analysis, disease prediction, and automated reporting. In the area of NLP, I am particularly interested in applying language models to electronic health records (EHR), symptom extraction, and conversational agents for healthcare support. I completed my undergraduate studies at Daffodil International University (DIU) with high academic distinction, where I built a strong foundation in programming, algorithms, and data structures, and also initiated my exploration into AI and its applications in healthcare. During my studies, I engaged in personal and collaborative projects that applied computer vision techniques to medical datasets and used NLP tools to process health-related texts. I am now seeking opportunities—both academic and applied—where I can contribute to impactful AI research, work on real-world healthcare challenges, and collaborate in multidisciplinary environments. My goal is to continue building intelligent systems that make a meaningful difference in human well-being, while expanding my knowledge of cutting-edge developments in AI and machine learning."

};

// Your Social Media Link

const socialMediaLinks = {
  phone: "+8801677942758",
  github: "https://github.com/Alamin-Tokee",
  linkedin: "https://www.linkedin.com/in/al-amin-tokee",
  gmail: "alamin11-593@diu.edu.bd",
  facebook: "https://www.facebook.com/alaminhosen.tokee",
  twitter: "https://x.com/tokee_al",
  youtube: "https://youtube.com/@apostrophe4u",
  google_scholar: "https://scholar.google.com/citations?user=XfAQNCgAAAAJ&hl=en&authuser=2"
};

// Your Skills Section

const skillsSection = {
  title: "Specialization & Interest",
  subTitle: "Handling all backend activities and exploring data science",
  // skills: [
  //   emoji(
  //     "⚡ Designing and developing website using ReactJS,NodeJS and ExpressJS"
  //   ),
  //   emoji("⚡ End to End frontend and backend executions"),
  //   emoji(
  //     "⚡ Working on development technology like VSCode, Git, Linux, Postman, Docker, Sublime Text, Figma, Jupiter Notebook, etc"
  //   ),
  //   emoji(
  //     "⚡ Building predictive models to extract insights and make decisions out of data"
  //   ),
  // ],

  skills: [
    emoji(
      "⚡ Machine Learning, Deep Learning, Federated Learning"
    ),
    emoji("⚡ Computer Vision, Natural Language Processing (NLP)"),
    emoji(
      "⚡ Internet of Things (IoT), Human Artificial Intelligence Interaction"
    ),
    emoji(
      "⚡ AI in Healthcare, AI in Cyber Security, AI in Software Engineering"
    ),
  ],

  softwareSkills: [
    {
      skillName: "C/C++",
      classname: "file-icons:c",
      style: {
        backgroundColor: "transparent",
        color: "navy",
      },
    },
    {
      skillName: "JavasSript",
      classname: "logos:javascript",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "Python",
      classname: "logos:python",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "Java",
      classname: "logos:java",
      style: {
        backgroundColor: "transparent",
      },
    },

    {
      skillName: "PHP",
      classname: "vscode-icons:file-type-php2",
      style: {
        backgroundColor: "transparent",
      },
    },

    {
      skillName: "Django",
      classname: "vscode-icons:file-type-django",
      style: {
        backgroundColor: "transparent",
      },
    },

    {
      skillName: "ReactJS",
      classname: "simple-icons:react",
      style: {
        color: "#61DAFB",
      },
    },
    {
      skillName: "NodeJS",
      classname: "vscode-icons:file-type-node",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "Git",
      classname: "logos:git-icon",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "Docker",
      classname: "logos:docker-icon",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "AWS",
      classname: "logos:aws",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "MySql",
      classname: "logos:mysql",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "PostgreSql",
      classname: "logos:postgresql",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "MongoDB",
      classname: "logos:mongodb-icon",
      style: {
        backgroundColor: "transparent",
      },
    },

    {
      skillName: "PyTorch",
      classname: "logos:pytorch-icon",
      style: {
        backgroundColor: "transparent",
      },
    },

    {
      skillName: "Flask",
      classname: "simple-icons:flask",
      style: {
        backgroundColor: "transparent",
      },
    },
  ],
};

// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Deputy Assistant Director(SDE-III)",
      company: "Walton Hi-Tech Industries PLC",
      companylogo: require("./assets/images/walton.jpg"),
      date: "Jan 2025 – Running",
      desc: "Developed machine automation IOT project and built scalable web dashboard and APIs, integrating real-time data streaming for efficient system performance.",
      tech: "PLC, SBC, MQTT, Python, Scikit-learn, PyTorch, Django, Kafka",
      url : "waltonbd.com",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      // ],
      color: "blue",
    },
    {
      role: "Senior Principal Officer(SDE-II)",
      company: "Walton Hi-Tech Industries PLC",
      companylogo: require("./assets/images/walton.jpg"),
      date: "Jan 2021 – Dec 2024",
      desc: "Managed manufacturing IOT project, containerized applications for reliable deployment, and built high-performance concurrent systems.",
      tech: "PLC, SBC, Python, GO, PostgreSQL, Docker",
      url : "waltonbd.com",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      // ],
      color: "blue",
    },
    {
      role: "Principal Officer(SDE-I)",
      company: "Walton Hi-Tech Industries PLC",
      companylogo: require("./assets/images/walton.jpg"),
      date: "Sep 2023 – Dec 2023",
      desc: "Built scalable backend systems to handle large volume manufacturing data and a caching system for handling unstructured data.",
      tech: "ReactJS, NodeJS, Redis, MongoDB, MySQL",
      url : "waltonbd.com",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      // ],
      color: "blue",
    },
    {
      role: "Software Engineer Apprentice",
      company: "Walton Hi-Tech Industries PLC",
      companylogo: require("./assets/images/walton.jpg"),
      date: "Feb 2023 – Aug 20",
      desc: "Developed full-stack web applications with dynamic front-end interactions and optimized back-end database performance.",
      tech: "PHP, JavaScript, jQuery, AJAX, MySQL, Oracle",
      url : "waltonbd.com",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      // ],
      color: "blue",
    },
    {
      role: "Software Engineer Intern",
      company: "Sheraspace Ltd",
      companylogo: require("./assets/images/sheraspaceLogo.png"),
      date: "Apr 2022 – Jun-2022",
      desc: "Built responsive user interfaces and contributed to backend development, focusing on API integration and performance optimization.",
      tech: "Flask, ReactJS, Python, APIs, PostgreSQL",
      url : "waltonbd.com",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      // ],
      color: "red",
    },
    {
      role: "Programming Trainer",
      company: "Daffodil International University",
      companylogo: require("./assets/images/diuLogo.png"),
      date: "May 2019 – May 2021",
      desc: "C/C++, Algorithm, Data Structure, Competative Programming, Mathmatics",
      tech: "C/C++, Algorithm, Data Structure, Competative Programming, Mathmatics",
      url : "waltonbd.com",
      color: "navy",
    },
    {
      role: "Content Contibutor",
      company: "Geeksforgeeks",
      companylogo: require("./assets/images/gfgLogo.png"),
      date: "Jan 2019 – Sep 2021",
      desc: "Contributed technical articles to GeeksforGeeks on algorithms, data structures, machine learning (ML), deep learning (DL), and software development to support and educate the developer community.",
      tech: "Algorithms, data structures, machine learning (ML), deep learning (DL).",
      url : "waltonbd.com",
      color: "green",
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showProfile: "true", // Set true or false to show Contact profile using Github, defaults to false
  display: true, // Set false to hide this section, defaults to true
  profile: {
    bio: "Software Engineer 👨‍💻 | Researcher 🤖 | Mentor ✍️ ",
    location: "Dhaka, Bangladesh",
    hireable: "Yes",
    avatarUrl: require("./assets/images/Alamin.jpg"),
    name: "Al-Amin Tokee",
  },
};


//Show Education 
const particularEducation = {
  projects: [
    {
      name: "Daffodil International University, Ashulia, Savar, Dhaka",
      desc: "B.Sc in Software Engineering (CGPA:3.89/4) (3.95 last two semesters) ",
      color: "yellow",
      language: "Thesis: Colon Polys Detection from Colonoscopy Images Using YOLO",
      diskUsage: "Year - 2022",
      url: "https://daffodilvarsity.edu.bd/",
    },
    {
      name: "BAF Shaheen School & College, Paharkanchanpur, Sakhipur, Tangail",
      desc: "Higher Secondary School Certificate(HSC)",
      color: "yellow",
      language: "Project: Proposed a Smart and Sustainable Urban Development Framework",
      diskUsage: "Year - 2017",
      url: "https://bafspkp.edu.bd/",
    },
    {
      name: "Mohanandapur Bijoy Smriti High School, Mohanandapur, Sakhipur, Tangail",
      desc: "Secondary School Certificate(SSC)",
      color: "yellow",
      language: "Project: Proposed a Smart and Sustainable Urban Development Framework",
      diskUsage: "Year - 2015",
      url: "https://mbshs.edu.bd/",
    },
  ],
};


// Show your Particular Project

const particularProject = {
  projects: [
    {
      name: "Optimax: Compressor production machine performance matrix(Professional)",
      desc: "2025, Developed a real-time data acquisition system using Python and Siemens PLCs with MQTT protocol. Stored data in MySQL and visualized key compressor metrics via a web dashboard built with ReactJS and NodeJS. Optimized MySQL data models to support time-series analysis for performance monitoring and maintenance forecasting.",
      color: "yellow",
      language: "JavaScript, NodeJS, ReactJS, ExpressJS, MongoDB",
      diskUsage: "June 2024 – March 2025",
      url: "https://github.com/Alamin-Tokee",
    },
    {
      name: "Qcmatrix: Air conditioner oqc and lift qc system for component tracking and quality assurance(Professional)",
      desc: "Running, Developed a QC system for tracking 1,000+ components per lift project. Enabled R&I teams to initiate and QC teams to verify against predefined criteria. Builtb real-time dashboards using PHP, JavaScript, jQuery, and AJAX with PostgreSQL backend for efficient QC record management and stakeholder monitoring.",
      color: "yellow",
      language: "JavaScript, NodeJS, ReactJS, ExpressJS, MongoDB",
      diskUsage: "April 2025 – Running",
      url: "https://github.com/Alamin-Tokee",
    },
    {
      name: "Metalflow: Real-time power press machine production analytics(Professional)",
      desc: "Developed a full-stack monitoring system for real-time analytics of power press machines using Python, Siemens PLCs, and MQTT. Stored production and efficiency data in a MySQL backend. Built a dynamic dashboard with PHP, AJAX, JavaScript, and jQuery to provide actionable insights on equipment performance, downtime, and operator productivity.,",
      color: "yellow",
      language: "JavaScript, EJS, NodeJS, ExpressJS, MongoDB",
      diskUsage: "March 2024 – Oct 2024",
      url: "https://github.com/Alamin-Tokee",
    },
    {
      name: "Weldtrack: Smart monitoring and operator efficiency system for welding machine(Professional)",
      desc: "Designed a data acquisition system using a Single Board Computer (SBC) and Python to monitor ultrasonic welding machines in real-time. Stored performance metrics in MySQL. Built a React Native mobile app for operator time logging and integrated it with machine data to calculate shift-wise performance and efficiency. Developed a responsive dashboard using NodeJS, ReactJS, and Redux to visualize KPIs and machine health.",
      color: "yellow",
      language: "JavaScript, NodeJS, ReactJS, ExpressJS",
      diskUsage: "Oct 2023 – Apr 2024",
      url: "https://github.com/Alamin-Tokee",
    },
    {
      name: "Poramorsho: Ai-powered crop cultivation recommendation engine(Professional)",
      desc: "Developed a machine learning–based recommendation engine for crop selection using soil pH, weather, and precipitation data. Trained Random Forest, Logistic Regression, Decision Tree, and ANN models to improve yield prediction. Built a Django REST API for real-time integration with farmers’ systems and used PostgreSQL and Apache for scalable data and server management.",
      color: "navy",
      language: "Python, Django, PostgreSQl",
      diskUsage: "Jan 2023 – June 2023",
      url: "https://github.com/Alamin-Tokee",
    },
    {
      name: "Stocksage: Smart inventory management system for finished goods(Professional)",
      desc: "Developed a React Native mobile app with QR code scanning to track finished goods from production to storage. Enabled delivery updates and resource release through scanning. Built a React + Node.js dashboard for real-time stock and delivery tracking. Used Oracle for high-volume transactional data and MySQL for time-sensitive stock queries, ensuring performance and reliability with a hybrid DB model.",
      color: "green",
      language: "PHP, HTML, CSS,  MySql",
      diskUsage: "March 2023 – Nov 2023",
      url: "https://github.com/Alamin-Tokee",
    },
    {
      name: "Qsheba - Mobile worker hiring platform(Personal)",
      desc: "An application that helps to search mobile workers like electricians, painters, etc.Accomplished validation, authentication, search worker, worker communication, and email service for verification",
      color: "green",
      language: "Technologies - Django, Django Rest API, PostgreSQL, Redis, ReactNative",
      diskUsage: "1800",
      url: "https://github.com/Alamin-Tokee/qspera",
    },
    {
      name: "StudyQuery - Query about study(Personal)",
      desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      color: "green",
      language: "Python, Django, Bootstrap, SQLite3",
      diskUsage: "1800",
      url: "https://github.com/Alamin-Tokee/studyquery",
    },
  ],
};

// Show your Particular publications

const particularPublication = {
  projects: [
    {
      name: "Real time Detection and Localization of Colorectal Polyps from Colonoscopy Images: A Deep Learning Approach",
      desc: "Early detection of malignant colon polyps is crucial for reducing mortality rates, with image analysis during colonoscopy beinga widely utilized procedure. This study utilized the YOLOv5 model to develop a model for early detection of polyps, achieving promising results with YOLOv5l demonstrating the highest average testing IoU of 86.25%.",
      color: "yellow",
      language: "Md Al Amin, Bikash Kumar Paul, Nasima Islam Bithi",
      diskUsage: "Year - 2022",
      url: "https://github.com/Alamin-Tokee",
    },
    {
      name: "A bioinformatics and system biology technique to identify candidate biomarkers and functional pathways among stress and depression",
      desc: "Stress and depression present global health challenges, with major depressive disorder (MDD) lacking diagnostic biomarkers. This study analyzes gene networks from datasets GSE183648 and GSE101521 to identify potential MDD biomarkers, highlighting hub genes like ITGB3 and ANGPTL4. Future research includes exploring gene interactions and therapeutic options based on identified genes. Therapeutic possibilities based on differentially expressed genes (DEGs) are explored, suggesting novel treatment avenues. This research aims to improve understanding of stress and depression molecular mechanisms for better diagnosis and treatment strategies in mental health.",
      color: "yellow",
      language: "Md. Abul Basar, Md. Faruk Hosen, Md Al Amin, Bikash Kumar Paul",
      diskUsage: "Year - 2022",
      url: "https://github.com/Alamin-Tokee",
    },
    {
      name: "A Smart Surveillance System to detect modern gun using YOLOv5 algorithm: A Deep Learning Approach",
      desc: "Deep learning, particularly the YOLOv5 model, demonstrates remarkable effectiveness in detecting firearms in various orientations, offering superior accuracy compared to traditional methods. The study showcases the potential of deep learning for real-time firearm detection, highlighting advantages such as reduced computational requirements and swift processing speeds.",
      color: "yellow",
      language: "Md Al Amin, Bikash Kumar Paul",
      diskUsage: "Year - 2022",
      url: "https://github.com/Alamin-Tokee",
    },
    {
      name: "A Cutting-Edge Frontiers in Kidney Disease Diagnosis: A Comprehensive Analysis(Review)",
      desc: "Machine learning models like Random Forest, XGBoost, AdaBoost, and LightGBM showed high accuracy in predicting chronic kidney disease, aiding early detection and better patient outcomes. The study highlights the value of machine learning in enhancing early diagnosis and management of chronic kidney disease, reducing severe complications.",
      color: "yellow",
      language: "Md. Al Amin, Bikash Kumar Paul",
      diskUsage: "Year - 2024",
      url: "https://github.com/Alamin-Tokee",
    },
    {
      name: "FedX: A Cutting-Edge Hybrid Federated Learning Approach for Parkinson's Disease Diagnosis using Xception(Review)",
      desc: "Developed and implemented an Xception-based federated learning model for Parkinson’s disease detection, achieving 96.82% accuracy while preserving data privacy across distributed client datasets. Conducted extensive model training and evaluation using partitioned datasets from the Parkinson's Brain Image Database, contributing to advancements in privacy-preserving healthcare diagnostics.",
      color: "navy",
      language: "Md. Al Amin, Bikash Kumar Paul, Rafid Mostafiz, Md. Zahid Hasan Ontor",
      diskUsage: "Year - 2025",
      url: "https://github.com/Alamin-Tokee",
    },
    {
      name: "A Hybrid Federated Learning Approach for Alzheimer's Disease Diagnosis Using EfficientNet(Review)",
      desc: "Privacy-Preserving Alzheimer’s Detection: The paper proposes an EfficientNet-B0-based model within a federated learning framework to detect and diagnose Alzheimer's Disease from MRI images while ensuring data security and privacy. High Accuracy in Diagnosis: The proposed model, trained across five clients with unique datasets, achieved a 97% accuracy in detecting Alzheimer's Disease, demonstrating its effectiveness in brain disorder diagnosis.",
      color: "green",
      language: "Md. Al Amin, Bikash Kumar Paul, Rafid Mostafiz, Md. Zahid Hasan Ontor",
      diskUsage: "Year - 2025",
      url: "https://github.com/Alamin-Tokee",
    },
    {
      name: "A novel approach for brain tumor detection:U-net segmentation and glcm feature extraction combined with ensemble machine learning models",
      desc: "The study emphasizes the importance of early detection of brain tumors, leveraging MRI for its effectiveness. The researchers applied ensemble machine learning algorithms to detect early-stage brain tumors. The study achieved an impressive average accuracy of 0.998, with the highest accuracy of 0.992 using the XGBoost classifier algorithm. The process included data collection, analysis, and filtering to refine the model's accuracy.",
      color: "green",
      language: "Md. Al Amin, Bikash Kumar Paul, Rafid Mostafiz, Md. Zahid Hasan Ontor",
      diskUsage: "1800",
      url: "https://github.com/Alamin-Tokee/qspera",
    },
    // {
    //   name: "Query about study - StudyQuery",
    //   desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    //   color: "green",
    //   language: "Python, Django, Bootstrap, SQLite3",
    //   diskUsage: "1800",
    //   url: "https://github.com/Alamin-Tokee/studyquery",
    // },
  ],
};

// Your certifications

const certifications = {
  certifications: [
    {
      title: "Postman Student Expert-API test",
      subtitle: "Postman",
      logo_path: "postman.png",
      certificate_link:
        "https://www.getpostman.com/collections/b1fc190bc0afaf98daa2",
      alt_name: "Vskills",
      color_code: "#F6EAEA",
    },
    {
      title: "Intro. Machine Learning",
      subtitle: "Andrew Ng",
      logo_path: "coursera.png",
      certificate_link:
        "https://coursera.org/share/ab86cf3cae8bef0f999ff231de4af56f",
      alt_name: "Experitest",
      color_code: "#F0FFDD",
    },
    {
      title: "Web Development",
      subtitle: "Udemy Instructor",
      logo_path: "udemy.png",
      certificate_link:
        "https://www.udemy.com/share/101w523@9gLte4fUgYc-6eUzjCwZcx6Qh9WID21q_DDWMeYNr5wVvPNhFz1-scI460FpWalPuQ==/",
      alt_name: "Pierian-Data",
      color_code: "#FEF6E6",
    },
    {
      title: "Data Science Material",
      subtitle: "Datacamp Instructor",
      logo_path: "datacamp.webp",
      certificate_link:
        "https://www.datacamp.com/statement-of-accomplishment/course/16a2387cf82444f006d0e96c42df65959a2b13c0",
      alt_name: "RahulShettyAcademy",
      color_code: "#FDE9EA",
    },
    {
      title: "Python Course",
      subtitle: "Hackerrank Test",
      logo_path: "hackerrank.png",
      certificate_link: "https://www.hackerrank.com/certificates/7f2970be07ab",
      alt_name: "IBM",
      color_code: "#E3F1FA",
    },
    {
      title: "ML and DL",
      subtitle: "Kaggle Course",
      logo_path: "kaggle.png",
      certificate_link:
        "https://www.kaggle.com/learn/certification/alamintokee/computer-vision",
      alt_name: "Zero To Mastery",
      color_code: "#FFFDDD",
    },
    {
      title: "Deep Learning",
      subtitle: "Datacamp Instructor",
      logo_path: "datacamp.webp",
      certificate_link:
        "https://www.datacamp.com/statement-of-accomplishment/course/16a2387cf82444f006d0e96c42df65959a2b13c0",
      alt_name: "RahulShettyAcademy",
      color_code: "#FDE9EA",
    },
    {
      title: "PowerBI Desktop",
      subtitle: "Andrew Ng",
      logo_path: "coursera.png",
      certificate_link:
        "https://coursera.org/share/ab86cf3cae8bef0f999ff231de4af56f",
      alt_name: "Experitest",
      color_code: "#F0FFDD",
    },
    {
      title: "Agile Development(Scrum)",
      subtitle: "Udemy Instructor",
      logo_path: "udemy.png",
      certificate_link:
        "https://www.udemy.com/share/101w523@9gLte4fUgYc-6eUzjCwZcx6Qh9WID21q_DDWMeYNr5wVvPNhFz1-scI460FpWalPuQ==/",
      alt_name: "Pierian-Data",
      color_code: "#FEF6E6",
    },
    {
      title: "IELTS",
      subtitle: "British Council",
      logo_path: "ielts.png",
      certificate_link:
        "https://www.udemy.com/share/101w523@9gLte4fUgYc-6eUzjCwZcx6Qh9WID21q_DDWMeYNr5wVvPNhFz1-scI460FpWalPuQ==/",
      alt_name: "Pierian-Data",
      color_code: "#E3F1FA",
    },
  ],
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://www.kaggle.com/code/alamintokee/heart-attack-prediction-using-different-ml-model",
      title: "Heart Attract Prediction Notebook and Article",
      description:
        "Interested in building a test automation framework with selenium and python? If so, check out here !",
    },
    {
      url: "https://www.kaggle.com/code/alamintokee/diabetes-prediction-with-good-accuracy",
      title: "Diabetise Prediction Notebook and Article",
      description:
        "Interested in building a test automation framework with selenium and java? If so, check out here !",
    },
    {
      url: "https://www.kaggle.com/code/alamintokee/breast-cancer-prediction-with-97-accuracy",
      title: "Building a Machine Learning model to detect Breast cancer",
      description:
        "Are you interested to know how machines detect human emotions? If so, check out here !",
    },
    {
      url: "https://www.kaggle.com/code/alamintokee/breast-cancer-prediction-with-97-accuracy",
      title: "Basic End-to-End competative programming workflow",
      description:
        "Do you want to know how a basic end-to-end scikit-learn workflow is implemented ? If so, check out here !",
    },
  ],
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+8801677942758",
  email_address: "alameen.swe@gmail.com",
};

export {
  greeting,
  socialMediaLinks,
  skillsSection,
  workExperiences,
  openSource,
  blogSection,
  particularEducation,
  particularProject,
  particularPublication,
  contactInfo,
  certifications,
};
