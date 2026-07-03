import React, { useState, useMemo, useCallback } from "react";
import {
  FiEye,
  FiEyeOff,
  FiCheck,
  FiX,
  FiArrowRight,
  FiLock,
  FiShield,
  FiMapPin,
  FiCode,
  FiFileText,
  FiUsers,
} from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { NavLink } from "react-router-dom";

/**
 * Placify — Register
 * Signature element: a vertical "placement path" — five connected waypoint
 * nodes (Roadmap → Practice → Resume → Interview → Offer) that light up
 * one after another. It's the one idea this page is built around: the
 * platform's whole pitch is "we get you from student to hired," so the
 * hero literally draws that path instead of using a stock illustration.
 */

const BRAND_FROM = "#6C5CE7"; // indigo-violet
const BRAND_TO = "#00C2A8"; // teal
const BRAND_ACCENT = "#8B7CF6";

const PATH_STEPS = [
  { label: "Roadmap", icon: FiMapPin },
  { label: "Practice", icon: FiCode },
  { label: "Resume", icon: FiFileText },
  { label: "Interview", icon: FiUsers },
  { label: "Offer", icon: FiCheck },
];

const FEATURES = [
  { title: "Personalized Learning", desc: "Roadmaps tuned to your goals" },
  { title: "Coding Practice", desc: "1M+ problems, real interview style" },
  { title: "Resume + ATS", desc: "Beat the bots, land the screen" },
  { title: "AI Interviews", desc: "Practice with a mock panel" },
];

const STATS = [
  { value: "50,000+", label: "Students" },
  { value: "250+", label: "Hiring Companies" },
  { value: "95%", label: "Placement Success" },
  { value: "1M+", label: "Problems Solved" },
];

function getPasswordChecks(password) {
  return {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    number: /[0-9]/.test(password),
    special: /[^A-Za-z0-9\s]/.test(password),
    noSpaces: password.length > 0 && !/\s/.test(password),
  };
}

function getPasswordStrength(checks, password) {
  if (!password) return { score: 0, label: "", color: "", width: "0%" };
  const passed = Object.values(checks).filter(Boolean).length;
  const total = Object.keys(checks).length;
  const ratio = passed / total;

  if (ratio <= 0.34) {
    return { score: 1, label: "Very Weak", color: "#EF4444", width: "20%" };
  }
  if (ratio <= 0.5) {
    return { score: 2, label: "Weak", color: "#F97316", width: "40%" };
  }
  if (ratio <= 0.67) {
    return { score: 3, label: "Good", color: "#EAB308", width: "60%" };
  }
  if (ratio < 1) {
    return { score: 4, label: "Strong", color: "#22C55E", width: "80%" };
  }
  return { score: 5, label: "Excellent", color: "#10B981", width: "100%" };
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Register() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [agreePrivacy, setAgreePrivacy] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [touched, setTouched] = useState({
    fullName: false,
    email: false,
    password: false,
    confirmPassword: false,
  });

  const markTouched = useCallback((field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  }, []);

  const passwordChecks = useMemo(() => getPasswordChecks(password), [password]);
  const strength = useMemo(
    () => getPasswordStrength(passwordChecks, password),
    [passwordChecks, password],
  );

  const isNameValid = fullName.trim().length > 0;
  const isEmailValid = EMAIL_REGEX.test(email);
  const isPasswordValid = Object.values(passwordChecks).every(Boolean);
  const doPasswordsMatch =
    confirmPassword.length > 0 && password === confirmPassword;

  const isFormValid =
    isNameValid &&
    isEmailValid &&
    isPasswordValid &&
    doPasswordsMatch &&
    agreeTerms &&
    agreePrivacy;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid || isSubmitting) return;
    setIsSubmitting(true);
    // Placeholder submit handler — wire up to real API later.
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1600);
  };

  const handleSocialLogin = (provider) => {
    // Placeholder social auth handler.
    console.log(`Continue with ${provider} — connect real OAuth here.`);
  };

  const requirementRows = [
    { key: "length", label: "At least 8 characters" },
    { key: "uppercase", label: "One uppercase letter" },
    { key: "lowercase", label: "One lowercase letter" },
    { key: "number", label: "One number" },
    { key: "special", label: "One special character" },
    { key: "noSpaces", label: "No spaces" },
  ];

  return (
    <div className="min-h-screen w-full bg-[var(--bg-primary)] text-[var(--text-primary)] flex items-stretch pt-10 pb-10">
      <style>{`
        @keyframes placify-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes placify-card-in {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes placify-drift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes placify-pulse-dot {
          0%, 100% { box-shadow: 0 0 0 0 rgba(108,92,231,0.45); }
          50% { box-shadow: 0 0 0 8px rgba(108,92,231,0); }
        }
        @keyframes placify-check-in {
          from { opacity: 0; transform: scale(0.6); }
          to { opacity: 1; transform: scale(1); }
        }
        .placify-card-enter {
          animation: placify-card-in 0.55s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        .placify-float {
          animation: placify-float 6s ease-in-out infinite;
        }
        .placify-gradient-bg {
          background-size: 200% 200%;
          animation: placify-drift 14s ease infinite;
        }
        .placify-req-enter {
          animation: placify-check-in 0.25s cubic-bezier(0.34, 1.56, 0.64, 1) both;
        }
        .placify-input {
          transition: border-color 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;
        }
        .placify-input:focus {
          box-shadow: 0 0 0 4px rgba(108, 92, 231, 0.15);
        }
        .placify-btn-primary {
          transition: transform 0.15s ease, box-shadow 0.2s ease, filter 0.2s ease;
        }
        .placify-btn-primary:hover:not(:disabled) {
          transform: translateY(-1px);
          filter: brightness(1.05);
        }
        .placify-btn-primary:active:not(:disabled) {
          transform: translateY(0px);
        }
        .placify-social-btn {
          transition: border-color 0.2s ease, background-color 0.2s ease, transform 0.15s ease;
        }
        .placify-social-btn:hover {
          transform: translateY(-1px);
        }
        @media (prefers-reduced-motion: reduce) {
          .placify-float, .placify-gradient-bg, .placify-card-enter, .placify-req-enter {
            animation: none !important;
          }
        }
      `}</style>

      {/* ================= LEFT SIDE (desktop only) ================= */}
      <div className="hidden lg:flex lg:w-1/4 relative overflow-hidden border-r border-[var(--border-color)]">
        <div
          className="absolute inset-0 opacity-[0.08] placify-gradient-bg"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 20%, ${BRAND_FROM}, transparent 45%), radial-gradient(circle at 80% 70%, ${BRAND_TO}, transparent 45%)`,
          }}
        />
        <div className="relative z-10 flex flex-col justify-between w-full px-14 py-12">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center font-bold text-white text-sm"
              style={{
                background: `linear-gradient(135deg, ${BRAND_FROM}, ${BRAND_TO})`,
              }}
            >
              P
            </div>
            <span className="text-lg font-semibold tracking-tight">
              Placify
            </span>
          </div>

          {/* Headline + illustration */}
          <div className="max-w-md">
            <h1 className="text-4xl font-bold tracking-tight leading-[1.1] mb-4">
              Start Your Placement Journey
            </h1>
            <p className="text-[var(--text-primary)] opacity-60 text-base leading-relaxed mb-10">
              Prepare smarter with AI-powered roadmaps, coding practice, resume
              building, ATS analysis, mock interviews, and personalized career
              guidance.
            </p>

            {/* Signature element: the placement path */}
            <div className="placify-float mb-10">
              <div className="relative pl-2">
                {PATH_STEPS.map((step, idx) => {
                  const Icon = step.icon;
                  const isLast = idx === PATH_STEPS.length - 1;
                  return (
                    <div
                      key={step.label}
                      className="relative flex items-center gap-4 pb-7 last:pb-0"
                    >
                      {!isLast && (
                        <div
                          className="absolute left-[15px] top-8 w-[2px] h-full"
                          style={{
                            background: `linear-gradient(${BRAND_FROM}55, ${BRAND_TO}22)`,
                          }}
                        />
                      )}
                      <div
                        className="relative z-10 w-8 h-8 rounded-full flex items-center justify-center shrink-0 border border-[var(--border-color)] bg-[var(--card-bg)]"
                        style={{
                          animation:
                            idx === 0
                              ? "placify-pulse-dot 2.4s ease-in-out infinite"
                              : "none",
                        }}
                      >
                        <Icon
                          size={14}
                          style={{
                            color: idx === 0 ? BRAND_FROM : "currentColor",
                          }}
                          className={idx === 0 ? "" : "opacity-40"}
                        />
                      </div>
                      <span
                        className={`text-sm font-medium ${
                          idx === 0 ? "" : "opacity-50"
                        }`}
                      >
                        {step.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Feature cards */}
            <div className="grid grid-cols-2 gap-3">
              {FEATURES.map((f) => (
                <div
                  key={f.title}
                  className="rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)] p-4 hover:border-[var(--text-primary)]/20 transition-colors"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <FiCheck
                      size={14}
                      style={{ color: BRAND_TO }}
                      className="shrink-0"
                    />
                    <span className="text-sm font-semibold">{f.title}</span>
                  </div>
                  <p className="text-xs opacity-55 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          {/* <div className="grid grid-cols-4 gap-4 pt-8 border-t border-[var(--border-color)]">
            {STATS.map((s) => (
              <div key={s.label}>
                <div
                  className="text-xl font-bold tracking-tight"
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${BRAND_FROM}, ${BRAND_TO})`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {s.value}
                </div>
                <div className="text-[11px] opacity-50 mt-1 leading-tight">
                  {s.label}
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </div>

      {/* ================= RIGHT SIDE (form) ================= */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-5 py-10 sm:px-8">
        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <div className="flex lg:hidden items-center gap-2.5 mb-8 justify-center">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center font-bold text-white text-sm"
              style={{
                background: `linear-gradient(135deg, ${BRAND_FROM}, ${BRAND_TO})`,
              }}
            >
              P
            </div>
            <span className="text-lg font-semibold tracking-tight">
              Placify
            </span>
          </div>

          <div className="placify-card-enter rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)] shadow-xl shadow-black/[0.03] p-6 sm:p-9">
            {submitted ? (
              <div className="py-10 text-center">
                <div
                  className="w-14 h-14 rounded-full mx-auto mb-5 flex items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, ${BRAND_FROM}, ${BRAND_TO})`,
                  }}
                >
                  <FiCheck size={26} className="text-white" />
                </div>
                <h2 className="text-xl font-semibold mb-2">Account created</h2>
                <p className="text-sm opacity-60 leading-relaxed">
                  Welcome to Placify, {fullName.split(" ")[0] || "there"}. Let's
                  get your profile set up next.
                </p>
              </div>
            ) : (
              <>
                <div className="mb-7">
                  <h2 className="text-2xl font-bold tracking-tight mb-1.5">
                    Create your account
                  </h2>
                  <p className="text-sm opacity-55">
                    Start for free. Upgrade anytime.
                  </p>
                </div>

                <form onSubmit={handleSubmit} noValidate>
                  {/* Full Name */}
                  <div className="mb-4">
                    <label
                      htmlFor="fullName"
                      className="block text-xs font-medium mb-1.5 opacity-70"
                    >
                      Full Name
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      onBlur={() => markTouched("fullName")}
                      placeholder="Aditi Sharma"
                      className={`placify-input w-full rounded-xl border bg-[var(--bg-primary)] px-4 py-2.5 text-sm outline-none placeholder:opacity-40 ${
                        touched.fullName && !isNameValid
                          ? "border-red-500"
                          : "border-[var(--border-color)] focus:border-[var(--text-primary)]/30"
                      }`}
                    />
                    {touched.fullName && !isNameValid && (
                      <p className="text-xs text-red-500 mt-1.5 flex items-center gap-1">
                        <FiX size={12} /> Full name cannot be empty
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-xs font-medium mb-1.5 opacity-70"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onBlur={() => markTouched("email")}
                      placeholder="you@example.com"
                      className={`placify-input w-full rounded-xl border bg-[var(--bg-primary)] px-4 py-2.5 text-sm outline-none placeholder:opacity-40 ${
                        touched.email && !isEmailValid
                          ? "border-red-500"
                          : "border-[var(--border-color)] focus:border-[var(--text-primary)]/30"
                      }`}
                    />
                    {touched.email && !isEmailValid && (
                      <p className="text-xs text-red-500 mt-1.5 flex items-center gap-1">
                        <FiX size={12} /> Enter a valid email address
                      </p>
                    )}
                  </div>

                  {/* Password */}
                  <div className="mb-4">
                    <label
                      htmlFor="password"
                      className="block text-xs font-medium mb-1.5 opacity-70"
                    >
                      Password
                    </label>
                    <div className="relative">
                      <input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onBlur={() => markTouched("password")}
                        placeholder="Create a strong password"
                        className={`placify-input w-full rounded-xl border bg-[var(--bg-primary)] px-4 py-2.5 pr-11 text-sm outline-none placeholder:opacity-40 ${
                          touched.password && !isPasswordValid
                            ? "border-red-500"
                            : "border-[var(--border-color)] focus:border-[var(--text-primary)]/30"
                        }`}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword((v) => !v)}
                        className="absolute right-3.5 top-1/2 -translate-y-1/2 opacity-50 hover:opacity-90 transition-opacity"
                        aria-label={
                          showPassword ? "Hide password" : "Show password"
                        }
                      >
                        {showPassword ? (
                          <FiEyeOff size={16} />
                        ) : (
                          <FiEye size={16} />
                        )}
                      </button>
                    </div>

                    {/* Strength meter */}
                    {password.length > 0 && (
                      <div className="mt-2.5">
                        <div className="h-1.5 w-full rounded-full bg-[var(--border-color)] overflow-hidden">
                          <div
                            className="h-full rounded-full transition-all duration-300 ease-out"
                            style={{
                              width: strength.width,
                              backgroundColor: strength.color,
                            }}
                          />
                        </div>
                        <div
                          className="text-xs mt-1.5 font-medium"
                          style={{ color: strength.color }}
                        >
                          {strength.label}
                        </div>
                      </div>
                    )}

                    {/* Live requirements checklist */}
                    {password.length > 0 && (
                      <div className="mt-3 grid grid-cols-2 gap-x-3 gap-y-1.5">
                        {requirementRows.map((req) => {
                          const passed = passwordChecks[req.key];
                          return (
                            <div
                              key={req.key}
                              className="flex items-center gap-1.5 text-xs"
                            >
                              <span
                                key={String(passed)}
                                className={`placify-req-enter w-3.5 h-3.5 rounded-full flex items-center justify-center shrink-0 ${
                                  passed
                                    ? "bg-emerald-500/15 text-emerald-500"
                                    : "bg-[var(--border-color)] text-[var(--text-primary)] opacity-40"
                                }`}
                              >
                                {passed ? <FiCheck size={9} /> : null}
                              </span>
                              <span
                                className={
                                  passed ? "text-emerald-500" : "opacity-50"
                                }
                              >
                                {req.label}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>

                  {/* Confirm Password */}
                  <div className="mb-5">
                    <label
                      htmlFor="confirmPassword"
                      className="block text-xs font-medium mb-1.5 opacity-70"
                    >
                      Confirm Password
                    </label>
                    <div className="relative">
                      <input
                        id="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        onBlur={() => markTouched("confirmPassword")}
                        placeholder="Re-enter your password"
                        className={`placify-input w-full rounded-xl border bg-[var(--bg-primary)] px-4 py-2.5 pr-11 text-sm outline-none placeholder:opacity-40 ${
                          touched.confirmPassword &&
                          confirmPassword.length > 0 &&
                          !doPasswordsMatch
                            ? "border-red-500"
                            : "border-[var(--border-color)] focus:border-[var(--text-primary)]/30"
                        }`}
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword((v) => !v)}
                        className="absolute right-3.5 top-1/2 -translate-y-1/2 opacity-50 hover:opacity-90 transition-opacity"
                        aria-label={
                          showConfirmPassword
                            ? "Hide password"
                            : "Show password"
                        }
                      >
                        {showConfirmPassword ? (
                          <FiEyeOff size={16} />
                        ) : (
                          <FiEye size={16} />
                        )}
                      </button>
                    </div>
                    {confirmPassword.length > 0 && (
                      <p
                        className={`text-xs mt-1.5 flex items-center gap-1 ${
                          doPasswordsMatch ? "text-emerald-500" : "text-red-500"
                        }`}
                      >
                        {doPasswordsMatch ? (
                          <>
                            <FiCheck size={12} /> Passwords match
                          </>
                        ) : (
                          <>
                            <FiX size={12} /> Passwords do not match
                          </>
                        )}
                      </p>
                    )}
                  </div>

                  {/* Checkboxes */}
                  <div className="mb-6 space-y-2.5">
                    <label className="flex items-start gap-2.5 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={agreeTerms}
                        onChange={(e) => setAgreeTerms(e.target.checked)}
                        className="mt-0.5 w-4 h-4 rounded accent-current shrink-0 cursor-pointer"
                        style={{ accentColor: BRAND_FROM }}
                      />
                      <span className="text-xs opacity-70 leading-relaxed">
                        I agree to the{" "}
                        <a
                          href="#terms"
                          className="font-medium underline underline-offset-2 opacity-100 hover:opacity-70"
                          style={{ color: BRAND_FROM }}
                        >
                          Terms &amp; Conditions
                        </a>
                      </span>
                    </label>
                    <label className="flex items-start gap-2.5 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={agreePrivacy}
                        onChange={(e) => setAgreePrivacy(e.target.checked)}
                        className="mt-0.5 w-4 h-4 rounded accent-current shrink-0 cursor-pointer"
                        style={{ accentColor: BRAND_FROM }}
                      />
                      <span className="text-xs opacity-70 leading-relaxed">
                        I agree to the{" "}
                        <a
                          href="#privacy"
                          className="font-medium underline underline-offset-2 opacity-100 hover:opacity-70"
                          style={{ color: BRAND_FROM }}
                        >
                          Privacy Policy
                        </a>
                      </span>
                    </label>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={!isFormValid || isSubmitting}
                    className="placify-btn-primary w-full rounded-xl py-3 text-sm font-semibold text-white flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed"
                    style={{
                      background: `linear-gradient(135deg, ${BRAND_FROM}, ${BRAND_TO})`,
                      boxShadow: isFormValid
                        ? `0 8px 24px -8px ${BRAND_FROM}66`
                        : "none",
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 rounded-full border-2 border-white/40 border-t-white animate-spin" />
                        Creating account...
                      </>
                    ) : (
                      <>
                        Create Free Account
                        <FiArrowRight size={15} />
                      </>
                    )}
                  </button>

                  {/* Trust section */}
                  <div className="mt-5 space-y-1.5">
                    <div className="flex items-center gap-1.5 text-[11px] opacity-50">
                      <FiLock size={11} /> Your data is encrypted.
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px] opacity-50">
                      <FiShield size={11} /> We never share your information.
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px] opacity-50">
                      <FiLock size={11} /> Secure authentication.
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="flex items-center gap-3 my-6">
                    <div className="h-px flex-1 bg-[var(--border-color)]" />
                    <span className="text-[11px] opacity-40 font-medium">
                      OR
                    </span>
                    <div className="h-px flex-1 bg-[var(--border-color)]" />
                  </div>

                  {/* Social login */}
                  {/* <div className="space-y-2.5">
                    <button
                      type="button"
                      onClick={() => handleSocialLogin("Google")}
                      className="placify-social-btn w-full rounded-xl border border-[var(--border-color)] py-2.5 text-sm font-medium flex items-center justify-center gap-2.5 hover:bg-[var(--bg-primary)]"
                    >
                      <FcGoogle size={17} />
                      Continue with Google
                    </button>
                    <button
                      type="button"
                      onClick={() => handleSocialLogin("GitHub")}
                      className="placify-social-btn w-full rounded-xl border border-[var(--border-color)] py-2.5 text-sm font-medium flex items-center justify-center gap-2.5 hover:bg-[var(--bg-primary)]"
                    >
                      <FaGithub size={16} />
                      Continue with GitHub
                    </button>
                  </div> */}
                </form>

                {/* Sign in link */}
                <p className="text-center text-xs opacity-60 mt-7">
                  Already have an account?{" "}
                  <NavLink
                    to={"/Placify/login"}
                    className="font-semibold opacity-100 hover:underline"
                    style={{ color: BRAND_FROM }}
                  >
                    Sign In
                  </NavLink>
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
