import React, { useState } from "react";
import animation from "../../../styles/CardAnimation";
import {
  FaChevronDown,
  FaStar,
  FaUsers,
  FaBuilding,
  FaBriefcase,
} from "react-icons/fa";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Is Placify completely free?",
      answer:
        "Yes. Placify offers many core features completely free — including Roadmaps, Coding Practice, Resources, Resume Builder, and Progress Tracking. Premium unlocks AI Interviews, Personalized Dashboard, Advanced Analytics, Premium Resources, and more.",
    },
    {
      question: "What is included in Placify Premium?",
      answer:
        "Premium members get unlimited AI Mock Interviews, Personalized Career Dashboard, Resume ATS Intelligence, Premium Roadmaps, Advanced Learning Resources, Job Match Recommendations, Priority Support, and early access to new features.",
    },
    {
      question: "Can beginners use Placify?",
      answer:
        "Absolutely. Placify is designed for beginners as well as experienced developers. Every roadmap starts from fundamentals and gradually progresses toward interview preparation.",
    },
    {
      question: "Do I need coding experience?",
      answer:
        "No. Placify provides structured learning paths that guide students from zero knowledge to placement-ready. We have beginner-friendly content and gradual progression.",
    },
    {
      question: "How do Roadmaps work?",
      answer:
        "Each roadmap is divided into modules, topics, projects, quizzes, and resources. Your progress is automatically tracked as you complete lessons, and the platform suggests the next best step.",
    },
    {
      question: "Does Placify track my learning progress?",
      answer:
        "Yes. Placify automatically tracks completed topics, roadmaps, coding problems solved, mock interviews, resume score, achievements, and learning streaks.",
    },
    {
      question: "Can I build my resume on Placify?",
      answer:
        "Yes. Placify includes a powerful AI-powered Resume Builder with ATS analysis, professional templates, and continuous optimization suggestions.",
    },
    {
      question: "Does Placify help with actual placements?",
      answer:
        "Yes. Placify helps students prepare through coding practice, interview preparation, resume optimization, company-specific resources, and fresher-focused job recommendations.",
    },
    {
      question: "Can I access Placify on mobile?",
      answer:
        "Yes. Placify is fully responsive and works seamlessly across desktop, tablet, and mobile devices.",
    },
    {
      question: "How do I get started?",
      answer:
        "Simply create your free account, complete your profile, choose a roadmap based on your goals, and start learning. Placify will guide your placement journey step by step.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-(--bg-primary) pt-10" data-aos={animation.card}>
      <div className="max-w-5xl mx-auto px-6 pb-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-violet-500 mb-4">
            <span className="text-3xl">❓</span>
            <span className="font-semibold tracking-widest">FAQs</span>
          </div>
          <h2 className="text-5xl font-bold text-(--text-primary) mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-(--text-primary) opacity-70 max-w-2xl mx-auto">
            Everything you need to know about Placify before starting your
            placement journey
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4 mb-20">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-(--card-bg) border border-(--border-color) rounded-3xl overflow-hidden transition-all duration-300"
            >
              <h1
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-(--bg-primary) transition"
              >
                <span className="text-lg font-medium text-(--text-primary) pr-8">
                  {faq.question}
                </span>
                <div
                  className={`transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
                >
                  <FaChevronDown />
                </div>
              </h1>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-8 pb-8 text-(--text-primary) opacity-80 leading-relaxed border-t border-(--border-color)">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still Have Questions */}
        <div className="bg-linear-to-br from-violet-600 to-fuchsia-600 text-white rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-semibold mb-4">Still have questions?</h3>
          <p className="text-xl opacity-90 mb-10">
            Didn't find the answer you were looking for? Reach out to our team
            anytime.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-violet-700 px-10 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition">
              Contact Us
            </button>
            <button className="border border-white/50 hover:bg-white/10 px-10 py-4 rounded-2xl font-semibold transition">
              Join Community
            </button>
          </div>
        </div>

        {/* Trust Bar */}
        {/* <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="flex justify-center text-amber-400 mb-3">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <div className="text-3xl font-bold text-(--text-primary)">
              4.9/5
            </div>
            <div className="text-sm text-(--text-primary) opacity-70">
              Average Rating
            </div>
          </div>
          <div>
            <div className="text-5xl font-bold text-[var(--primary-violet)]">
              10,000+
            </div>
            <div className="text-sm text-(--text-primary) opacity-70">
              Students
            </div>
          </div>
          <div>
            <div className="text-5xl font-bold text-[var(--primary-violet)]">
              250+
            </div>
            <div className="text-sm text-(--text-primary) opacity-70">
              Companies
            </div>
          </div>
          <div>
            <div className="text-5xl font-bold text-[var(--primary-violet)]">
              Thousands
            </div>
            <div className="text-sm text-(--text-primary) opacity-70">
              Placements
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default FAQSection;
