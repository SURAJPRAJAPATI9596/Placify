import React from "react";
import { FaStar, FaPlay, FaGraduationCap } from "react-icons/fa";
import animation from "../../../styles/CardAnimation";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      college: "NIT Trichy",
      company: "Google",
      package: "₹45 LPA",
      quote:
        "Placify completely transformed my placement preparation. The structured roadmaps, AI mock interviews, and resume builder helped me go from zero confidence to multiple offers. I finally landed my dream job at Google!",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      problemsSolved: "620",
      atsScore: "96",
      roadmaps: "7",
      badges: ["Frontend", "DSA", "System Design"],
    },
    {
      id: 2,
      name: "Arjun Mehta",
      college: "VIT Vellore",
      company: "Microsoft",
      package: "₹38 LPA",
      quote:
        "The coding practice section with 500+ problems and the AI interview simulator were game changers. Placify gave me the exact preparation I needed. Highly recommended for every final year student.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      problemsSolved: "480",
      atsScore: "92",
      roadmaps: "5",
      badges: ["Backend", "DSA", "AI Interview"],
    },
    {
      id: 3,
      name: "Sneha Reddy",
      college: "IIT Delhi",
      company: "Amazon",
      package: "₹32 LPA",
      quote:
        "From resume building to mock interviews — everything on Placify is top-notch. The platform helped me improve my resume ATS score from 45 to 94. I got placed at Amazon in my first attempt!",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      problemsSolved: "390",
      atsScore: "94",
      roadmaps: "6",
      badges: ["Full Stack", "Resume Builder"],
    },
  ];

  return (
    <div className="bg-[var(--bg-primary)] py-20" data-aos={animation.card}>
      <div className="max-scree mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-amber-500 mb-4">
            <FaStar />{" "}
            <span className="font-semibold">Student Success Stories</span>
          </div>
          <h2 className="text-5xl font-bold text-[var(--text-primary)] mb-4">
            Real Stories. Real Results.
          </h2>
          <p className="text-xl text-[var(--text-primary)] opacity-70 max-w-2xl mx-auto">
            See how students transformed their careers with Placify
          </p>
        </div>

        {/* Trust Stats */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {[
            { number: "10,000+", label: "Active Students" },
            { number: "95%", label: "Placement Success" },
            { number: "250+", label: "Partner Companies" },
            { number: "4.9/5", label: "Average Rating" },
          ].map((stat, i) => (
            <div
              data-aos={animation.card}
              key={i}
              className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-3xl p-8 text-center hover:shadow-xl transition-all"
            >
              <div className="text-5xl font-bold text-[var(--primary-violet)] mb-2">
                {stat.number}
              </div>
              <div className="text-[var(--text-primary)] opacity-70">
                {stat.label}
              </div>
            </div>
          ))}
        </div> */}

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {testimonials.map((student) => (
            <div
              data-aos={animation.card}
              key={student.id}
              className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-3xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={student.image}
                  alt={student.name}
                  className="w-16 h-16 rounded-2xl object-cover ring-2 ring-violet-200 group-hover:ring-violet-400 transition"
                />
                <div>
                  <h4 className="font-semibold text-xl">{student.name}</h4>
                  <p className="text-sm text-[var(--text-primary)] opacity-70">
                    {student.college}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-amber-400" />
                ))}
              </div>

              <blockquote className="text-[var(--text-primary)] leading-relaxed mb-8">
                "{student.quote}"
              </blockquote>

              <div className="flex items-center gap-2 mb-8">
                <div className="px-4 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full">
                  {student.company}
                </div>
                <div className="text-sm font-semibold">{student.package}</div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="opacity-60">Problems Solved</div>
                  <div className="font-semibold">{student.problemsSolved}</div>
                </div>
                <div>
                  <div className="opacity-60">ATS Score</div>
                  <div className="font-semibold text-emerald-600">
                    {student.atsScore}
                  </div>
                </div>
              </div>

              <div className="flex gap-2 mt-6">
                {student.badges.map((badge, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 bg-violet-100 text-violet-700 rounded-full"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Featured Success Story */}
        {/* <div className="bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white rounded-3xl p-12 lg:p-16 mb-20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 px-5 py-2 rounded-full mb-8">
              <FaGraduationCap /> Featured Success Story
            </div>

            <h3 className="text-4xl font-bold leading-tight mb-8">
              "From zero coding knowledge to Google in 8 months"
            </h3>

            <div className="flex justify-center mb-10">
              <img
                src="https://randomuser.me/api/portraits/men/86.jpg"
                alt="Rahul Verma"
                className="w-28 h-28 rounded-3xl object-cover ring-8 ring-white/30"
              />
            </div>

            <p className="text-xl opacity-90 mb-8">Rahul Verma — IIT Kanpur</p>
            <p className="text-3xl font-semibold">Placed at Google • ₹45 LPA</p>
          </div>
        </div> */}

        {/* Bottom CTA */}
        {/* <div className="text-center">
          <h3 className="text-4xl font-bold mb-4">
            Your Success Story Starts Here
          </h3>
          <p className="text-xl text-[var(--text-primary)] opacity-70 mb-10">
            Join thousands of students who got placed using Placify
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[var(--primary-violet)] hover:bg-[var(--secondary-violet)] text-white px-10 py-4 rounded-2xl font-semibold text-lg transition">
              Get Started Free
            </button>
            <button className="border border-[var(--border-color)] hover:bg-[var(--card-bg)] px-10 py-4 rounded-2xl font-semibold text-lg transition">
              Watch More Stories
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Testimonials;
