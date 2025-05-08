/* Change this file to get your personal Portfolio */

import emoji from "react-easy-emoji";

// Your Summary And Greeting Section

const greeting = {
  username: "Al-Amin Tokee",
  title: "Hi, I'm Al-Amin",
  subTitle: emoji(
    "Software Engineer 👨‍💻 | Machine Leaning 🤖 | Deep Learning ✍️ "
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ZbjNL8K-6oHFngXRr5PZkwNjzBZvAaGW/view?usp=sharing",
};

// Your Social Media Link

const socialMediaLinks = {
  phone: "+8801677942758",
  github: "https://github.com/Alamin-Tokee",
  linkedin: "https://www.linkedin.com/in/al-amin-tokee",
  gmail: "alameen.swe@gmail.com",
  facebook: "https://www.facebook.com/alaminhosen.tokee",
  twitter: "https://twitter.com/tokee_al",
  youtube: "https://youtube.com/@uschas",
};

// Your Skills Section

const skillsSection = {
  title: "Specialization",
  subTitle: "HANDLING ALL BACKEND ACTIVITIES AND EXPLORING DATA SCIENCE",
  skills: [
    emoji(
      "⚡ Designing and developing website using ReactJS,NodeJS and ExpressJS"
    ),
    emoji("⚡ End to End frontend and backend executions"),
    emoji(
      "⚡ Working on development technology like VSCode, Git, Linux, Postman, Docker, Sublime Text, Figma, Jupiter Notebook, etc"
    ),
    emoji(
      "⚡ Building predictive models to extract insights and make decisions out of data"
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
      desc: "PLC, SBC, MQTT, Python, Scikit-learn, PyTorch, Django, Kafka",
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
      desc: "PLC, SBC, Python, GO, PostgreSQL, Docker",
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
      desc: "ReactJS, NodeJS, Redis, MongoDB, MySQL",
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
      desc: "PHP, JavaScript, jQuery, AJAX, MySQL, Oracle",
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
      desc: "Flask, ReactJS, Python, APIs, PostgreSQL",
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
      color: "navy",
    },
    {
      role: "Content Contibutor",
      company: "Geeksforgeeks",
      companylogo: require("./assets/images/gfgLogo.png"),
      date: "Jan 2019 – Sep 2021",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
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
    bio: "Software Engineer 👨‍💻 | Machine Learning 🤖 | Deep Learning ✍️ ",
    location: "Dhaka, Bangladesh",
    hireable: "Yes",
    avatarUrl: require("./assets/images/Tokee.jpg"),
    name: "Al-Amin Tokee",
  },
};


//Show Education 
const particularEducation = {
  projects: [
    {
      name: "Daffodil International University, Ashulia, Savar, Dhaka",
      desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      color: "yellow",
      language: "JavaScript, NodeJS, ReactJS, ExpressJS, MongoDB",
      diskUsage: "2200",
      url: "https://daffodilvarsity.edu.bd/",
    },
    {
      name: "BAF Shaheen School & College, Paharkanchanpur, Sakhipur, Tangail",
      desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      color: "yellow",
      language: "JavaScript, NodeJS, ReactJS, ExpressJS, MongoDB",
      diskUsage: "2200",
      url: "https://bafspkp.edu.bd/",
    },
    {
      name: "Mohanandapur Bijoy Smriti High School, Mohanandapur, Sakhipur, Tangail",
      desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      color: "yellow",
      language: "JavaScript, EJS, NodeJS, ExpressJS, MongoDB",
      diskUsage: "2200",
      url: "https://mbshs.edu.bd/",
    },
  ],
};


// Show your Particular Project

const particularProject = {
  projects: [
    {
      name: "Social Media Application - qbook",
      desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      color: "yellow",
      language: "JavaScript, NodeJS, ReactJS, ExpressJS, MongoDB",
      diskUsage: "2200",
      url: "https://github.com/Alamin-Tokee",
    },
    {
      name: "Ecommerce Appllication - ebazar",
      desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      color: "yellow",
      language: "JavaScript, NodeJS, ReactJS, ExpressJS, MongoDB",
      diskUsage: "2200",
      url: "https://github.com/Alamin-Tokee",
    },
    {
      name: "File Sharing Application - eshare",
      desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      color: "yellow",
      language: "JavaScript, EJS, NodeJS, ExpressJS, MongoDB",
      diskUsage: "2200",
      url: "https://github.com/Alamin-Tokee",
    },
    {
      name: "Online Course Apllication - qcourse",
      desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      color: "yellow",
      language: "JavaScript, NodeJS, ReactJS, ExpressJS",
      diskUsage: "2200",
      url: "https://github.com/Alamin-Tokee",
    },
    {
      name: "Mobile job application - ejob",
      desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      color: "navy",
      language: "Python, Django, PostgreSQl",
      diskUsage: "2000",
      url: "https://github.com/Alamin-Tokee",
    },
    {
      name: "Online helth help application - ehelth",
      desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      color: "green",
      language: "PHP, HTML, CSS,  MySql",
      diskUsage: "1800",
      url: "https://github.com/Alamin-Tokee",
    },
    {
      name: "Blogging Application(Like Medium)",
      desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      color: "green",
      language: "Python, Django, Bootstrap, PostgreSQL",
      diskUsage: "1800",
      url: "https://github.com/Alamin-Tokee/qspera",
    },
    {
      name: "Query about study - StudyQuery",
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
      name: "Colon Polyps Detection from colonscopy images using Deep Learning",
      desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      color: "yellow",
      language: "JavaScript, NodeJS, ReactJS, ExpressJS, MongoDB",
      diskUsage: "2200",
      url: "https://github.com/Alamin-Tokee",
    },
    {
      name: "Gun Detection using Deep Learning",
      desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      color: "yellow",
      language: "JavaScript, NodeJS, ReactJS, ExpressJS, MongoDB",
      diskUsage: "2200",
      url: "https://github.com/Alamin-Tokee",
    },
    {
      name: "File Sharing Application - eshare",
      desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      color: "yellow",
      language: "JavaScript, EJS, NodeJS, ExpressJS, MongoDB",
      diskUsage: "2200",
      url: "https://github.com/Alamin-Tokee",
    },
    {
      name: "Online Course Apllication - qcourse",
      desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      color: "yellow",
      language: "JavaScript, NodeJS, ReactJS, ExpressJS",
      diskUsage: "2200",
      url: "https://github.com/Alamin-Tokee",
    },
    {
      name: "Mobile job application - ejob",
      desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      color: "navy",
      language: "Python, Django, PostgreSQl",
      diskUsage: "2000",
      url: "https://github.com/Alamin-Tokee",
    },
    {
      name: "Online helth help application - ehelth",
      desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      color: "green",
      language: "PHP, HTML, CSS,  MySql",
      diskUsage: "1800",
      url: "https://github.com/Alamin-Tokee",
    },
    {
      name: "Blogging Application(Like Medium)",
      desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      color: "green",
      language: "Python, Django, Bootstrap, PostgreSQL",
      diskUsage: "1800",
      url: "https://github.com/Alamin-Tokee/qspera",
    },
    {
      name: "Query about study - StudyQuery",
      desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      color: "green",
      language: "Python, Django, Bootstrap, SQLite3",
      diskUsage: "1800",
      url: "https://github.com/Alamin-Tokee/studyquery",
    },
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
