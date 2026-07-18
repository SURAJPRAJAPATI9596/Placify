import React, { useState, useEffect } from "react";
import {
  FaShieldAlt,
  FaUserSecret,
  FaDatabase,
  FaBrain,
  FaFileAlt,
  FaCode,
  FaCookie,
  FaShareAlt,
  FaLock,
  FaClock,
  FaUserCog,
  FaChild,
  FaPlug,
  FaGlobe,
  FaSync,
  FaEnvelope,
  FaMapMarkerAlt,
  FaChevronRight,
  FaCheckCircle,
  FaUser,
  FaGraduationCap,
  FaLaptopCode,
  FaRobot,
  FaServer,
  FaUserShield,
  FaTrash,
  FaEye,
  FaChartLine,
  FaCertificate,
  FaBriefcase,
  FaLink,
  FaBuilding,
} from "react-icons/fa";

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState("introduction");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = document.querySelectorAll("section[id]");
      let currentSection = "introduction";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const sections = [
    { id: "introduction", label: "Introduction", icon: FaShieldAlt },
    {
      id: "information-collected",
      label: "Information We Collect",
      icon: FaDatabase,
    },
    {
      id: "how-we-use",
      label: "How We Use Your Information",
      icon: FaUserSecret,
    },
    { id: "ai-processing", label: "AI Processing", icon: FaBrain },
    { id: "resume-privacy", label: "Resume & ATS Privacy", icon: FaFileAlt },
    { id: "coding-data", label: "Coding Platform Data", icon: FaCode },
    { id: "cookies", label: "Cookies", icon: FaCookie },
    { id: "data-sharing", label: "Data Sharing", icon: FaShareAlt },
    { id: "data-security", label: "Data Security", icon: FaLock },
    { id: "data-retention", label: "Data Retention", icon: FaClock },
    { id: "user-rights", label: "User Rights", icon: FaUserCog },
    { id: "children-privacy", label: "Children's Privacy", icon: FaChild },
    { id: "third-party", label: "Third-Party Services", icon: FaPlug },
    { id: "international", label: "International Users", icon: FaGlobe },
    { id: "policy-updates", label: "Policy Updates", icon: FaSync },
    { id: "contact", label: "Contact Us", icon: FaEnvelope },
  ];

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[var(--card-bg)] to-[var(--bg-primary)] border-b border-[var(--border-color)]">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-500/10 rounded-lg">
                <FaShieldAlt className="w-6 h-6 text-blue-500" />
              </div>
              <span className="text-sm font-medium text-blue-500 uppercase tracking-wider">
                Privacy
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Privacy Policy
            </h1>

            <p className="text-xl text-[var(--text-primary)]/70 mb-3">
              Last Updated:{" "}
              <span className="text-[var(--text-primary)] font-medium">
                January 2026
              </span>
            </p>

            <p className="text-lg text-[var(--text-primary)]/80 max-w-3xl">
              Placify values your privacy and is committed to protecting your
              personal information. This policy explains how we collect, use,
              and safeguard your data while providing AI-powered career
              preparation services.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              <div className="flex items-center gap-2 px-4 py-2 bg-[var(--card-bg)]/50 backdrop-blur-sm rounded-full border border-[var(--border-color)]">
                <FaCheckCircle className="text-green-400" />
                <span className="text-sm">Transparent</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-[var(--card-bg)]/50 backdrop-blur-sm rounded-full border border-[var(--border-color)]">
                <FaCheckCircle className="text-green-400" />
                <span className="text-sm">Secure</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-[var(--card-bg)]/50 backdrop-blur-sm rounded-full border border-[var(--border-color)]">
                <FaCheckCircle className="text-green-400" />
                <span className="text-sm">Responsible</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
          {/* Content Sections */}
          <div className="flex-1 space-y-6">
            {/* 1. Introduction */}
            <section id="introduction" className="scroll-mt-20">
              <div className="bg-[var(--card-bg)] rounded-3xl border border-[var(--border-color)] p-6 md:p-8 shadow-xl transition-all hover:shadow-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-500/10 rounded-xl">
                    <FaShieldAlt className="w-5 h-5 text-blue-400" />
                  </div>
                  <h2 className="text-2xl font-bold">1. Introduction</h2>
                </div>
                <p className="text-[var(--text-primary)]/80 leading-relaxed mb-3">
                  At Placify, we are committed to protecting your privacy and
                  handling your personal information with transparency and
                  responsibility. This Privacy Policy explains how we collect,
                  use, and safeguard your data when you use our AI-powered
                  career preparation platform.
                </p>
                <p className="text-[var(--text-primary)]/70 leading-relaxed">
                  We believe in giving you control over your data and being
                  transparent about our practices. This policy applies to all
                  services offered by Placify, including personalized roadmaps,
                  coding practice, resume building, ATS analysis, AI mock
                  interviews, and job portal features.
                </p>
              </div>
            </section>

            {/* 2. Information We Collect */}
            <section id="information-collected" className="scroll-mt-20">
              <div className="bg-[var(--card-bg)] rounded-3xl border border-[var(--border-color)] p-6 md:p-8 shadow-xl transition-all hover:shadow-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-purple-500/10 rounded-xl">
                    <FaDatabase className="w-5 h-5 text-purple-400" />
                  </div>
                  <h2 className="text-2xl font-bold">
                    2. Information We Collect
                  </h2>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--text-primary)]/90 mb-2 flex items-center gap-2">
                      <FaUser className="w-4 h-4 text-blue-400" />
                      Personal Information
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {[
                        "Full Name",
                        "Email Address",
                        "Phone Number",
                        "Profile Picture",
                        "Education Details",
                        "Skills",
                        "Resume Information",
                      ].map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-2 px-3 py-2 bg-[var(--bg-primary)] rounded-xl border border-[var(--border-color)]"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                          <span className="text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-[var(--text-primary)]/90 mb-2 flex items-center gap-2">
                      <FaUserShield className="w-4 h-4 text-green-400" />
                      Account Information
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {[
                        "Username",
                        "Password (encrypted)",
                        "Login History",
                        "Account Preferences",
                      ].map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-2 px-3 py-2 bg-[var(--bg-primary)] rounded-xl border border-[var(--border-color)]"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                          <span className="text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-[var(--text-primary)]/90 mb-2 flex items-center gap-2">
                      <FaGraduationCap className="w-4 h-4 text-yellow-400" />
                      Career Information
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {[
                        "Resume Data",
                        "ATS Reports",
                        "Roadmap Progress",
                        "Coding Progress",
                        "Interview History",
                        "Job Applications",
                        "Certifications",
                        "Achievements",
                      ].map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-2 px-3 py-2 bg-[var(--bg-primary)] rounded-xl border border-[var(--border-color)]"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-yellow-400"></span>
                          <span className="text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-[var(--text-primary)]/90 mb-2 flex items-center gap-2">
                      <FaLaptopCode className="w-4 h-4 text-red-400" />
                      Technical Information
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {[
                        "Browser",
                        "Device",
                        "Operating System",
                        "IP Address",
                        "Cookies",
                        "Usage Analytics",
                      ].map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-2 px-3 py-2 bg-[var(--bg-primary)] rounded-xl border border-[var(--border-color)]"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>
                          <span className="text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 3. How We Use Your Information */}
            <section id="how-we-use" className="scroll-mt-20">
              <div className="bg-[var(--card-bg)] rounded-3xl border border-[var(--border-color)] p-6 md:p-8 shadow-xl transition-all hover:shadow-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-green-500/10 rounded-xl">
                    <FaUserSecret className="w-5 h-5 text-green-400" />
                  </div>
                  <h2 className="text-2xl font-bold">
                    3. How We Use Your Information
                  </h2>
                </div>
                <p className="text-[var(--text-primary)]/80 leading-relaxed mb-4">
                  We use your information to provide, improve, and personalize
                  your Placify experience:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    "Personalize dashboards",
                    "Improve AI recommendations",
                    "Generate resumes",
                    "Analyze ATS compatibility",
                    "Track coding progress",
                    "Recommend roadmaps",
                    "Improve interview preparation",
                    "Recommend jobs",
                    "Enhance platform security",
                    "Improve user experience",
                  ].map((use) => (
                    <div
                      key={use}
                      className="flex items-center gap-2 px-3 py-2 bg-[var(--bg-primary)] rounded-xl border border-[var(--border-color)]"
                    >
                      <FaCheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                      <span className="text-sm">{use}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 4. AI Processing */}
            <section id="ai-processing" className="scroll-mt-20">
              <div className="bg-[var(--card-bg)] rounded-3xl border border-[var(--border-color)] p-6 md:p-8 shadow-xl transition-all hover:shadow-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-cyan-500/10 rounded-xl">
                    <FaBrain className="w-5 h-5 text-cyan-400" />
                  </div>
                  <h2 className="text-2xl font-bold">4. AI Processing</h2>
                </div>
                <p className="text-[var(--text-primary)]/80 leading-relaxed mb-3">
                  Placify uses advanced AI models to process information and
                  provide intelligent career preparation services. AI processing
                  occurs in the following areas:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
                  {[
                    "Resume Rewriting",
                    "ATS Analysis",
                    "AI Chat Support",
                    "Interview Assistance",
                    "Career Guidance",
                  ].map((service) => (
                    <div
                      key={service}
                      className="flex items-center gap-2 px-3 py-2 bg-[var(--bg-primary)] rounded-xl border border-[var(--border-color)]"
                    >
                      <FaRobot className="w-3 h-3 text-cyan-400 flex-shrink-0" />
                      <span className="text-sm">{service}</span>
                    </div>
                  ))}
                </div>
                <p className="text-[var(--text-primary)]/70 leading-relaxed">
                  <span className="font-semibold">Important:</span> Your
                  information is processed only to provide requested AI
                  features. Placify does not use AI to make automated hiring
                  decisions. All AI-generated recommendations are for guidance
                  purposes only.
                </p>
              </div>
            </section>

            {/* 5. Resume & ATS Privacy */}
            <section id="resume-privacy" className="scroll-mt-20">
              <div className="bg-[var(--card-bg)] rounded-3xl border border-[var(--border-color)] p-6 md:p-8 shadow-xl transition-all hover:shadow-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-indigo-500/10 rounded-xl">
                    <FaFileAlt className="w-5 h-5 text-indigo-400" />
                  </div>
                  <h2 className="text-2xl font-bold">
                    5. Resume & ATS Privacy
                  </h2>
                </div>
                <ul className="space-y-3 text-[var(--text-primary)]/80">
                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0" />
                    <span>
                      Uploaded resumes remain confidential and are only
                      accessible to you
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0" />
                    <span>
                      Resume data is processed only for analysis or rewriting
                      purposes
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0" />
                    <span>
                      ATS reports are generated automatically for your personal
                      improvement
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0" />
                    <span>
                      You maintain full control over your uploaded documents and
                      can delete them anytime
                    </span>
                  </li>
                </ul>
              </div>
            </section>

            {/* 6. Coding Platform Data */}
            <section id="coding-data" className="scroll-mt-20">
              <div className="bg-[var(--card-bg)] rounded-3xl border border-[var(--border-color)] p-6 md:p-8 shadow-xl transition-all hover:shadow-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-orange-500/10 rounded-xl">
                    <FaCode className="w-5 h-5 text-orange-400" />
                  </div>
                  <h2 className="text-2xl font-bold">
                    6. Coding Platform Data
                  </h2>
                </div>
                <p className="text-[var(--text-primary)]/80 leading-relaxed mb-3">
                  Placify stores and processes coding-related data to enhance
                  your learning experience:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-3">
                  {[
                    "Submitted Code",
                    "Coding History",
                    "Problem Progress",
                    "Performance Statistics",
                    "Learning Progress",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 px-3 py-2 bg-[var(--bg-primary)] rounded-xl border border-[var(--border-color)]"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span>
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-[var(--text-primary)]/70 leading-relaxed">
                  This information is used exclusively to track your progress
                  and improve your learning experience. We do not share your
                  code submissions or solutions with third parties.
                </p>
              </div>
            </section>

            {/* 7. Cookies */}
            <section id="cookies" className="scroll-mt-20">
              <div className="bg-[var(--card-bg)] rounded-3xl border border-[var(--border-color)] p-6 md:p-8 shadow-xl transition-all hover:shadow-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-yellow-500/10 rounded-xl">
                    <FaCookie className="w-5 h-5 text-yellow-400" />
                  </div>
                  <h2 className="text-2xl font-bold">7. Cookies</h2>
                </div>
                <p className="text-[var(--text-primary)]/80 leading-relaxed mb-3">
                  Cookies help us provide a better user experience by:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-3">
                  {[
                    "Keep users logged in",
                    "Remember preferences",
                    "Improve performance",
                    "Provide analytics",
                  ].map((use) => (
                    <div
                      key={use}
                      className="flex items-center gap-2 px-3 py-2 bg-[var(--bg-primary)] rounded-xl border border-[var(--border-color)]"
                    >
                      <FaCheckCircle className="w-3 h-3 text-yellow-400 flex-shrink-0" />
                      <span className="text-sm">{use}</span>
                    </div>
                  ))}
                </div>
                <p className="text-[var(--text-primary)]/70 leading-relaxed">
                  You can disable cookies through your browser settings.
                  However, please note that some features may not function
                  properly without cookies.
                </p>
              </div>
            </section>

            {/* 8. Data Sharing */}
            <section id="data-sharing" className="scroll-mt-20">
              <div className="bg-[var(--card-bg)] rounded-3xl border border-[var(--border-color)] p-6 md:p-8 shadow-xl transition-all hover:shadow-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-red-500/10 rounded-xl">
                    <FaShareAlt className="w-5 h-5 text-red-400" />
                  </div>
                  <h2 className="text-2xl font-bold">8. Data Sharing</h2>
                </div>
                <p className="text-[var(--text-primary)]/80 leading-relaxed mb-3 font-semibold text-green-400">
                  ✓ Placify does NOT sell user data.
                </p>
                <p className="text-[var(--text-primary)]/80 leading-relaxed mb-3">
                  Data may only be shared with trusted service providers
                  necessary to operate the platform:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    "Authentication providers",
                    "Cloud storage",
                    "Email delivery",
                    "Payment providers",
                    "Analytics providers",
                  ].map((provider) => (
                    <div
                      key={provider}
                      className="flex items-center gap-2 px-3 py-2 bg-[var(--bg-primary)] rounded-xl border border-[var(--border-color)]"
                    >
                      <FaServer className="w-3 h-3 text-red-400 flex-shrink-0" />
                      <span className="text-sm">{provider}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 9. Data Security */}
            <section id="data-security" className="scroll-mt-20">
              <div className="bg-[var(--card-bg)] rounded-3xl border border-[var(--border-color)] p-6 md:p-8 shadow-xl transition-all hover:shadow-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-emerald-500/10 rounded-xl">
                    <FaLock className="w-5 h-5 text-emerald-400" />
                  </div>
                  <h2 className="text-2xl font-bold">9. Data Security</h2>
                </div>
                <p className="text-[var(--text-primary)]/80 leading-relaxed mb-3">
                  We implement robust security measures to protect your
                  information:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    "HTTPS encryption",
                    "Encrypted passwords",
                    "Secure authentication",
                    "Database security",
                    "Access control",
                    "Regular security updates",
                  ].map((measure) => (
                    <div
                      key={measure}
                      className="flex items-center gap-2 px-3 py-2 bg-[var(--bg-primary)] rounded-xl border border-[var(--border-color)]"
                    >
                      <FaCheckCircle className="w-3 h-3 text-emerald-400 flex-shrink-0" />
                      <span className="text-sm">{measure}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 10. Data Retention */}
            <section id="data-retention" className="scroll-mt-20">
              <div className="bg-[var(--card-bg)] rounded-3xl border border-[var(--border-color)] p-6 md:p-8 shadow-xl transition-all hover:shadow-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-teal-500/10 rounded-xl">
                    <FaClock className="w-5 h-5 text-teal-400" />
                  </div>
                  <h2 className="text-2xl font-bold">10. Data Retention</h2>
                </div>
                <p className="text-[var(--text-primary)]/80 leading-relaxed mb-3">
                  Placify retains your information only as long as necessary to
                  provide our services or comply with legal obligations. We
                  periodically review our data retention practices to ensure we
                  only keep what's needed.
                </p>
                <p className="text-[var(--text-primary)]/70 leading-relaxed">
                  You may request deletion of your account and associated data
                  at any time through your account settings or by contacting our
                  support team.
                </p>
              </div>
            </section>

            {/* 11. User Rights */}
            <section id="user-rights" className="scroll-mt-20">
              <div className="bg-[var(--card-bg)] rounded-3xl border border-[var(--border-color)] p-6 md:p-8 shadow-xl transition-all hover:shadow-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-500/10 rounded-xl">
                    <FaUserCog className="w-5 h-5 text-blue-400" />
                  </div>
                  <h2 className="text-2xl font-bold">11. User Rights</h2>
                </div>
                <p className="text-[var(--text-primary)]/80 leading-relaxed mb-3">
                  You have the following rights regarding your personal data:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    "Access your data",
                    "Update profile information",
                    "Download your information",
                    "Delete your account",
                    "Request correction",
                    "Contact support about privacy",
                  ].map((right) => (
                    <div
                      key={right}
                      className="flex items-center gap-2 px-3 py-2 bg-[var(--bg-primary)] rounded-xl border border-[var(--border-color)]"
                    >
                      <FaCheckCircle className="w-3 h-3 text-blue-400 flex-shrink-0" />
                      <span className="text-sm">{right}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 12. Children's Privacy */}
            <section id="children-privacy" className="scroll-mt-20">
              <div className="bg-[var(--card-bg)] rounded-3xl border border-[var(--border-color)] p-6 md:p-8 shadow-xl transition-all hover:shadow-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-pink-500/10 rounded-xl">
                    <FaChild className="w-5 h-5 text-pink-400" />
                  </div>
                  <h2 className="text-2xl font-bold">12. Children's Privacy</h2>
                </div>
                <p className="text-[var(--text-primary)]/80 leading-relaxed">
                  Placify is intended for students and professionals who are at
                  least 16 years old or have reached the legal age in their
                  jurisdiction. Users under the applicable legal age should use
                  the platform with appropriate parental or guardian consent
                  where required by law.
                </p>
              </div>
            </section>

            {/* 13. Third-Party Services */}
            <section id="third-party" className="scroll-mt-20">
              <div className="bg-[var(--card-bg)] rounded-3xl border border-[var(--border-color)] p-6 md:p-8 shadow-xl transition-all hover:shadow-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gray-500/10 rounded-xl">
                    <FaPlug className="w-5 h-5 text-gray-400" />
                  </div>
                  <h2 className="text-2xl font-bold">
                    13. Third-Party Services
                  </h2>
                </div>
                <p className="text-[var(--text-primary)]/80 leading-relaxed mb-3">
                  Placify integrates with trusted third-party services to
                  provide core functionality:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    "AI providers",
                    "Email delivery services",
                    "Cloud hosting",
                    "Payment gateways",
                    "Analytics tools",
                  ].map((service) => (
                    <div
                      key={service}
                      className="flex items-center gap-2 px-3 py-2 bg-[var(--bg-primary)] rounded-xl border border-[var(--border-color)]"
                    >
                      <FaLink className="w-3 h-3 text-gray-400 flex-shrink-0" />
                      <span className="text-sm">{service}</span>
                    </div>
                  ))}
                </div>
                <p className="text-[var(--text-primary)]/70 leading-relaxed mt-3">
                  These service providers have their own privacy policies. We
                  encourage you to review their policies, as they govern their
                  handling of your data.
                </p>
              </div>
            </section>

            {/* 14. International Users */}
            <section id="international" className="scroll-mt-20">
              <div className="bg-[var(--card-bg)] rounded-3xl border border-[var(--border-color)] p-6 md:p-8 shadow-xl transition-all hover:shadow-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-violet-500/10 rounded-xl">
                    <FaGlobe className="w-5 h-5 text-violet-400" />
                  </div>
                  <h2 className="text-2xl font-bold">
                    14. International Users
                  </h2>
                </div>
                <p className="text-[var(--text-primary)]/80 leading-relaxed">
                  Placify serves users globally. Your information may be
                  processed in different countries depending on our hosting
                  infrastructure. We ensure appropriate safeguards are
                  maintained to protect your data regardless of where it is
                  processed, in compliance with applicable data protection laws.
                </p>
              </div>
            </section>

            {/* 15. Policy Updates */}
            <section id="policy-updates" className="scroll-mt-20">
              <div className="bg-[var(--card-bg)] rounded-3xl border border-[var(--border-color)] p-6 md:p-8 shadow-xl transition-all hover:shadow-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-amber-500/10 rounded-xl">
                    <FaSync className="w-5 h-5 text-amber-400" />
                  </div>
                  <h2 className="text-2xl font-bold">15. Policy Updates</h2>
                </div>
                <p className="text-[var(--text-primary)]/80 leading-relaxed mb-3">
                  Placify may update this Privacy Policy periodically to reflect
                  changes in our practices, technology, or legal requirements.
                  We will notify users of significant changes through email or
                  platform notifications.
                </p>
                <p className="text-[var(--text-primary)]/70 leading-relaxed">
                  Your continued use of Placify after policy updates constitutes
                  acceptance of the updated policy. We encourage you to review
                  this policy regularly to stay informed about how we protect
                  your privacy.
                </p>
              </div>
            </section>

            {/* 16. Contact Us */}
            <section id="contact" className="scroll-mt-20">
              <div className="bg-[var(--card-bg)] rounded-3xl border border-[var(--border-color)] p-6 md:p-8 shadow-xl transition-all hover:shadow-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-green-500/10 rounded-xl">
                    <FaEnvelope className="w-5 h-5 text-green-400" />
                  </div>
                  <h2 className="text-2xl font-bold">16. Contact Us</h2>
                </div>
                <div className="space-y-3 text-[var(--text-primary)]/80">
                  <div className="flex items-center gap-3 p-3 bg-[var(--bg-primary)] rounded-xl border border-[var(--border-color)]">
                    <FaEnvelope className="text-green-400" />
                    <div>
                      <p className="text-sm font-medium">Support</p>
                      <a
                        href="mailto:support@placify.com"
                        className="text-sm hover:text-blue-400 transition-colors"
                      >
                        support@placify.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-[var(--bg-primary)] rounded-xl border border-[var(--border-color)]">
                    <FaBuilding className="text-blue-400" />
                    <div>
                      <p className="text-sm font-medium">Business Inquiries</p>
                      <a
                        href="mailto:business@placify.com"
                        className="text-sm hover:text-blue-400 transition-colors"
                      >
                        business@placify.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-[var(--bg-primary)] rounded-xl border border-[var(--border-color)]">
                    <FaMapMarkerAlt className="text-red-400" />
                    <div>
                      <p className="text-sm font-medium">Location</p>
                      <p className="text-sm">India</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-[var(--bg-primary)] rounded-xl border border-[var(--border-color)]">
                    <FaClock className="text-purple-400" />
                    <div>
                      <p className="text-sm font-medium">Response Time</p>
                      <p className="text-sm">Within 24 Hours</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Bottom CTA */}
            <div className="mt-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl border border-[var(--border-color)] p-8 md:p-10 shadow-xl backdrop-blur-sm">
              <div className="max-w-3xl mx-auto text-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-3">
                  Your Privacy Matters
                </h3>
                <p className="text-[var(--text-primary)]/70 mb-6">
                  Placify is committed to protecting your information and
                  maintaining transparency in how your data is collected, used,
                  and safeguarded.
                </p>
                <p className="text-[var(--text-primary)]/60 mb-6">
                  If you have questions about this Privacy Policy, please
                  contact us.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-3 items-center">
                  <a
                    href="mailto:support@placify.com"
                    className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-medium transition-all shadow-lg hover:shadow-blue-500/25 flex items-center gap-2"
                  >
                    <FaEnvelope className="w-4 h-4" />
                    support@placify.com
                  </a>
                  <span className="text-[var(--text-primary)]/50">•</span>
                  <span className="text-[var(--text-primary)]/60 flex items-center gap-2">
                    <FaMapMarkerAlt className="w-4 h-4 text-red-400" />
                    India
                  </span>
                </div>
              </div>
            </div>

            {/* Footer */}
            <footer className="pt-8 pb-4 border-t border-[var(--border-color)]">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[var(--text-primary)]/60">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-[var(--text-primary)]">
                    Placify
                  </span>
                  <span>© 2026 All Rights Reserved.</span>
                </div>
                <div className="flex items-center gap-6">
                  <a
                    href="#"
                    className="hover:text-[var(--text-primary)] transition-colors"
                  >
                    Terms & Conditions
                  </a>
                  <a
                    href="#"
                    className="hover:text-[var(--text-primary)] transition-colors"
                  >
                    Contact
                  </a>
                  <a
                    href="#"
                    className="hover:text-[var(--text-primary)] transition-colors"
                  >
                    Cookies Policy
                  </a>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
