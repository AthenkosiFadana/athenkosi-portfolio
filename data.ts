import { Code2, Cloud, ShieldCheck, Headphones } from "lucide-react";

export const PROFILE = {
  name: "Athenkosi Fadana",
  role: "Computer Science Graduate",
  email: "athenkosifadana@gmail.com",
  github: "https://github.com/AthenkosiFadana",
  linkedin: "https://www.linkedin.com/in/athenkosi-fadana-41a013235/",
  location: "South Africa",
  site: "https://athenkosi-portfolio.vercel.app",
};

export const NAV = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

export const STACK = [
  "Java", "Python", "JavaScript", "TypeScript", "React", "Next.js",
  "Spring Boot", "FastAPI", "Flask", "SQL", "REST APIs", "AWS",
  "Git", "Linux", "CI/CD",
];

export const skills = [
  { title: "Software Development", icon: Code2, items: ["Java", "Python", "JavaScript", "React", "Next.js", "Spring Boot", "SQL", "REST APIs"] },
  { title: "Cloud & AWS", icon: Cloud, items: ["AWS re/Start", "IAM", "Compute", "Storage", "Networking", "Serverless", "SAM / Lambda"] },
  { title: "Cybersecurity", icon: ShieldCheck, items: ["Security fundamentals", "Linux", "Networking", "Secure coding", "Auth & JWT"] },
  { title: "IT Support", icon: Headphones, items: ["Troubleshooting", "User support", "Hardware & software", "Documentation"] },
];

export type Project = {
  name: string;
  category: string;
  description: string;
  tech: string[];
  url: string;
  demo?: string;
  image: string;
};

export const projects: Project[] = [
  {
    name: "EduBridge SA",
    category: "Full-stack · Education",
    description:
      "Low-bandwidth digital skills platform for South Africa with structured courses, career pathways, quizzes, assessments and downloadable certificates. Pages stay small so the site remains usable on mobile data.",
    tech: ["Next.js", "FastAPI", "SQLAlchemy", "REST API"],
    url: "https://github.com/AthenkosiFadana/edubridge-sa",
    demo: "https://edubridge-sa.vercel.app",
    image: "/thumbs/edubridge.webp",
  },
  {
    name: "SafeWatch SA",
    category: "Serverless · Public safety",
    description:
      "Community incident reporting with a live Leaflet crime map, local safety alerts and an analytics dashboard. The backend runs as AWS Lambda functions provisioned through SAM.",
    tech: ["React", "Leaflet", "Recharts", "Flask", "AWS SAM"],
    url: "https://github.com/AthenkosiFadana/safewatch-sa",
    demo: "https://safewatch-sa.vercel.app",
    image: "/thumbs/safewatch.webp",
  },
  {
    name: "HealthFlow SA",
    category: "Full-stack · Healthcare",
    description:
      "A first-contact layer between patients and public healthcare: non-diagnostic urgency triage, facility search with reported wait times, and a patient-flow dashboard facilities can actually maintain.",
    tech: ["Next.js", "Leaflet", "Recharts", "Flask", "PostgreSQL"],
    url: "https://github.com/AthenkosiFadana/healthflow-sa",
    image: "/thumbs/healthflow.webp",
  },
  {
    name: "YouthBridge SA",
    category: "Full-stack · Employment",
    description:
      "Connects young South Africans to jobs, learnerships and internships, scores a candidate's skills against each listing, and tracks every application through one dashboard.",
    tech: ["React", "FastAPI", "SQLAlchemy", "JWT auth"],
    url: "https://github.com/AthenkosiFadana/youthbridge-sa",
    demo: "https://youthbridge-sa.vercel.app",
    image: "/thumbs/youthbridge.webp",
  },
  {
    name: "SkillPath",
    category: "Web application · Careers",
    description:
      "Free courses, a resume builder, a cover-letter generator and a job-application tracker, all in one Flask app with registration, session auth, form validation and persistent storage.",
    tech: ["Flask", "SQLAlchemy", "WTForms", "SQLite"],
    url: "https://github.com/AthenkosiFadana/skillpath",
    image: "/thumbs/skillpath.webp",
  },
  {
    name: "ATM Simulator",
    category: "Interactive · Mobile",
    description:
      "A guided ATM tutorial for first-time users, covering card insertion, PIN entry, balance checks, withdrawals and transfers, packaged for Android and iOS through Capacitor.",
    tech: ["JavaScript", "HTML", "CSS", "Capacitor"],
    url: "https://github.com/AthenkosiFadana/atm-simulator",
    demo: "https://atm-simulator-rho.vercel.app",
    image: "/thumbs/atm.webp",
  },
  {
    name: "DStv IR Controller",
    category: "IoT · Embedded",
    description:
      "ESP32 firmware that drives a 38 kHz NEC infrared LED to control a DStv decoder from a phone over Wi-Fi, using HTTP endpoints and MQTT with debounced input and a status API.",
    tech: ["C++", "ESP32", "MQTT", "PlatformIO"],
    url: "https://github.com/AthenkosiFadana/dstv-ir-controller",
    image: "/thumbs/dstv.webp",
  },
  {
    name: "Course Catalog API",
    category: "Backend · Java",
    description:
      "Spring Boot 3 REST service serving departmental course data, with annotation-based routing, a configured view resolver and an integration test suite.",
    tech: ["Java", "Spring Boot", "REST", "Maven"],
    url: "https://github.com/AthenkosiFadana/SpringAssignment1",
    image: "/thumbs/spring.webp",
  },
];

export const experience = [
  {
    role: "IT Support Technician",
    org: "Rosstone Professional Solutions",
    period: "2025",
    description:
      "First-line technical support: diagnosed and resolved hardware, software and network faults, set up machines, and kept written records so repeat issues were caught early.",
  },
  {
    role: "Computer Science Tutor",
    org: "University of Fort Hare",
    period: "3 years",
    description:
      "Ran tutorials and practical sessions across the CS curriculum, marked work and coached students through exams, from first-year programming to data structures.",
  },
  {
    role: "Mathematics Tutor",
    org: "University of Fort Hare",
    period: "3 years",
    description:
      "Taught mathematics to first- and second-year students, focusing on working problems out loud rather than memorising steps.",
  },
  {
    role: "Exam Assistant",
    org: "Education sector",
    period: "Dec 2023 · 11 days",
    description:
      "Contract role during NSC marking: controlled and double-checked captured marks against mark sheets, resolving discrepancies before submission.",
  },
];

export const education = [
  {
    title: "BSc Computer Science & Biochemistry",
    org: "University of Fort Hare",
    period: "Graduate",
    detail: "Combined computing with laboratory science, covering algorithms, data structures and structured problem solving.",
  },
  {
    title: "AWS re/Start",
    org: "AWS / STS Africa",
    period: "2026",
    detail: "Covers cloud fundamentals such as IAM, compute, storage and networking, applied across four socio-economic project builds.",
  },
  {
    title: "FNB App Academy",
    org: "FNB · University of Johannesburg (JBS)",
    period: "2026 · In progress",
    detail:
      "Nine-week online programme covering Python fundamentals, object-oriented programming, Kivy UI and APIs, capped by a final app showcase.",
    url: "https://academy.appoftheyear.co.za/",
  },
];

export type Certificate = {
  title: string;
  issuer: string;
  issued: string;
  file: string;
  note?: string;
};

export const certificates: Certificate[] = [
  {
    title: "AI Engineering Basics",
    issuer: "EduCourse",
    issued: "15 Aug 2026",
    file: "Athenkosi-FadanaAI-EngineeringAI-Engineering-BasicsEduCourse.pdf",
  },
  {
    title: "Fire Safety",
    issuer: "EduCourse",
    issued: "15 Aug 2026",
    file: "Athenkosi-FadanaFire-Safety-Certificate-CourseFire-SafetyEduCourse.pdf",
  },
  {
    title: "Construction Procurement and Tendering",
    issuer: "EduCourse",
    issued: "15 Aug 2026",
    file: "Athenkosi-FadanaConstruction-Procurement-and-TenderingConstruction-Procurement-and-Tendering-CertificateEduCourse.pdf",
  },
  {
    title: "Google Workspace Basics",
    issuer: "EduCourse",
    issued: "13 Aug 2026",
    file: "Athenkosi-FadanaGoogle-Workspace-Certificate-CourseGoogle-Workspace-Basics-CertificateEduCourse.pdf",
  },
  {
    title: "Logistics and Supply Chain Management",
    issuer: "EduCourse",
    issued: "13 Aug 2026",
    file: "Athenkosi-FadanaLogistics-and-Supply-Chain-Management-Certificate-CourseLogistics-and-Supply-Chain-ManagementEduCourse.pdf",
  },
  {
    title: "Career Essentials in Cybersecurity",
    issuer: "Microsoft · LinkedIn Learning",
    issued: "3 Dec 2024",
    note: "Learning path",
    file: "CertificateOfCompletion_Career Essentials in Cybersecurity by Microsoft and LinkedIn.pdf",
  },
  {
    title: "Cybersecurity Foundations",
    issuer: "LinkedIn Learning",
    issued: "2 Dec 2024",
    file: "CertificateOfCompletion_Cybersecurity Foundations.pdf",
  },
  {
    title: "Cybersecurity Awareness: Terminology",
    issuer: "LinkedIn Learning",
    issued: "2 Dec 2024",
    file: "CertificateOfCompletion_Cybersecurity Awareness Cybersecurity Terminology.pdf",
  },
  {
    title: "The Cybersecurity Threat Landscape",
    issuer: "LinkedIn Learning",
    issued: "1 Dec 2024",
    file: "CertificateOfCompletion_The Cybersecurity Threat Landscape.pdf",
  },
  {
    title: "Prompt Engineering for Generative AI",
    issuer: "LinkedIn Learning",
    issued: "1 Dec 2024",
    file: "CertificateOfCompletion_Introduction to Prompt Engineering for Generative AI.pdf",
  },
  {
    title: "Teaching English as a Foreign Language",
    issuer: "TEFL Professional Institute",
    issued: "Dec 2024",
    note: "120 hours · Distinction",
    file: "TR1914211502-certificate.pdf",
  },
  {
    title: "Career Skills in Data Analytics",
    issuer: "LinkedIn Learning",
    issued: "30 Nov 2024",
    file: "CertificateOfCompletion_Introduction to Career Skills in Data Analytics.pdf",
  },
  {
    title: "Career Skills in Software Development",
    issuer: "LinkedIn Learning",
    issued: "30 Nov 2024",
    file: "CertificateOfCompletion_Introduction to Career Skills in Software Development.pdf",
  },
];

