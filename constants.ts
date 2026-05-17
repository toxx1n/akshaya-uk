import { Project, Experience, Education, SkillCategory, Certificate } from './types';

export const RESUME_CONTEXT = `
Name: Akshaya U K
Email: ukambika036@gmail.com
Phone: 9744978115
Location: Kannur, Kerala
LinkedIn: Available upon request
GitHub: Available upon request

Profile:
Motivated IT student with strong analytical and problem-solving skills. Experienced in building full-stack applications and ML workflows using Python, Java, Flask, and MySQL. Skilled in debugging, requirement gathering, teamwork, adaptability, and delivering clean, scalable software solutions.

Education:
- B.Tech in Information Technology, College of Engineering, Thalassery (2022 – 2026)
  - Completed coursework in programming, database systems, and software development methodologies.

Technical Skills:
- Languages: Java, Python, C, C++, HTML, CSS
- Frameworks/Tools: Flask, Scikit-learn, MySQL, Git, VS Code
- Technical Areas: OOP, DBMS, DSA, Operating Systems, Computer Networks, SDLC, APIs
- Soft Skills: Communication, Teamwork, Adaptability, Time Management, Critical Thinking

Projects:
1. Pizza Restaurant Management System (HTML, CSS, PHP, MySQL)
   - Developed a full-stack restaurant management system with admin and customer dashboards.
   - Implemented secure authentication and role-based access control.
   - Designed MySQL schemas for orders, menu items, users, and transactions.
   - Automated order tracking, sales monitoring, and menu management.
   - Built a responsive frontend for improved user experience.

2. House Price Prediction Web App (Python, Flask, Scikit-learn)
   - Built an ML regression model to predict housing prices using key features.
   - Performed preprocessing, feature engineering, and model evaluation.
   - Integrated the model with a Flask API for real-time predictions.
   - Designed a simple HTML/CSS/JS interface for user input and results.
   - Improved backend response times through debugging and testing.

3. Brain Hemorrhage Detection System (Python, PyTorch, Django, Blockchain)
   - Developed an automated diagnostic system using a CNN for CT scan analysis and Random Forest for symptom-based prediction.
   - Built a secure web platform using Django for uploading patient data and medical imagery.
   - Integrated Blockchain and Smart Contracts to ensure the immutability and security of diagnostic records.
   - Implemented an intelligent Chatbot to assist users with prescriptions and diagnostic updates.

Academic Experience:
- Completed practical labs in Java OOP, data structures, and exception handling.
- Designed SQL schemas, queries, joins, and constraints during DBMS lab sessions.
- Built applications using REST APIs, form validation, and client–server concepts.

Courses:
- Cloud Computing (NPTEL)
- Career Essentials in Generative AI
- Explore ML Using Python
- Introduction to AI
- AI Ethics

Certificates:
- AR & Game Development Workshop — IIT Bombay
- Techkranti Quizzard Participation — Techkriti Association
`;

export const PROJECTS: Project[] = [
  {
    title: "Pizza Restaurant Management System",
    tech: ["PHP", "MySQL", "HTML", "CSS"],
    description: [
      "Developed a full-stack restaurant management system with admin and customer dashboards.",
      "Implemented secure authentication and role-based access control.",
      "Automated order tracking, sales monitoring, and menu management.",
      "Designed robust MySQL schemas for complex transactional data."
    ],
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "House Price Prediction Web App",
    tech: ["Python", "Flask", "Scikit-learn", "ML"],
    description: [
      "Built an ML regression model to predict housing prices using key features.",
      "Performed preprocessing, feature engineering, and model evaluation.",
      "Integrated the model with a Flask API for real-time predictions.",
      "Designed a responsive interface for user input and results visualization."
    ],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop"
  },
  {
    title: "Brain Hemorrhage Detection System",
    tech: ["Python", "PyTorch", "Django", "CNN", "Blockchain"],
    description: [
      "Developed a diagnostic system using CNNs for CT scan analysis and Random Forest for symptom-based prediction.",
      "Built a secure backend architecture using Django to facilitate medical image uploads and patient data processing.",
      "Integrated Blockchain and Smart Contracts to ensure immutability and transparency of sensitive diagnostic records.",
      "Implemented a Chatbot interface to simplify doctor-patient communication and provide real-time updates."
    ],
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=2071&auto=format&fit=crop"
  }
];

export const EDUCATION: Education[] = [
  {
    degree: "B.Tech in Information Technology",
    institution: "College of Engineering, Thalassery",
    location: "Kannur, Kerala",
    year: "2022 – 2026",
    details: "Completed coursework in programming, database systems, and software development methodologies."
  }
];

export const ACADEMIC_HIGHLIGHTS = [
  {
    title: "Java & OOP Labs",
    description: "Completed practical labs focusing on Object-Oriented Programming, data structures implementation, and exception handling patterns."
  },
  {
    title: "DBMS & SQL",
    description: "Designed comprehensive SQL schemas, complex queries, joins, and constraints during intensive DBMS lab sessions."
  },
  {
    title: "Web Technologies",
    description: "Built functional applications utilizing REST APIs, form validation, and core client–server architecture concepts."
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["Java", "Python", "C", "C++", "HTML", "CSS", "SQL"]
  },
  {
    title: "Frameworks & Tools",
    skills: ["Django", "Flask", "PyTorch", "Scikit-learn", "MySQL", "Git"]
  },
  {
    title: "Technical Concepts",
    skills: ["Machine Learning", "Blockchain", "OOP", "DBMS", "DSA", "APIs"]
  }
];

export const CERTIFICATES: Certificate[] = [
  { name: "AR & Game Development Workshop", issuer: "IIT Bombay" },
  { name: "Cloud Computing", issuer: "NPTEL" },
  { name: "Career Essentials in Generative AI", issuer: "LinkedIn / Microsoft" },
  { name: "Explore ML Using Python", issuer: "Google" },
  { name: "Techkranti Quizzard", issuer: "Techkriti Association" },
  { name: "Introduction to AI & Ethics", issuer: "Coursework" }
];

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];
