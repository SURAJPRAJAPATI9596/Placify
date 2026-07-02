import React from "react";
import { Trophy, Target, TrendingUp, Award } from "lucide-react";

const Progress = () => {
  const skills = [
    { name: "DSA", value: 72, color: "#6C3AFA" },
    { name: "Frontend", value: 88, color: "#10B981" },
    { name: "Backend", value: 45, color: "#F59E0B" },
    { name: "AI / ML", value: 25, color: "#EF4444" },
  ];

  const problemStats = [
    { level: "Easy", count: 142, color: "#22c55e", percent: "65%" },
    { level: "Medium", count: 98, color: "#eab308", percent: "45%" },
    { level: "Hard", count: 35, color: "#ef4444", percent: "20%" },
  ];

  const weakAreas = [
    "Graphs",
    "Dynamic Programming",
    "System Design",
    "Binary Trees",
  ];

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-3">Your Progress</h1>
          <p className="text-xl opacity-75">
            Track your preparation and improve weak areas
          </p>
        </div>

        {/* Overall Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-3xl p-8 hover:shadow-xl transition-all">
            <div className="text-5xl font-bold text-[var(--primary-violet)]">
              245
            </div>
            <div className="text-lg mt-2">Problems Solved</div>
          </div>
          <div className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-3xl p-8 hover:shadow-xl transition-all">
            <div className="text-5xl font-bold text-emerald-500">68%</div>
            <div className="text-lg mt-2">Acceptance Rate</div>
          </div>
          <div className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-3xl p-8 hover:shadow-xl transition-all">
            <div className="text-5xl font-bold text-amber-500">17</div>
            <div className="text-lg mt-2">Day Streak</div>
          </div>
          <div className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-3xl p-8 hover:shadow-xl transition-all">
            <div className="text-5xl font-bold text-violet-600">#42</div>
            <div className="text-lg mt-2">Global Rank</div>
          </div>
        </div>

        {/* Skill Analytics */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold mb-8">Skill Analytics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {skills.map((skill) => (
              <div key={skill.name} className="flex flex-col items-center">
                <div
                  className="relative w-40 h-40 flex items-center justify-center"
                  style={{
                    background: `conic-gradient(${skill.color} ${skill.value}%, #e5e7eb ${skill.value}%)`,
                    borderRadius: "9999px",
                  }}
                >
                  <div className="w-28 h-28 bg-[var(--bg-primary)] rounded-full flex items-center justify-center border-8 border-[var(--card-bg)]">
                    <div className="text-center">
                      <div className="text-4xl font-bold">{skill.value}%</div>
                    </div>
                  </div>
                </div>
                <h3 className="mt-6 text-xl font-semibold">{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Problem Distribution */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {problemStats.map((stat, index) => (
            <div
              key={index}
              className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-3xl p-10 hover:shadow-xl transition-all"
            >
              <div className="flex items-center gap-4">
                <div
                  className="w-5 h-5 rounded-full"
                  style={{ backgroundColor: stat.color }}
                ></div>
                <h3 className="text-2xl font-semibold">{stat.level}</h3>
              </div>

              <div className="mt-8 text-7xl font-bold">{stat.count}</div>
              <div className="text-lg mt-1 opacity-70">Problems</div>

              <div className="mt-10 h-3 bg-[var(--border-color)] rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{ width: stat.percent, backgroundColor: stat.color }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Weak Areas & Recommendations */}
        <div className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-3xl p-10">
          <div className="flex items-center gap-3 mb-8">
            <Target className="text-orange-500" size={32} />
            <h2 className="text-3xl font-semibold">Focus Areas</h2>
          </div>

          <div className="flex flex-wrap gap-4">
            {weakAreas.map((area, i) => (
              <div
                key={i}
                className="px-6 py-4 bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 rounded-2xl text-red-700 dark:text-red-300 font-medium flex items-center gap-3"
              >
                <span>⚠️</span> {area}
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-[var(--border-color)]">
            <p className="text-lg font-medium text-[var(--text-primary)]">
              Recommended next steps to improve:
            </p>
            <ul className="mt-4 space-y-3 text-[var(--text-primary)] opacity-80">
              <li className="flex items-start gap-3">
                • Solve 10 Graph problems this week
              </li>
              <li className="flex items-start gap-3">
                • Complete DP patterns module
              </li>
              <li className="flex items-start gap-3">
                • Practice 3 System Design questions
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;
