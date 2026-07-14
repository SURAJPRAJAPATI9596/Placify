import React, { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import animation from "../../../styles/CardAnimation";

const RoadmapPreview = () => {
  const scrollContainerRef = useRef(null);

  const roadmaps = [
    {
      id: 1,
      title: "Frontend Development",
      category: "Frontend",
      duration: "12 Weeks",
      level: "Beginner → Advanced",
      modules: "45",
      projects: "12",
      description:
        "Master React, JavaScript, HTML, CSS, APIs and modern frontend development.",
      color: "from-blue-500 to-cyan-500",
      icon: "🌐",
      progress: 72,
      popular: true,
    },
    {
      id: 2,
      title: "Backend Development",
      category: "Backend",
      duration: "10 Weeks",
      level: "Intermediate",
      modules: "38",
      projects: "8",
      description:
        "Build scalable APIs with Node.js, Express, MongoDB and cloud deployment.",
      color: "from-emerald-500 to-teal-500",
      icon: "⚙️",
      progress: 45,
      popular: false,
    },
    {
      id: 3,
      title: "DSA Mastery",
      category: "Core",
      duration: "14 Weeks",
      level: "Beginner → Advanced",
      modules: "52",
      projects: "15",
      description:
        "Master Data Structures & Algorithms with 500+ problems and company tags.",
      color: "from-violet-500 to-purple-500",
      icon: "🧠",
      progress: 58,
      popular: true,
    },
    {
      id: 4,
      title: "Full Stack Development",
      category: "Full Stack",
      duration: "16 Weeks",
      level: "Intermediate",
      modules: "65",
      projects: "18",
      description:
        "End-to-end development with MERN stack, authentication, and deployment.",
      color: "from-amber-500 to-orange-500",
      icon: "🔥",
      progress: 30,
      popular: false,
    },
    {
      id: 5,
      title: "AI / Machine Learning",
      category: "Advanced",
      duration: "20 Weeks",
      level: "Advanced",
      modules: "48",
      projects: "10",
      description:
        "Build intelligent applications using Python, TensorFlow and modern AI tools.",
      color: "from-rose-500 to-pink-500",
      icon: "🤖",
      progress: 20,
      popular: false,
    },
  ];

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -380,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 380,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-[var(--bg-primary)] py-24" data-aos={animation.card}>
      <div className="max-w-screen mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-violet-500 mb-4">
            <span className="text-2xl">🛣️</span>
            <span className="font-semibold tracking-widest">
              LEARNING PATHS
            </span>
          </div>
          <h2 className="text-5xl font-bold text-[var(--text-primary)] mb-4">
            Expert-Curated Roadmaps
          </h2>
          <p className="text-xl text-[var(--text-primary)] opacity-70 max-w-2xl mx-auto">
            Structured learning paths designed by industry experts to help you
            become placement-ready faster
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { number: "12+", label: "Learning Paths" },
            { number: "500+", label: "Lessons" },
            { number: "100+", label: "Projects" },
            { number: "10,000+", label: "Students Learning" },
          ].map((stat, i) => (
            <div
              data-aos={animation.card}
              key={i}
              className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-3xl p-6 text-center hover:shadow-xl transition-all"
            >
              <div className="text-4xl font-bold text-[var(--primary-violet)]">
                {stat.number}
              </div>
              <div className="text-sm text-[var(--text-primary)] opacity-70 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Carousel */}
        <div className="relative group">
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-6 snap-x snap-mandatory scroll-smooth pb-8 -mx-1 scrollbar-hide"
            style={{ scrollbarWidth: "none" }}
          >
            {roadmaps.map((roadmap) => (
              <div
                data-aos={animation.card}
                key={roadmap.id}
                className="min-w-[340px] lg:min-w-[380px] bg-[var(--card-bg)] border border-[var(--border-color)] rounded-3xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 snap-start"
              >
                <div className={`h-2 bg-gradient-to-r ${roadmap.color}`} />

                <div className="p-8">
                  <div className="text-6xl mb-6">{roadmap.icon}</div>

                  {roadmap.popular && (
                    <div className="inline-block px-4 py-1 bg-gradient-to-r from-amber-400 to-yellow-500 text-white text-xs font-bold rounded-full mb-4">
                      🔥 MOST POPULAR
                    </div>
                  )}

                  <h3 className="text-2xl font-semibold mb-2 text-[var(--text-primary)]">
                    {roadmap.title}
                  </h3>
                  <div className="text-sm text-[var(--text-primary)] opacity-60 mb-6">
                    {roadmap.category} • {roadmap.duration}
                  </div>

                  <p className="text-[var(--text-primary)] opacity-75 mb-8 leading-relaxed">
                    {roadmap.description}
                  </p>

                  <div className="mb-8">
                    <div className="flex justify-between text-sm mb-2">
                      <span>Progress</span>
                      <span className="font-medium">{roadmap.progress}%</span>
                    </div>
                    <div className="h-2 bg-[var(--border-color)] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full transition-all"
                        style={{ width: `${roadmap.progress}%` }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 text-center mb-8">
                    <div>
                      <div className="text-lg font-semibold">
                        {roadmap.modules}
                      </div>
                      <div className="text-xs opacity-60">Modules</div>
                    </div>
                    <div>
                      <div className="text-lg font-semibold">
                        {roadmap.projects}
                      </div>
                      <div className="text-xs opacity-60">Projects</div>
                    </div>
                    <div>
                      <div className="text-lg font-semibold">200+</div>
                      <div className="text-xs opacity-60">Resources</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={scrollLeft}
            className="absolute -left-5 top-1/2 -translate-y-1/2  text-(--text-primary) bg-(--bg-primary)  shadow-xl border border-[var(--border-color)] w-12 h-12 rounded-2xl flex items-center justify-center hover:scale-110 transition z-10 hidden md:flex"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={scrollRight}
            className="absolute -right-5 top-1/2 -translate-y-1/2 shadow-xl border border-[var(--border-color)] text-(--text-primary) bg-(--bg-primary) w-12 h-12 rounded-2xl flex items-center justify-center hover:scale-110 transition z-10 hidden md:flex"
          >
            <FaArrowRight />
          </button>
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center" data-aos={animation.card}>
          <NavLink to={"/roadmaps"}>
            <button className="bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white px-12 py-5 rounded-2xl text-xl font-semibold hover:scale-105 transition">
              Explore All Roadmaps →
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default RoadmapPreview;
