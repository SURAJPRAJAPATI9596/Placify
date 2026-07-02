import {
  FileText,
  ScanSearch,
  Map,
  MessageCircle,
  Briefcase,
  BookOpen,
  Calculator,
  Code2,
} from "lucide-react";
import { TfiDashboard } from "react-icons/tfi";

const featuresData = [
  {
    featureImg: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    icon: FileText,
    featureTitle: "Resume Builder",
    featureDescription:
      "Create professional ATS-friendly resumes using modern templates and live preview.",
  },

  {
    featureImg: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    icon: ScanSearch,
    featureTitle: "ATS Resume Checker",
    featureDescription:
      "Analyze your resume and improve its ATS score before applying for jobs.",
  },

  {
    featureImg: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    icon: Map,
    featureTitle: "Career Roadmaps",
    featureDescription:
      "Follow structured learning paths for Frontend, Backend, Full Stack, and more.",
  },

  {
    featureImg: "https://images.unsplash.com/photo-1552664730-d307ca884978",
    icon: MessageCircle,
    featureTitle: "Interview Preparation",
    featureDescription:
      "Practice technical, HR, and aptitude questions asked in real interviews.",
  },

  {
    featureImg: "https://images.unsplash.com/photo-1521791136064-7986c2920216",
    icon: Briefcase,
    featureTitle: "Job Board",
    featureDescription:
      "Discover internships and job opportunities curated for students and freshers.",
  },

  {
    featureImg: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173",
    icon: BookOpen,
    featureTitle: "Notes & Resources",
    featureDescription:
      "Access free notes, guides, cheat sheets, and learning materials in one place.",
  },

  {
    featureImg: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    icon: Calculator,
    featureTitle: "Aptitude Preparation",
    featureDescription:
      "Prepare for placement tests with quantitative, logical, and verbal questions.",
  },

  {
    featureImg: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    icon: Code2,
    featureTitle: "Project Ideas",
    featureDescription:
      "Explore beginner to advanced project ideas to strengthen your portfolio.",
  },
  {
    featureImg: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    icon: TfiDashboard,
    featureTitle: "Personal dashboard",
    featureDescription:
      "Her you can track your progress, next step, you will be guided by AI, but it is our paid feature",
  },
];

export default featuresData;
