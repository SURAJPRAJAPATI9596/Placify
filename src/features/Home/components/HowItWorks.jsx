import React from "react";
import animation from "../../../styles/CardAnimation";
import {
  FaUser,
  FaRoad,
  FaFileAlt,
  FaMicrophone,
  FaTrophy,
} from "react-icons/fa";

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      icon: <FaUser className="text-4xl" />,
      title: "Create Your Profile",
      description:
        "Set up your profile, define your career goals, choose your skills and let Placify personalize your learning journey.",
      color: "from-violet-500 to-fuchsia-500",
    },
    {
      number: 2,
      icon: <FaRoad className="text-4xl" />,
      title: "Follow Your Roadmap",
      description:
        "Choose a learning roadmap and master concepts with structured videos, notes, quizzes and real projects.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      number: 3,
      icon: <FaFileAlt className="text-4xl" />,
      title: "Build Your Resume",
      description:
        "Create a professional ATS-friendly resume and continuously improve it using AI suggestions.",
      color: "from-emerald-500 to-teal-500",
    },
    {
      number: 4,
      icon: <FaMicrophone className="text-4xl" />,
      title: "Practice Interviews",
      description:
        "Prepare using AI mock interviews, coding challenges and personalized interview questions.",
      color: "from-amber-500 to-orange-500",
    },
    {
      number: 5,
      icon: <FaTrophy className="text-4xl" />,
      title: "Get Hired",
      description:
        "Apply for jobs, track applications, showcase your skills and land your dream opportunity.",
      color: "from-rose-500 to-pink-500",
    },
  ];

  return (
    <div className="bg-[var(--bg-primary)] py-24" data-aos={animation.card}>
      <div className="max-w-full mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-[var(--text-primary)] mb-4">
            How Placify Works
          </h2>
          <p className="text-xl text-[var(--text-primary)] opacity-70 max-w-2xl mx-auto">
            Your complete journey from beginner to getting hired in just 5
            simple steps
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector Line */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[var(--border-color)] to-transparent"></div>

          <div className="grid md:grid-cols-5 gap-8 lg:gap-6 relative z-10">
            {steps.map((step, index) => (
              <div
                data-aos={animation.card}
                key={index}
                className="group bg-[var(--card-bg)] border border-[var(--border-color)] rounded-3xl p-8 hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 flex flex-col items-center text-center"
              >
                {/* Number Circle */}
                <div
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white text-5xl font-bold mb-8 shadow-xl group-hover:scale-110 transition-transform duration-300`}
                >
                  {step.number}
                </div>

                {/* Icon */}
                <div className="text-[var(--primary-violet)] mb-6 group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-semibold mb-4 text-[var(--text-primary)]">
                  {step.title}
                </h3>
                <p className="text-[var(--text-primary)] opacity-70 leading-relaxed">
                  {step.description}
                </p>

                {/* Decorative Line for Mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden w-0.5 h-12 bg-[var(--border-color)] my-8"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        {/* <div className="mt-24 bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white rounded-3xl p-12 lg:p-16 text-center">
          <h3 className="text-4xl font-bold mb-4">
            Ready to Start Your Journey?
          </h3>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Join thousands of students who are preparing smarter with Placify
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <button className="bg-white text-violet-700 px-10 py-5 rounded-2xl font-semibold text-lg hover:bg-gray-100 transition-all active:scale-95">
              Get Started Free
            </button>
            <button className="border border-white/50 hover:bg-white/10 px-10 py-5 rounded-2xl font-semibold text-lg transition-all active:scale-95">
              Explore Roadmaps
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default HowItWorks;
