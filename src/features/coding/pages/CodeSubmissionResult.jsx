import React, { useState } from "react";
import {
  FaCheckCircle,
  FaTimesCircle,
  FaClock,
  FaMemory,
  FaCode,
  FaRocket,
  FaBrain,
  FaChartLine,
  FaAward,
  FaBookOpen,
  FaLightbulb,
  FaCopy,
  FaExpand,
  FaCompress,
  FaArrowRight,
  FaStar,
  FaTrophy,
  FaGem,
  FaFire,
} from "react-icons/fa";
import { MdSpeed, MdAnalytics, MdTrendingUp, MdVerified } from "react-icons/md";
import {
  AiOutlineClockCircle,
  AiOutlineCheck,
  AiOutlineClose,
} from "react-icons/ai";

const CodeSubmissionResult = () => {
  const [isCodeExpanded, setIsCodeExpanded] = useState(false);
  const [copied, setCopied] = useState(false);

  // Placeholder data
  const submissionData = {
    status: "accepted", // 'accepted', 'wrong-answer', 'time-limit', 'memory-limit', 'compilation-error', 'runtime-error', 'presentation-error', 'partial-accepted'
    problemName: "Two Sum",
    difficulty: "Easy",
    topic: "Arrays & Hash Tables",
    language: "JavaScript",
    submissionTime: "2024-01-15 14:30:25",
    executionStatus: "Completed",
    submissionId: "SUB-2024-00142",
    executionTime: "48ms",
    memoryUsed: "42.1MB",
    testCasesPassed: 47,
    totalTestCases: 47,
    overallResult: "Passed",
    codeQuality: 92,
    readability: 88,
    optimization: 94,
    bestPractices: 90,
    namingConvention: 85,
    timeComplexity: "O(n)",
    spaceComplexity: "O(n)",
    aiReview:
      "Your solution demonstrates excellent understanding of hash table implementation. The approach of using a single pass with a hash map is optimal for this problem. The code is clean and well-structured. Consider adding input validation and edge case handling for even more robust solutions. Your variable naming is descriptive which enhances readability. The algorithm efficiently solves the problem with O(n) time complexity, which is the optimal solution for this problem. Great work on maintaining clean code practices!",
    learningRecommendations: [
      "Review hash table collision handling",
      "Practice sliding window problems",
      "Explore two-pointer techniques",
      "Study time-space tradeoffs",
      "Try similar problems on arrays",
    ],
    performanceInsights: {
      fasterThan: "94%",
      memoryBetterThan: "87%",
      acceptanceRate: "76.4%",
      difficulty: "Beginner-Friendly",
      xpEarned: 250,
      streakUpdated: "5 days",
    },
    badges: [
      "Accepted",
      "Fast Solution",
      "Memory Efficient",
      "100% Test Cases",
      "Clean Code",
    ],
    nextActions: [
      "Solve Similar Problem",
      "View Editorial",
      "Try Harder Problem",
      "Practice Topic",
      "Back to Problem",
      "View All Problems",
    ],
    timeline: {
      problemStarted: "2024-01-15 14:15:00",
      codeSubmitted: "2024-01-15 14:30:25",
      executionFinished: "2024-01-15 14:30:28",
    },
    submittedCode: `function twoSum(nums, target) {
  const map = new Map();
  
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    
    map.set(nums[i], i);
  }
  
  return [];
}`,
    testCases: [
      {
        id: 1,
        status: "passed",
        time: "2ms",
        memory: "1.2MB",
        expected: "[0,1]",
        output: "[0,1]",
      },
      {
        id: 2,
        status: "passed",
        time: "3ms",
        memory: "1.4MB",
        expected: "[1,2]",
        output: "[1,2]",
      },
      {
        id: 3,
        status: "passed",
        time: "2ms",
        memory: "1.1MB",
        expected: "[0,1]",
        output: "[0,1]",
      },
      {
        id: 4,
        status: "hidden-passed",
        time: "4ms",
        memory: "1.8MB",
        expected: "Hidden",
        output: "Passed",
      },
      {
        id: 5,
        status: "hidden-passed",
        time: "5ms",
        memory: "2.0MB",
        expected: "Hidden",
        output: "Passed",
      },
    ],
  };

  const getStatusIcon = () => {
    switch (submissionData.status) {
      case "accepted":
        return <FaCheckCircle className="text-green-500 text-5xl" />;
      case "wrong-answer":
        return <FaTimesCircle className="text-red-500 text-5xl" />;
      case "time-limit":
        return <FaClock className="text-yellow-500 text-5xl" />;
      case "memory-limit":
        return <FaMemory className="text-yellow-500 text-5xl" />;
      default:
        return <FaTimesCircle className="text-red-500 text-5xl" />;
    }
  };

  const getStatusColor = () => {
    switch (submissionData.status) {
      case "accepted":
        return "border-green-500 bg-green-50/10";
      case "wrong-answer":
        return "border-red-500 bg-red-50/10";
      default:
        return "border-yellow-500 bg-yellow-50/10";
    }
  };

  const getStatusText = () => {
    switch (submissionData.status) {
      case "accepted":
        return "✓ Accepted";
      case "wrong-answer":
        return "✕ Wrong Answer";
      case "time-limit":
        return "⏱ Time Limit Exceeded";
      case "memory-limit":
        return "💾 Memory Limit Exceeded";
      case "compilation-error":
        return "⚠ Compilation Error";
      case "runtime-error":
        return "❌ Runtime Error";
      case "presentation-error":
        return "📝 Presentation Error";
      case "partial-accepted":
        return "◐ Partial Accepted";
      default:
        return "✓ Accepted";
    }
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case "easy":
        return "text-green-500";
      case "medium":
        return "text-yellow-500";
      case "hard":
        return "text-red-500";
      default:
        return "text-gray-500";
    }
  };

  const getStatusBadge = (status) => {
    if (status === "passed" || status === "hidden-passed") {
      return (
        <span className="px-2 py-1 rounded-full text-xs bg-green-500/20 text-green-500 flex items-center gap-1">
          <AiOutlineCheck /> Passed
        </span>
      );
    }
    return (
      <span className="px-2 py-1 rounded-full text-xs bg-red-500/20 text-red-500 flex items-center gap-1">
        <AiOutlineClose /> Failed
      </span>
    );
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(submissionData.submittedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getTestStatusDisplay = (testCase) => {
    if (testCase.status === "hidden-passed") {
      return { displayExpected: "Hidden", displayOutput: "Passed" };
    }
    return {
      displayExpected: testCase.expected,
      displayOutput: testCase.output,
    };
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] p-4 md:p-8 mt-10ck">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Top Result Banner */}
        <div
          className={`border-2 ${getStatusColor()} rounded-2xl p-6 bg-[var(--card-bg)] shadow-xl transition-all hover:shadow-2xl`}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              {getStatusIcon()}
              <div>
                <h1 className="text-3xl md:text-4xl font-bold">
                  {getStatusText()}
                </h1>
                <p className="text-sm opacity-70 mt-1">
                  Submission #{submissionData.submissionId}
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="px-4 py-2 rounded-full bg-[var(--border-color)]/20 text-sm font-medium">
                {submissionData.language}
              </span>
              <span
                className={`px-4 py-2 rounded-full bg-[var(--border-color)]/20 text-sm font-medium ${getDifficultyColor(submissionData.difficulty)}`}
              >
                {submissionData.difficulty}
              </span>
            </div>
          </div>
        </div>

        {/* Problem Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-[var(--card-bg)] rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow">
            <p className="text-sm opacity-60">Problem</p>
            <p className="font-semibold">{submissionData.problemName}</p>
          </div>
          <div className="bg-[var(--card-bg)] rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow">
            <p className="text-sm opacity-60">Topic</p>
            <p className="font-semibold">{submissionData.topic}</p>
          </div>
          <div className="bg-[var(--card-bg)] rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow">
            <p className="text-sm opacity-60">Submission Time</p>
            <p className="font-semibold">{submissionData.submissionTime}</p>
          </div>
          <div className="bg-[var(--card-bg)] rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow">
            <p className="text-sm opacity-60">Execution Status</p>
            <p className="font-semibold text-green-500">
              {submissionData.executionStatus}
            </p>
          </div>
        </div>

        {/* Execution Summary */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <div className="bg-[var(--card-bg)] rounded-xl p-4 shadow-lg text-center hover:shadow-xl transition-shadow">
            <FaClock className="text-blue-500 text-2xl mx-auto mb-2" />
            <p className="text-sm opacity-60">Execution Time</p>
            <p className="font-bold">{submissionData.executionTime}</p>
          </div>
          <div className="bg-[var(--card-bg)] rounded-xl p-4 shadow-lg text-center hover:shadow-xl transition-shadow">
            <FaMemory className="text-purple-500 text-2xl mx-auto mb-2" />
            <p className="text-sm opacity-60">Memory Used</p>
            <p className="font-bold">{submissionData.memoryUsed}</p>
          </div>
          <div className="bg-[var(--card-bg)] rounded-xl p-4 shadow-lg text-center hover:shadow-xl transition-shadow">
            <FaCheckCircle className="text-green-500 text-2xl mx-auto mb-2" />
            <p className="text-sm opacity-60">Test Cases Passed</p>
            <p className="font-bold">{submissionData.testCasesPassed}</p>
          </div>
          <div className="bg-[var(--card-bg)] rounded-xl p-4 shadow-lg text-center hover:shadow-xl transition-shadow">
            <FaRocket className="text-orange-500 text-2xl mx-auto mb-2" />
            <p className="text-sm opacity-60">Total Test Cases</p>
            <p className="font-bold">{submissionData.totalTestCases}</p>
          </div>
          <div className="bg-[var(--card-bg)] rounded-xl p-4 shadow-lg text-center hover:shadow-xl transition-shadow">
            <MdVerified className="text-teal-500 text-2xl mx-auto mb-2" />
            <p className="text-sm opacity-60">Overall Result</p>
            <p className="font-bold text-green-500">
              {submissionData.overallResult}
            </p>
          </div>
          <div className="bg-[var(--card-bg)] rounded-xl p-4 shadow-lg text-center hover:shadow-xl transition-shadow">
            <FaCode className="text-pink-500 text-2xl mx-auto mb-2" />
            <p className="text-sm opacity-60">Language</p>
            <p className="font-bold">{submissionData.language}</p>
          </div>
        </div>

        {/* Visual Progress & Test Cases */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Circular Progress */}
          <div className="bg-[var(--card-bg)] rounded-xl p-6 shadow-lg">
            <h3 className="font-bold mb-4">Progress</h3>
            <div className="flex items-center justify-center">
              <div className="relative">
                <svg className="w-48 h-48 transform -rotate-90">
                  <circle
                    className="opacity-20"
                    stroke="currentColor"
                    strokeWidth="12"
                    fill="none"
                    cx="96"
                    cy="96"
                    r="84"
                  />
                  <circle
                    className="text-green-500 transition-all duration-1000"
                    stroke="currentColor"
                    strokeWidth="12"
                    strokeLinecap="round"
                    fill="none"
                    cx="96"
                    cy="96"
                    r="84"
                    strokeDasharray="527.52"
                    strokeDashoffset={
                      527.52 *
                      (1 -
                        submissionData.testCasesPassed /
                          submissionData.totalTestCases)
                    }
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-4xl font-bold">
                      {Math.round(
                        (submissionData.testCasesPassed /
                          submissionData.totalTestCases) *
                          100,
                      )}
                      %
                    </p>
                    <p className="text-sm opacity-60">Passed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Test Case Results */}
          <div className="bg-[var(--card-bg)] rounded-xl p-6 shadow-lg">
            <h3 className="font-bold mb-4">Test Cases</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="border-b border-[var(--border-color)]">
                  <tr>
                    <th className="text-left py-2 px-3">Test Case</th>
                    <th className="text-left py-2 px-3">Status</th>
                    <th className="text-left py-2 px-3">Time</th>
                    <th className="text-left py-2 px-3">Memory</th>
                    <th className="text-left py-2 px-3">Expected</th>
                    <th className="text-left py-2 px-3">Your Output</th>
                  </tr>
                </thead>
                <tbody>
                  {submissionData.testCases.map((testCase) => {
                    const { displayExpected, displayOutput } =
                      getTestStatusDisplay(testCase);
                    return (
                      <tr
                        key={testCase.id}
                        className="border-b border-[var(--border-color)]/30 hover:bg-[var(--border-color)]/10 transition-colors"
                      >
                        <td className="py-2 px-3 font-medium">
                          #{testCase.id}
                        </td>
                        <td className="py-2 px-3">
                          {getStatusBadge(testCase.status)}
                        </td>
                        <td className="py-2 px-3">{testCase.time}</td>
                        <td className="py-2 px-3">{testCase.memory}</td>
                        <td className="py-2 px-3 font-mono text-xs">
                          {displayExpected}
                        </td>
                        <td className="py-2 px-3 font-mono text-xs">
                          {displayOutput}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Code Quality */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div className="bg-[var(--card-bg)] rounded-xl p-4 shadow-lg text-center hover:shadow-xl transition-shadow">
            <p className="text-sm opacity-60">Code Quality</p>
            <p className="text-2xl font-bold text-blue-500">
              {submissionData.codeQuality}%
            </p>
          </div>
          <div className="bg-[var(--card-bg)] rounded-xl p-4 shadow-lg text-center hover:shadow-xl transition-shadow">
            <p className="text-sm opacity-60">Readability</p>
            <p className="text-2xl font-bold text-green-500">
              {submissionData.readability}%
            </p>
          </div>
          <div className="bg-[var(--card-bg)] rounded-xl p-4 shadow-lg text-center hover:shadow-xl transition-shadow">
            <p className="text-sm opacity-60">Optimization</p>
            <p className="text-2xl font-bold text-orange-500">
              {submissionData.optimization}%
            </p>
          </div>
          <div className="bg-[var(--card-bg)] rounded-xl p-4 shadow-lg text-center hover:shadow-xl transition-shadow">
            <p className="text-sm opacity-60">Best Practices</p>
            <p className="text-2xl font-bold text-purple-500">
              {submissionData.bestPractices}%
            </p>
          </div>
          <div className="bg-[var(--card-bg)] rounded-xl p-4 shadow-lg text-center hover:shadow-xl transition-shadow">
            <p className="text-sm opacity-60">Naming</p>
            <p className="text-2xl font-bold text-pink-500">
              {submissionData.namingConvention}%
            </p>
          </div>
        </div>

        {/* Time & Space Complexity */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[var(--card-bg)] rounded-xl p-6 shadow-lg">
            <div className="flex items-center gap-2 mb-2">
              <FaClock className="text-blue-500 text-xl" />
              <h3 className="font-bold">Time Complexity</h3>
            </div>
            <p className="text-3xl font-mono text-blue-500">
              {submissionData.timeComplexity}
            </p>
            <p className="text-sm opacity-60 mt-2">
              Estimated based on your solution
            </p>
          </div>
          <div className="bg-[var(--card-bg)] rounded-xl p-6 shadow-lg">
            <div className="flex items-center gap-2 mb-2">
              <FaMemory className="text-purple-500 text-xl" />
              <h3 className="font-bold">Space Complexity</h3>
            </div>
            <p className="text-3xl font-mono text-purple-500">
              {submissionData.spaceComplexity}
            </p>
            <p className="text-sm opacity-60 mt-2">Memory usage analysis</p>
          </div>
        </div>

        {/* AI Review */}
        <div className="bg-gradient-to-br from-[var(--card-bg)] to-[var(--border-color)]/10 rounded-2xl p-8 shadow-xl border border-[var(--border-color)]">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-full bg-blue-500/20">
              <FaBrain className="text-blue-500 text-3xl" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-2">Placify AI Review</h3>
              <p className="text-lg leading-relaxed">
                {submissionData.aiReview}
              </p>
            </div>
          </div>
        </div>

        {/* Learning Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[var(--card-bg)] rounded-xl p-6 shadow-lg">
            <div className="flex items-center gap-2 mb-4">
              <FaBookOpen className="text-green-500 text-xl" />
              <h3 className="font-bold">What to Learn Next</h3>
            </div>
            <ul className="space-y-2">
              {submissionData.learningRecommendations.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 text-sm hover:translate-x-2 transition-transform"
                >
                  <FaArrowRight className="text-blue-500 text-xs" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[var(--card-bg)] rounded-xl p-6 shadow-lg">
            <div className="flex items-center gap-2 mb-4">
              <FaLightbulb className="text-yellow-500 text-xl" />
              <h3 className="font-bold">Recommendations</h3>
            </div>
            <div className="space-y-2">
              <p className="text-sm">
                ✨ Practice similar problems to strengthen your understanding
              </p>
              <p className="text-sm">
                📚 Review hash table implementations in different languages
              </p>
              <p className="text-sm">
                🎯 Try solving the problem with different approaches
              </p>
            </div>
          </div>
        </div>

        {/* Performance Insights */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          <div className="bg-[var(--card-bg)] rounded-xl p-4 shadow-lg text-center">
            <p className="text-sm opacity-60">Faster than</p>
            <p className="text-2xl font-bold text-green-500">
              {submissionData.performanceInsights.fasterThan}
            </p>
          </div>
          <div className="bg-[var(--card-bg)] rounded-xl p-4 shadow-lg text-center">
            <p className="text-sm opacity-60">Memory better than</p>
            <p className="text-2xl font-bold text-blue-500">
              {submissionData.performanceInsights.memoryBetterThan}
            </p>
          </div>
          <div className="bg-[var(--card-bg)] rounded-xl p-4 shadow-lg text-center">
            <p className="text-sm opacity-60">Acceptance Rate</p>
            <p className="text-2xl font-bold text-purple-500">
              {submissionData.performanceInsights.acceptanceRate}
            </p>
          </div>
          <div className="bg-[var(--card-bg)] rounded-xl p-4 shadow-lg text-center">
            <p className="text-sm opacity-60">Difficulty</p>
            <p className="text-2xl font-bold text-orange-500">
              {submissionData.performanceInsights.difficulty}
            </p>
          </div>
          <div className="bg-[var(--card-bg)] rounded-xl p-4 shadow-lg text-center">
            <p className="text-sm opacity-60">XP Earned</p>
            <p className="text-2xl font-bold text-yellow-500">
              +{submissionData.performanceInsights.xpEarned}
            </p>
          </div>
          <div className="bg-[var(--card-bg)] rounded-xl p-4 shadow-lg text-center">
            <p className="text-sm opacity-60">Streak</p>
            <p className="text-2xl font-bold text-red-500">
              {submissionData.performanceInsights.streakUpdated}
            </p>
          </div>
        </div>

        {/* Badges */}
        <div className="bg-[var(--card-bg)] rounded-xl p-6 shadow-lg">
          <h3 className="font-bold mb-4">Achievements</h3>
          <div className="flex flex-wrap gap-3">
            {submissionData.badges.map((badge, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 text-sm font-medium flex items-center gap-2"
              >
                <FaAward className="text-yellow-500" />
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* Next Actions */}
        <div className="flex flex-wrap gap-3">
          {submissionData.nextActions.map((action, index) => (
            <button
              key={index}
              className="px-6 py-2 rounded-full bg-[var(--card-bg)] border border-[var(--border-color)] hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300 font-medium hover:scale-105"
            >
              {action}
            </button>
          ))}
        </div>

        {/* Submitted Code */}
        <div className="bg-[var(--card-bg)] rounded-xl shadow-lg overflow-hidden">
          <div className="flex items-center justify-between p-4 border-b border-[var(--border-color)]">
            <div className="flex items-center gap-2">
              <FaCode className="text-blue-500" />
              <h3 className="font-bold">Submitted Code</h3>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopy}
                className="p-2 rounded-lg hover:bg-[var(--border-color)]/20 transition-all duration-300"
                title="Copy code"
              >
                {copied ? (
                  <AiOutlineCheck className="text-green-500" />
                ) : (
                  <FaCopy />
                )}
              </button>
              <button
                onClick={() => setIsCodeExpanded(!isCodeExpanded)}
                className="p-2 rounded-lg hover:bg-[var(--border-color)]/20 transition-all duration-300"
              >
                {isCodeExpanded ? <FaCompress /> : <FaExpand />}
              </button>
            </div>
          </div>
          <div
            className={`${isCodeExpanded ? "max-h-[600px]" : "max-h-[300px]"} overflow-y-auto transition-all duration-500`}
          >
            <pre className="p-4 font-mono text-sm bg-[var(--bg-primary)]/50 overflow-x-auto">
              <code>{submissionData.submittedCode}</code>
            </pre>
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-[var(--card-bg)] rounded-xl p-6 shadow-lg">
          <h3 className="font-bold mb-4">Timeline</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              <p className="text-sm">
                Problem Started:{" "}
                <span className="font-mono">
                  {submissionData.timeline.problemStarted}
                </span>
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
              <p className="text-sm">
                Code Submitted:{" "}
                <span className="font-mono">
                  {submissionData.timeline.codeSubmitted}
                </span>
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <p className="text-sm">
                Execution Finished:{" "}
                <span className="font-mono">
                  {submissionData.timeline.executionFinished}
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Motivational Section */}
        <div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-xl p-6 border border-[var(--border-color)] text-center">
          <p className="text-lg font-medium">
            "Excellent work! Your solution passed all test cases. Keep
            practicing consistently to improve your speed and problem-solving
            skills."
          </p>
          <div className="flex justify-center gap-6 mt-3 text-2xl">
            <FaStar className="text-yellow-500" />
            <FaTrophy className="text-orange-500" />
            <FaGem className="text-blue-500" />
            <FaFire className="text-red-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeSubmissionResult;
