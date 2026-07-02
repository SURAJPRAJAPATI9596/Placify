import React, { useState } from "react";
import {
  FaFire,
  FaBullseye,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

const CodingDashboard = () => {
  const [goals, setGoals] = useState([
    { id: 1, text: "Solve 2 DSA Problems", completed: true },
    { id: 2, text: "Complete 1 Roadmap Topic", completed: false },
    { id: 3, text: "Read 1 Resource", completed: false },
    { id: 4, text: "Practice 30 Minutes", completed: true },
  ]);

  const toggleGoal = (id) => {
    setGoals(
      goals.map((goal) =>
        goal.id === id ? { ...goal, completed: !goal.completed } : goal,
      ),
    );
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] pb-20 min-w-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-20 lg:pt-24">
        {/* HERO SECTION */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-12 lg:mb-16 gap-6 lg:gap-8">
          <div className="flex items-center gap-4 lg:gap-6">
            <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-3xl flex items-center justify-center text-4xl shadow-xl flex-shrink-0">
              👋
            </div>
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold">
                Good morning, Suraj
              </h1>
              <p className="text-xl lg:text-2xl text-[var(--text-primary)] opacity-70 mt-1">
                Let's keep the streak alive 🔥
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 lg:gap-8 bg-[var(--card-bg)] border border-[var(--border-color)] rounded-3xl px-6 lg:px-8 py-5 lg:py-6 w-full lg:w-auto">
            <div className="text-center lg:text-left">
              <div className="text-xs lg:text-sm opacity-70">Level</div>
              <div className="text-3xl lg:text-4xl font-bold text-[var(--primary-violet)]">
                14
              </div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-xs lg:text-sm opacity-70">XP</div>
              <div className="text-3xl lg:text-4xl font-bold">3,420</div>
            </div>
            <div className="flex items-center gap-2 bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 px-4 lg:px-5 py-3 rounded-2xl">
              <FaFire className="text-orange-500" />
              <span className="font-bold text-sm lg:text-base">
                18 Day Streak
              </span>
            </div>
          </div>
        </div>

        {/* CONTINUE LEARNING */}
        <div className="bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white rounded-3xl p-6 lg:p-10 mb-12">
          <div className="max-w-lg">
            <div className="uppercase tracking-widest text-xs lg:text-sm opacity-75 mb-2">
              CURRENT FOCUS
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-2">
              Frontend Development
            </h2>
            <p className="text-lg lg:text-xl opacity-90">
              React Hooks Deep Dive
            </p>

            <div className="mt-8 flex items-center gap-4">
              <div className="flex-1 h-2.5 bg-white/30 rounded-full overflow-hidden">
                <div className="h-full w-[72%] bg-white rounded-full"></div>
              </div>
              <span className="font-mono font-bold text-sm lg:text-base">
                72%
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 lg:gap-6 mt-8">
              <button className="w-full sm:w-auto bg-white text-violet-700 px-8 lg:px-10 py-4 rounded-2xl font-semibold flex items-center justify-center gap-3 hover:scale-105 transition">
                Continue Learning <FaArrowRight />
              </button>
              <div className="text-sm opacity-75 text-center sm:text-left">
                Last studied • Yesterday
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
          {/* TODAY'S GOALS */}
          <div className="lg:col-span-5 bg-[var(--card-bg)] border border-[var(--border-color)] rounded-3xl p-6 lg:p-8">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-semibold">Today's Goals</h3>
              <span className="text-sm opacity-60">4 of 4</span>
            </div>

            <div className="space-y-4">
              {goals.map((goal) => (
                <div
                  key={goal.id}
                  onClick={() => toggleGoal(goal.id)}
                  className="flex items-center gap-4 bg-[var(--bg-primary)] p-5 rounded-2xl border border-[var(--border-color)] hover:border-violet-400 cursor-pointer transition group"
                >
                  <div
                    className={`w-7 h-7 rounded-xl flex items-center justify-center border-2 transition ${goal.completed ? "bg-emerald-500 border-emerald-500" : "border-gray-300 group-hover:border-violet-400"}`}
                  >
                    {goal.completed && <FaCheckCircle className="text-white" />}
                  </div>
                  <span
                    className={`flex-1 text-lg ${goal.completed ? "line-through opacity-60" : ""}`}
                  >
                    {goal.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* DAILY CHALLENGE */}
          <div className="lg:col-span-7 bg-[var(--card-bg)] border border-[var(--border-color)] rounded-3xl p-6 lg:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
              <h3 className="text-2xl font-semibold flex items-center gap-3">
                <FaBullseye className="text-orange-500" /> Daily Challenge
              </h3>
              <div className="px-4 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium w-fit">
                Medium
              </div>
            </div>

            <div className="bg-[var(--bg-primary)] rounded-3xl p-6 lg:p-8">
              <h4 className="text-2xl lg:text-3xl font-bold mb-2">
                Implement LRU Cache
              </h4>
              <p className="text-base lg:text-lg opacity-70">
                Using HashMap + Doubly Linked List
              </p>

              <div className="flex flex-col sm:flex-row gap-8 mt-8">
                <div>
                  <div className="text-xs opacity-60">EST. TIME</div>
                  <div className="text-2xl font-semibold">25 mins</div>
                </div>
                <div>
                  <div className="text-xs opacity-60">REWARD</div>
                  <div className="text-2xl font-semibold text-emerald-500">
                    +50 XP
                  </div>
                </div>
              </div>

              <button className="mt-8 w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-5 rounded-2xl font-semibold text-lg hover:scale-[1.02] transition">
                Start Challenge Now →
              </button>
            </div>
          </div>

          {/* AI RECOMMENDATION */}
          <div className="lg:col-span-12 bg-gradient-to-br from-zinc-900 to-black text-white rounded-3xl p-8 lg:p-10">
            <div className="flex flex-col lg:flex-row items-start gap-8">
              <div className="flex-1">
                <div className="uppercase text-xs tracking-widest opacity-60 mb-2">
                  PLACIFY AI INSIGHT
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold leading-tight">
                  You've been strong with Arrays.
                  <br className="hidden lg:block" />
                  Time to master Graphs.
                </h3>
                <p className="mt-6 text-base lg:text-lg opacity-80">
                  Based on your recent activity, we recommend focusing on Graph
                  algorithms next.
                </p>

                <button className="mt-8 w-full lg:w-auto px-10 py-4 bg-white text-black rounded-2xl font-semibold hover:bg-gray-100 transition">
                  Start Graph Roadmap →
                </button>
              </div>
              <div className="hidden lg:block text-[160px] opacity-10">📊</div>
            </div>
          </div>

          {/* RECENT ACTIVITY + QUICK ACTIONS */}
          <div className="lg:col-span-7 bg-[var(--card-bg)] border border-[var(--border-color)] rounded-3xl p-6 lg:p-8">
            <h3 className="text-2xl font-semibold mb-6">Recent Activity</h3>
            <div className="space-y-5 lg:space-y-6">
              {[
                "Solved Two Sum (Easy)",
                "Completed Arrays Module",
                "Earned 18 Day Streak 🔥",
                "Bookmarked 'React Performance' resource",
              ].map((activity, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 text-base lg:text-lg"
                >
                  <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
                  <span>{activity}</span>
                </div>
              ))}
            </div>
          </div>

          {/* QUICK ACTIONS */}
          <div className="lg:col-span-5 bg-[var(--card-bg)] border border-[var(--border-color)] rounded-3xl p-6 lg:p-8">
            <h3 className="text-2xl font-semibold mb-8">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                "Solve Problems",
                "Open Resources",
                "AI Interview",
                "Resume Builder",
                "Track Progress",
                "Find Jobs",
              ].map((action, i) => (
                <button
                  key={i}
                  className="bg-[var(--bg-primary)] hover:bg-violet-50 border border-[var(--border-color)] hover:border-violet-300 py-5 lg:py-6 rounded-3xl text-left px-5 lg:px-6 transition-all hover:scale-105 text-sm lg:text-base"
                >
                  {action}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* WEEKLY TARGET + MOTIVATION */}
        <div className="mt-12 lg:mt-16 grid lg:grid-cols-2 gap-6 lg:gap-8">
          <div className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-3xl p-6 lg:p-10">
            <h3 className="text-2xl font-semibold mb-6">Weekly Target</h3>
            <div className="space-y-6">
              {["15 Problems", "3 Topics", "1 Mini Project"].map(
                (target, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <span className="text-base lg:text-lg">{target}</span>
                    <div className="h-2.5 w-40 lg:w-48 bg-[var(--border-color)] rounded-full">
                      <div className="h-2.5 w-3/4 bg-violet-500 rounded-full"></div>
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-500 to-orange-500 text-white rounded-3xl p-6 lg:p-10 flex flex-col justify-center">
            <div className="text-5xl lg:text-6xl mb-6">💡</div>
            <p className="text-xl lg:text-2xl font-medium">
              "The expert in anything was once a beginner."
            </p>
            <p className="mt-4 opacity-80 text-sm lg:text-base">- Unknown</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodingDashboard;
