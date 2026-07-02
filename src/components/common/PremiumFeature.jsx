import React from "react";
import {
  FaCrown,
  FaCheck,
  FaRocket,
  FaStar,
  FaArrowRight,
} from "react-icons/fa";

const PremiumFeature = () => {
  const benefits = [
    {
      icon: "🎤",
      title: "AI Mock Interviews",
      desc: "Realistic interview practice with instant feedback",
    },
    {
      icon: "📊",
      title: "Personalized Dashboard",
      desc: "Smart insights and career recommendations",
    },
    {
      icon: "📈",
      title: "Advanced Analytics",
      desc: "Deep progress tracking and performance reports",
    },
    {
      icon: "🛣️",
      title: "Premium Roadmaps",
      desc: "Expert-curated learning paths with projects",
    },
    {
      icon: "📝",
      title: "Resume Intelligence",
      desc: "AI-powered ATS optimization & suggestions",
    },
    {
      icon: "💼",
      title: "Job Match Engine",
      desc: "Smart recommendations based on your profile",
    },
  ];

  const whyUpgrade = [
    {
      title: "Learn Faster",
      desc: "Personalized recommendations and structured learning paths",
      icon: "⚡",
    },
    {
      title: "Prepare Smarter",
      desc: "AI interviews and company-specific question banks",
      icon: "🎯",
    },
    {
      title: "Track Better",
      desc: "Detailed analytics and placement journey insights",
      icon: "📈",
    },
    {
      title: "Get Hired Faster",
      desc: "Everything you need — all in one powerful platform",
      icon: "🚀",
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] py-16">
      <div className="max-w-5xl mx-auto px-6">
        {/* Premium Badge + Hero */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400 to-yellow-500 text-white text-sm font-semibold px-6 py-2 rounded-full mb-6 shadow-lg">
            <FaCrown /> Placify Premium
          </div>

          <h1 className="text-6xl font-bold leading-tight mb-6">
            Unlock the Full
            <br />
            Placify Experience
          </h1>
          <p className="text-2xl text-[var(--text-primary)] opacity-70 max-w-2xl mx-auto">
            Take your placement preparation to the next level with powerful AI
            tools and premium features.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {benefits.map((benefit, i) => (
            <div
              key={i}
              className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-3xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="text-5xl mb-6 transition-transform group-hover:scale-110">
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-[var(--text-primary)] opacity-70 leading-relaxed">
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Why Upgrade */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why Students Choose Placify Premium
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {whyUpgrade.map((item, i) => (
              <div
                key={i}
                className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-3xl p-8 flex gap-6 group hover:shadow-xl transition-all"
              >
                <div className="text-5xl flex-shrink-0 group-hover:scale-110 transition">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-2xl font-semibold mb-3">{item.title}</h4>
                  <p className="text-[var(--text-primary)] opacity-75">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Card */}
        <div className="max-w-md mx-auto bg-[var(--card-bg)] border border-[var(--border-color)] rounded-3xl p-10 text-center shadow-2xl mb-20 relative overflow-hidden">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-400 to-yellow-500 text-white text-xs font-bold px-8 py-1 rounded-full">
            MOST POPULAR
          </div>

          <h3 className="text-3xl font-bold mb-2">Placify Premium</h3>
          <div className="flex items-end justify-center gap-1 mb-8">
            <span className="text-6xl font-bold">₹499</span>
            <span className="text-2xl opacity-70">/month</span>
          </div>

          <div className="space-y-4 text-left mb-10">
            {[
              "Unlimited AI Interviews",
              "Premium Roadmaps & Resources",
              "Advanced Analytics Dashboard",
              "Resume AI Intelligence",
              "Job Match Recommendations",
              "Priority Support",
              "Early Feature Access",
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-3">
                <FaCheck className="text-emerald-500" />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <button className="w-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white py-5 rounded-2xl font-semibold text-lg hover:scale-105 transition-all shadow-xl">
            🚀 Upgrade to Premium
          </button>
          <p className="text-xs text-[var(--text-primary)] opacity-60 mt-4">
            Cancel anytime. 14-day money-back guarantee.
          </p>
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white rounded-3xl py-16 px-8">
          <h2 className="text-4xl font-bold mb-4">
            Ready to prepare like a topper?
          </h2>
          <p className="text-xl opacity-90 mb-10">
            Join thousands of students accelerating their placement journey
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-violet-700 px-10 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 transition-all active:scale-95">
              Upgrade Now
            </button>
            <button className="border border-white/50 hover:bg-white/10 px-10 py-4 rounded-2xl font-semibold text-lg transition-all active:scale-95">
              Explore All Features
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumFeature;
