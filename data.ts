import { Code2, Cloud, ShieldCheck, Headphones } from "lucide-react";

export const skills = [
  { title: "Software Development", icon: Code2, items: "Java · Python · JavaScript · Spring Boot · HTML · CSS · SQL · REST APIs" },
  { title: "Cloud & AWS", icon: Cloud, items: "AWS fundamentals · Cloud concepts · IAM · Compute · Storage · Networking · AWS re/Start" },
  { title: "Cybersecurity", icon: ShieldCheck, items: "Security fundamentals · Linux · networking concepts · secure development mindset" },
  { title: "IT Support", icon: Headphones, items: "Hardware & software troubleshooting · user support · technical problem solving · documentation" }
];

export const projects = [
  { name: "EduBridge SA", category: "Education / Web", description: "A low-bandwidth digital learning concept designed to help bridge the digital skills gap in South Africa through learning pathways, quizzes, assessments and certificates.", tech: ["HTML", "CSS", "JavaScript"], url: "https://github.com/AthenkosiFadana/edubridge-sa" },
  { name: "YouthBridge SA", category: "AWS re/Start / Social Impact", description: "A technology project focused on the socioeconomic challenge of youth unemployment, created as an applied AWS re/Start learning project.", tech: ["AWS", "Web", "Cloud Concepts"], url: "https://github.com/AthenkosiFadana/youthbridge-sa" },
  { name: "HealthFlow SA", category: "AWS re/Start / Healthcare", description: "A digital solution concept exploring how technology can help address healthcare system strain and improve access to useful information and workflows.", tech: ["AWS", "Web", "Cloud Concepts"], url: "https://github.com/AthenkosiFadana/healthflow-sa" },
  { name: "SafeWatch SA", category: "AWS re/Start / Safety", description: "A technology concept focused on crime and safety monitoring, using software and cloud learning to explore practical community-focused solutions.", tech: ["AWS", "Web", "Cloud Concepts"], url: "https://github.com/AthenkosiFadana/safewatch-sa" },
  { name: "SkillPath", category: "Web Application", description: "A skills-oriented web project demonstrating an interest in connecting people with practical learning and development opportunities.", tech: ["HTML", "CSS", "JavaScript"], url: "https://github.com/AthenkosiFadana/skillpath" },
  { name: "SpringAssignment1", category: "Backend / Java", description: "A Spring-based academic application demonstrating Java backend development, persistence and structured application design.", tech: ["Java", "Spring Boot", "JPA", "MySQL"], url: "https://github.com/AthenkosiFadana/SpringAssignment1" },
  { name: "ATM Simulator", category: "Programming", description: "A programming project modelling core ATM operations and transaction logic.", tech: ["Java"], url: "https://github.com/AthenkosiFadana/atm-simulator" },
  { name: "DStv IR Controller", category: "IoT / Embedded", description: "An embedded technology project exploring infrared control and hardware/software interaction.", tech: ["ESP32", "C/C++", "IR"], url: "https://github.com/AthenkosiFadana/dstv-ir-controller" }
];

export const experience = [
  { role: "IT Support Technician", org: "Rosstone Professional Solutions", period: "2025", description: "Provided technical support and troubleshooting, helping users resolve hardware, software and day-to-day IT issues." },
  { role: "Computer Science Tutor", org: "University of Fort Hare", period: "3 years", description: "Supported students with Computer Science concepts, problem solving and practical learning." },
  { role: "Mathematics Tutor", org: "University of Fort Hare", period: "3 years", description: "Tutored students in mathematics and helped learners build confidence with quantitative problem solving." },
  { role: "Exam Assistant", org: "Education sector", period: "—", description: "Assisted with examination administration, including controlling and double-checking marks in NSC mark sheets." }
];

export const education = [
  { title: "Bachelor of Science in Computer Science and Biochemistry", org: "University of Fort Hare", period: "Graduate", detail: "Academic background combining computing, scientific problem solving and analytical thinking." },
  { title: "AWS re/Start", org: "AWS / STS Africa", period: "2026", detail: "Hands-on cloud learning covering foundational AWS and cloud concepts with applied socioeconomic technology projects." }
];