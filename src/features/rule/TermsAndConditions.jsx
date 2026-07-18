import React, { useState, useEffect } from "react";
import {
  FaCheckCircle,
  FaClipboardList,
  FaUserShield,
  FaLaptopCode,
  FaRobot,
  FaFileAlt,
  FaCode,
  FaCrown,
  FaBrain,
  FaBan,
  FaShieldAlt,
  FaLock,
  FaSync,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGlobe,
  FaChevronRight,
  FaGavel,
  FaEye,
  FaGraduationCap,
  FaBuilding,
  FaUsers,
  FaClock,
} from "react-icons/fa";

const TermsAndConditions = () => {
  const [activeSection, setActiveSection] = useState("acceptance");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = document.querySelectorAll("section[id]");
      let currentSection = "acceptance";

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
    { id: "acceptance", label: "Acceptance of Terms", icon: FaCheckCircle },
    { id: "eligibility", label: "User Eligibility", icon: FaUsers },
    { id: "account", label: "Account Responsibilities", icon: FaUserShield },
    { id: "features", label: "Use of Features", icon: FaClipboardList },
    { id: "ai-disclaimer", label: "AI Services Disclaimer", icon: FaRobot },
    { id: "resume-ats", label: "Resume & ATS Analysis", icon: FaFileAlt },
    { id: "coding-rules", label: "Coding Platform Rules", icon: FaCode },
    { id: "premium", label: "Premium Subscription", icon: FaCrown },
    { id: "intellectual", label: "Intellectual Property", icon: FaBrain },
    { id: "prohibited", label: "Prohibited Activities", icon: FaBan },
    { id: "liability", label: "Limitation of Liability", icon: FaShieldAlt },
    { id: "privacy", label: "Privacy Reference", icon: FaLock },
    { id: "changes", label: "Changes to Terms", icon: FaSync },
    { id: "contact", label: "Contact Information", icon: FaEnvelope },
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
                <FaGavel className="w-6 h-6 text-blue-500" />
              </div>
              <span className="text-sm font-medium text-blue-500 uppercase tracking-wider">
                Legal
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Terms & Conditions
            </h1>

            <p className="text-xl text-[var(--text-primary)]/70 mb-3">
              Last Updated:{" "}
              <span className="text-[var(--text-primary)] font-medium">
                January 2026
              </span>
            </p>

            <p className="text-lg text-[var(--text-primary)]/80 max-w-3xl">
              By using Placify, you agree to these terms and conditions. This
              agreement governs your use of our AI-powered placement preparation
              platform and all associated services.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              <div className="flex items-center gap-2 px-4 py-2 bg-[var(--card-bg)]/50 backdrop-blur-sm rounded-full border border-[var(--border-color)]">
                <FaGraduationCap className="text-blue-400" />
                <span className="text-sm">For Students</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-[var(--card-bg)]/50 backdrop-blur-sm rounded-full border border-[var(--border-color)]">
                <FaBuilding className="text-purple-400" />
                <span className="text-sm">For Professionals</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-[var(--card-bg)]/50 backdrop-blur-sm rounded-full border border-[var(--border-color)]">
                <FaUsers className="text-green-400" />
                <span className="text-sm">For Institutions</span>
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
            {/* 1. Acceptance of Terms */}
            <section id="acceptance" className="scroll-mt-20">
              <div className="bg-[var(--card-bg)] rounded-3xl border border-[var(--border-color)] p-6 md:p-8 shadow-xl transition-all hover:shadow-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-500/10 rounded-xl">
                    <FaCheckCircle className="w-5 h-5 text-blue-400" />
                  </div>
                  <h2 className="text-2xl font-bold">1. Acceptance of Terms</h2>
                </div>
                <p className="text-[var(--text-primary)]/80 leading-relaxed mb-3">
                  By accessing or using Placify, you agree to be bound by these
                  Terms and Conditions. If you do not agree with any part of
                  these terms, you must not use the platform.
                </p>
                <p className="text-[var(--text-primary)]/70 leading-relaxed">
                  Your continued use of Placify constitutes your acceptance of
                  this agreement and any updates we make. We recommend reviewing
                  these terms periodically to stay informed of any changes.
                </p>
              </div>
            </section>

            {/* 2. User Eligibility */}
            <section id="eligibility" className="scroll-mt-20">
              <div className="bg-[var(--card-bg)] rounded-3xl border border-[var(--border-color)] p-6 md:p-8 shadow-xl transition-all hover:shadow-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-green-500/10 rounded-xl">
                    <FaUsers className="w-5 h-5 text-green-400" />
                  </div>
                  <h2 className="text-2xl font-bold">2. User Eligibility</h2>
                </div>
                <p className="text-[var(--text-primary)]/80 leading-relaxed mb-3">
                  Placify is available to individuals who are legally eligible
                  to use the platform. Users must be at least 16 years old or
                  have parental consent to use the service.
                </p>
                <p className="text-[var(--text-primary)]/70 leading-relaxed">
                  Students, graduates, and professionals may use Placify for
                  career preparation and skill development. By registering, you
                  confirm that you meet these eligibility requirements.
                </p>
              </div>
            </section>

            {/* 3. Account Responsibilities */}
            <section id="account" className="scroll-mt-20">
              <div className="bg-[var(--card-bg)] rounded-3xl border border-[var(--border-color)] p-6 md:p-8 shadow-xl transition-all hover:shadow-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-yellow-500/10 rounded-xl">
                    <FaUserShield className="w-5 h-5 text-yellow-400" />
                  </div>
                  <h2 className="text-2xl font-bold">
                    3. Account Responsibilities
                  </h2>
                </div>
                <p className="text-[var(--text-primary)]/80 leading-relaxed mb-3">
                  You are solely responsible for maintaining the security of
                  your Placify account and password. You agree not to share your
                  login credentials with others or allow unauthorized access to
                  your account.
                </p>
                <p className="text-[var(--text-primary)]/70 leading-relaxed">
                  Impersonating another user or providing false information is
                  strictly prohibited. You must notify Placify immediately of
                  any unauthorized use of your account.
                </p>
              </div>
            </section>

            {/* 4. Use of Placify Features */}
            <section id="features" className="scroll-mt-20">
              <div className="bg-[var(--card-bg)] rounded-3xl border border-[var(--border-color)] p-6 md:p-8 shadow-xl transition-all hover:shadow-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-purple-500/10 rounded-xl">
                    <FaClipboardList className="w-5 h-5 text-purple-400" />
                  </div>
                  <h2 className="text-2xl font-bold">
                    4. Use of Placify Features
                  </h2>
                </div>
                <p className="text-[var(--text-primary)]/80 leading-relaxed mb-4">
                  Placify provides a comprehensive suite of tools for career
                  preparation, including:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                  {[
                    "Personalized Roadmaps",
                    "Coding Practice",
                    "Resume Builder",
                    "ATS Analysis",
                    "AI Mock Interviews",
                    "Job Portal",
                    "Learning Resources",
                    "Progress Dashboard",
                  ].map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2 px-3 py-2 bg-[var(--bg-primary)] rounded-xl border border-[var(--border-color)]"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <p className="text-[var(--text-primary)]/70 leading-relaxed">
                  All features are provided for educational and
                  career-preparation purposes. Users must use these tools
                  responsibly and in accordance with their intended purpose.
                </p>
              </div>
            </section>

            {/* 5. AI Services Disclaimer */}
            <section id="ai-disclaimer" className="scroll-mt-20">
              <div className="bg-[var(--card-bg)] rounded-3xl border border-[var(--border-color)] p-6 md:p-8 shadow-xl transition-all hover:shadow-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-red-500/10 rounded-xl">
                    <FaRobot className="w-5 h-5 text-red-400" />
                  </div>
                  <h2 className="text-2xl font-bold">
                    5. AI Services Disclaimer
                  </h2>
                </div>
                <p className="text-[var(--text-primary)]/80 leading-relaxed mb-3">
                  Placify's AI-powered recommendations, including roadmap
                  suggestions, mock interview feedback, and resume analysis, are
                  provided for guidance purposes only.
                </p>
                <p className="text-[var(--text-primary)]/70 leading-relaxed">
                  Placify does not guarantee job placement, interview selection,
                  or any specific career outcomes. Users should independently
                  verify and cross-reference important career decisions with
                  other sources and professional advice.
                </p>
              </div>
            </section>

            {/* 6. Resume & ATS Analysis */}
            <section id="resume-ats" className="scroll-mt-20">
              <div className="bg-[var(--card-bg)] rounded-3xl border border-[var(--border-color)] p-6 md:p-8 shadow-xl transition-all hover:shadow-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-indigo-500/10 rounded-xl">
                    <FaFileAlt className="w-5 h-5 text-indigo-400" />
                  </div>
                  <h2 className="text-2xl font-bold">
                    6. Resume & ATS Analysis
                  </h2>
                </div>
                <p className="text-[var(--text-primary)]/80 leading-relaxed mb-3">
                  ATS (Applicant Tracking System) scores provided by Placify are
                  estimates based on resume analysis algorithms. These scores
                  are meant to help you improve your resume.
                </p>
                <p className="text-[var(--text-primary)]/70 leading-relaxed">
                  Actual ATS systems used by employers may vary significantly in
                  their evaluation criteria. Placify's analysis should be used
                  as a general guide, not as a definitive assessment of resume
                  quality.
                </p>
              </div>
            </section>

            {/* 7. Coding Platform Rules */}
            <section id="coding-rules" className="scroll-mt-20">
              <div className="bg-[var(--card-bg)] rounded-3xl border border-[var(--border-color)] p-6 md:p-8 shadow-xl transition-all hover:shadow-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-cyan-500/10 rounded-xl">
                    <FaCode className="w-5 h-5 text-cyan-400" />
                  </div>
                  <h2 className="text-2xl font-bold">
                    7. Coding Platform Rules
                  </h2>
                </div>
                <ul className="space-y-2 text-[var(--text-primary)]/80">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>
                      Users must not upload, execute, or share malicious code or
                      viruses
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>
                      Attempting to gain unauthorized access to other users'
                      solutions or system resources is prohibited
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>
                      Cheating, sharing solutions improperly, or abusing the
                      platform may result in account suspension
                    </span>
                  </li>
                </ul>
              </div>
            </section>

            {/* 8. Premium Subscription Terms */}
            <section id="premium" className="scroll-mt-20">
              <div className="bg-[var(--card-bg)] rounded-3xl border border-[var(--border-color)] p-6 md:p-8 shadow-xl transition-all hover:shadow-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-amber-500/10 rounded-xl">
                    <FaCrown className="w-5 h-5 text-amber-400" />
                  </div>
                  <h2 className="text-2xl font-bold">
                    8. Premium Subscription Terms
                  </h2>
                </div>
                <p className="text-[var(--text-primary)]/80 leading-relaxed mb-3">
                  Certain features of Placify are available exclusively through
                  a premium subscription. These include advanced mock
                  interviews, detailed analytics, and premium content.
                </p>
                <p className="text-[var(--text-primary)]/70 leading-relaxed mb-3">
                  Subscriptions will automatically renew according to your
                  selected plan (monthly or annually) unless canceled. You may
                  cancel your subscription at any time through your account
                  settings, subject to the platform's cancellation policy.
                </p>
                <p className="text-[var(--text-primary)]/60 leading-relaxed text-sm">
                  Refunds for unused portions of subscription periods are
                  handled in accordance with our refund policy, available in
                  your account dashboard.
                </p>
              </div>
            </section>

            {/* 9. Intellectual Property */}
            <section id="intellectual" className="scroll-mt-20">
              <div className="bg-[var(--card-bg)] rounded-3xl border border-[var(--border-color)] p-6 md:p-8 shadow-xl transition-all hover:shadow-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-pink-500/10 rounded-xl">
                    <FaBrain className="w-5 h-5 text-pink-400" />
                  </div>
                  <h2 className="text-2xl font-bold">
                    9. Intellectual Property
                  </h2>
                </div>
                <p className="text-[var(--text-primary)]/80 leading-relaxed mb-3">
                  All content available on Placify, including but not limited to
                  roadmaps, coding challenges, educational materials, branding
                  elements, and platform software, is the exclusive property of
                  Placify.
                </p>
                <p className="text-[var(--text-primary)]/70 leading-relaxed">
                  Users may not copy, modify, redistribute, or create derivative
                  works from Placify's proprietary content without explicit
                  written permission. Personal use of platform features does not
                  grant intellectual property rights.
                </p>
              </div>
            </section>

            {/* 10. Prohibited Activities */}
            <section id="prohibited" className="scroll-mt-20">
              <div className="bg-[var(--card-bg)] rounded-3xl border border-[var(--border-color)] p-6 md:p-8 shadow-xl transition-all hover:shadow-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-red-500/10 rounded-xl">
                    <FaBan className="w-5 h-5 text-red-400" />
                  </div>
                  <h2 className="text-2xl font-bold">
                    10. Prohibited Activities
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    "Fraudulent activity or misrepresentation",
                    "Harassment or abusive behavior toward others",
                    "Hate speech or discriminatory content",
                    "Spamming or unsolicited marketing",
                    "Reverse engineering platform code",
                    "Unauthorized scraping of data",
                    "Uploading harmful or illegal content",
                    "Disrupting platform functionality",
                  ].map((activity) => (
                    <div
                      key={activity}
                      className="flex items-center gap-2 px-3 py-2 bg-[var(--bg-primary)] rounded-xl border border-[var(--border-color)]"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0"></span>
                      <span className="text-sm">{activity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 11. Limitation of Liability */}
            <section id="liability" className="scroll-mt-20">
              <div className="bg-[var(--card-bg)] rounded-3xl border border-[var(--border-color)] p-6 md:p-8 shadow-xl transition-all hover:shadow-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gray-500/10 rounded-xl">
                    <FaShieldAlt className="w-5 h-5 text-gray-400" />
                  </div>
                  <h2 className="text-2xl font-bold">
                    11. Limitation of Liability
                  </h2>
                </div>
                <p className="text-[var(--text-primary)]/80 leading-relaxed mb-3">
                  Placify provides services on a best-effort basis and is not
                  liable for any employment outcomes, including but not limited
                  to job offers, interview selections, or salary negotiations.
                </p>
                <p className="text-[var(--text-primary)]/70 leading-relaxed">
                  The platform is not responsible for decisions made by
                  employers, recruitment agencies, or any third parties. All
                  services are provided "as is" without warranties of any kind,
                  either express or implied.
                </p>
              </div>
            </section>

            {/* 12. Privacy Reference */}
            <section id="privacy" className="scroll-mt-20">
              <div className="bg-[var(--card-bg)] rounded-3xl border border-[var(--border-color)] p-6 md:p-8 shadow-xl transition-all hover:shadow-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-500/10 rounded-xl">
                    <FaLock className="w-5 h-5 text-blue-400" />
                  </div>
                  <h2 className="text-2xl font-bold">12. Privacy Reference</h2>
                </div>
                <p className="text-[var(--text-primary)]/80 leading-relaxed">
                  Placify collects and processes user data in accordance with
                  our Privacy Policy. Please refer to the Privacy Policy for
                  detailed information on how we handle your data, including:
                </p>
                <ul className="mt-3 space-y-1 text-[var(--text-primary)]/70">
                  <li className="flex items-center gap-2">
                    <FaEye className="w-3 h-3 text-blue-400" />
                    <span>What data we collect</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaEye className="w-3 h-3 text-blue-400" />
                    <span>How we use your data</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaEye className="w-3 h-3 text-blue-400" />
                    <span>Your rights regarding your data</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* 13. Changes to Terms */}
            <section id="changes" className="scroll-mt-20">
              <div className="bg-[var(--card-bg)] rounded-3xl border border-[var(--border-color)] p-6 md:p-8 shadow-xl transition-all hover:shadow-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-teal-500/10 rounded-xl">
                    <FaSync className="w-5 h-5 text-teal-400" />
                  </div>
                  <h2 className="text-2xl font-bold">13. Changes to Terms</h2>
                </div>
                <p className="text-[var(--text-primary)]/80 leading-relaxed mb-3">
                  Placify reserves the right to update or modify these Terms and
                  Conditions at any time. We will notify users of significant
                  changes through email or platform notifications.
                </p>
                <p className="text-[var(--text-primary)]/70 leading-relaxed">
                  Continued use of Placify after such changes constitutes your
                  acceptance of the updated terms. We encourage users to review
                  these terms regularly to stay informed.
                </p>
              </div>
            </section>

            {/* 14. Contact Information */}
            <section id="contact" className="scroll-mt-20">
              <div className="bg-[var(--card-bg)] rounded-3xl border border-[var(--border-color)] p-6 md:p-8 shadow-xl transition-all hover:shadow-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-green-500/10 rounded-xl">
                    <FaEnvelope className="w-5 h-5 text-green-400" />
                  </div>
                  <h2 className="text-2xl font-bold">
                    14. Contact Information
                  </h2>
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
                      <p className="text-sm">Usually within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Bottom CTA */}
            <div className="mt-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl border border-[var(--border-color)] p-8 md:p-10 shadow-xl backdrop-blur-sm">
              <div className="max-w-3xl mx-auto text-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-3">
                  Questions About These Terms?
                </h3>
                <p className="text-[var(--text-primary)]/70 mb-6">
                  If you have any questions regarding these Terms & Conditions,
                  please contact the Placify support team.
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
                  <span>© 2026 All rights reserved.</span>
                </div>
                <div className="flex items-center gap-6">
                  <a
                    href="#"
                    className="hover:text-[var(--text-primary)] transition-colors"
                  >
                    Privacy Policy
                  </a>
                  <a
                    href="#"
                    className="hover:text-[var(--text-primary)] transition-colors"
                  >
                    Cookies
                  </a>
                  <a
                    href="#"
                    className="hover:text-[var(--text-primary)] transition-colors"
                  >
                    Contact
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

export default TermsAndConditions;
