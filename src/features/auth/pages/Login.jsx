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
  FiBriefcase,
  FiCpu,
} from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { NavLink } from "react-router-dom";

/**
 * Placify — Login
 * Signature element: a "continue where you left off" progress ring behind
 * the headline — a returning student's journey is already partway drawn,
 * unlike Register's five-node path which starts empty. Same brand system
 * as Register.jsx for continuity across the auth flow.
 */

const BRAND_FROM = "#6C5CE7"; // indigo-violet
const BRAND_TO = "#00C2A8"; // teal

const FEATURES = [
  { title: "Continue Your Roadmaps", icon: FiMapPin },
  { title: "Track Coding Progress", icon: FiCode },
  { title: "AI Career Assistant", icon: FiCpu },
  { title: "Apply for Jobs", icon: FiBriefcase },
];

// const STATS = [
//   { value: "50,000+", label: "Students" },
//   { value: "1M+", label: "Problems Solved" },
//   { value: "250+", label: "Hiring Partners" },
//   { value: "95%", label: "Placement Success" },
// ];

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [formError, setFormError] = useState("");

  const [touched, setTouched] = useState({ email: false, password: false });

  const markTouched = useCallback((field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  }, []);

  const isEmailValid = EMAIL_REGEX.test(email);
  const isPasswordValid = password.length > 0;
  const isFormValid = isEmailValid && isPasswordValid;

  const emailError = useMemo(() => {
    if (!touched.email) return "";
    if (email.trim().length === 0) return "Email is required";
    if (!isEmailValid) return "Enter a valid email address";
    return "";
  }, [touched.email, email, isEmailValid]);

  const passwordError = useMemo(() => {
    if (!touched.password) return "";
    if (password.length === 0) return "Password is required";
    return "";
  }, [touched.password, password]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({ email: true, password: true });
    if (!isFormValid || isSubmitting) return;

    setFormError("");
    setIsSubmitting(true);
    // Placeholder submit handler — wire up to real auth API here.
    setTimeout(() => {
      setIsSubmitting(false);
      setLoginSuccess(true);
      // Placeholder redirect — replace with real navigation (e.g. react-router).
      setTimeout(() => {
        console.log("Redirecting to /dashboard ...");
      }, 1200);
    }, 1500);
  };

  const handleSocialLogin = (provider) => {
    // Placeholder social auth handler.
    console.log(`Continue with ${provider} — connect real OAuth here.`);
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    // Placeholder navigation — replace with real router push.
    console.log("Navigate to /auth/forgot-password");
  };

  return (
    <div className="min-h-screen w-full bg-[var(--bg-primary)] text-[var(--text-primary)] flex items-stretch ">
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
        @keyframes placify-ring-draw {
          from { stroke-dashoffset: 251; }
          to { stroke-dashoffset: 68; }
        }
        @keyframes placify-spin {
          to { transform: rotate(360deg); }
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
        .placify-ring-progress {
          animation: placify-ring-draw 1.4s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both;
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
        .placify-focus-ring:focus-visible {
          outline: 2px solid ${BRAND_FROM};
          outline-offset: 2px;
        }
        @media (prefers-reduced-motion: reduce) {
          .placify-float, .placify-gradient-bg, .placify-card-enter, .placify-ring-progress {
            animation: none !important;
          }
        }
      `}</style>

      {/* ================= LEFT SIDE (desktop only) ================= */}
      <div className="hidden lg:flex lg:w-1/4 relative overflow-hidden border-r border-[var(--border-color)] mt-20">
        <div
          className="absolute inset-0 opacity-[0.08] placify-gradient-bg"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 20%, ${BRAND_FROM}, transparent 45%), radial-gradient(circle at 80% 70%, ${BRAND_TO}, transparent 45%)`,
          }}
        />
        <div className="relative z-10 flex flex-col justify-between w-full px-14 py-12">
          {/* Logo */}
          <div className="flex items-center gap-2.5 pt-20">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center font-bold text-white text-sm"
              style={{
                background: `linear-gradient(135deg, ${BRAND_FROM}, ${BRAND_TO})`,
              }}
            >
              P
            </div>
            <span className="text-lg font-semibold tracking-tight ">
              Placify
            </span>
          </div>

          {/* Headline + signature progress ring */}
          <div className="max-w-md ">
            <div className="placify-float mb-8 flex items-center gap-6">
              {/* <svg
                width="88"
                height="88"
                viewBox="0 0 88 88"
                className="shrink-0"
                aria-hidden="true"
              >
                <circle
                  cx="44"
                  cy="44"
                  r="40"
                  fill="none"
                  stroke="var(--border-color)"
                  strokeWidth="6"
                />
                <circle
                  cx="44"
                  cy="44"
                  r="40"
                  fill="none"
                  stroke="url(#placify-ring-gradient)"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeDasharray="251"
                  strokeDashoffset="251"
                  className="placify-ring-progress"
                  transform="rotate(-90 44 44)"
                />
                <text
                  x="44"
                  y="49"
                  textAnchor="middle"
                  fontSize="18"
                  fontWeight="700"
                  fill="var(--text-primary)"
                >
                  73%
                </text>
                <defs>
                  <linearGradient
                    id="placify-ring-gradient"
                    x1="0"
                    y1="0"
                    x2="88"
                    y2="88"
                  >
                    <stop offset="0%" stopColor={BRAND_FROM} />
                    <stop offset="100%" stopColor={BRAND_TO} />
                  </linearGradient>
                </defs>
              </svg> */}
              <div>
                <h1 className="text-3xl font-bold tracking-tight leading-[1.1]">
                  Welcome Back!
                </h1>
                <p className="text-xs opacity-50 mt-1.5">
                  complete your roadmap — pick up right where you left off.
                </p>
              </div>
            </div>

            <p className="text-[var(--text-primary)] opacity-60 text-base leading-relaxed mb-10">
              Continue your placement journey with AI-powered learning, coding
              practice, resume building, interview preparation, and personalized
              career guidance.
            </p>

            {/* Feature cards */}
            <div className="grid grid-cols-2 gap-3">
              {FEATURES.map((f) => {
                const Icon = f.icon;
                return (
                  <div
                    key={f.title}
                    className="rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)] p-4 flex items-center gap-2.5 hover:border-[var(--text-primary)]/20 transition-colors"
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                      style={{
                        background: `linear-gradient(135deg, ${BRAND_FROM}22, ${BRAND_TO}22)`,
                      }}
                    >
                      <Icon size={14} style={{ color: BRAND_FROM }} />
                    </div>
                    <span className="text-xs font-semibold leading-snug">
                      {f.title}
                    </span>
                  </div>
                );
              })}
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

          <div
            className="placify-card-enter rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/95 backdrop-blur-xl shadow-xl shadow-black/[0.04] p-6 sm:p-9"
            style={{ backdropFilter: "blur(20px)" }}
          >
            {loginSuccess ? (
              <div
                className="py-10 text-center"
                role="status"
                aria-live="polite"
              >
                <div
                  className="w-14 h-14 rounded-full mx-auto mb-5 flex items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, ${BRAND_FROM}, ${BRAND_TO})`,
                  }}
                >
                  <span
                    className="w-6 h-6 rounded-full border-2 border-white/40 border-t-white"
                    style={{ animation: "placify-spin 0.8s linear infinite" }}
                  />
                </div>
                <h2 className="text-xl font-semibold mb-2">Signing you in</h2>
                <p className="text-sm opacity-60 leading-relaxed">
                  Redirecting you to your dashboard...
                </p>
              </div>
            ) : (
              <>
                <div className="mb-7">
                  <h2 className="text-2xl font-bold tracking-tight mb-1.5">
                    Sign In
                  </h2>
                  <p className="text-sm opacity-55">
                    Welcome back to Placify. Please sign in to continue.
                  </p>
                </div>

                {formError && (
                  <div
                    role="alert"
                    className="mb-5 rounded-xl border border-red-500/30 bg-red-500/5 px-4 py-2.5 text-xs text-red-500 flex items-center gap-2"
                  >
                    <FiX size={13} className="shrink-0" />
                    {formError}
                  </div>
                )}

                <form onSubmit={handleSubmit} noValidate>
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
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onBlur={() => markTouched("email")}
                      placeholder="you@example.com"
                      aria-invalid={!!emailError}
                      aria-describedby={emailError ? "email-error" : undefined}
                      className={`placify-input placify-focus-ring w-full rounded-xl border bg-[var(--bg-primary)] px-4 py-2.5 text-sm outline-none placeholder:opacity-40 ${
                        emailError
                          ? "border-red-500"
                          : "border-[var(--border-color)] focus:border-[var(--text-primary)]/30"
                      }`}
                    />
                    {emailError && (
                      <p
                        id="email-error"
                        className="text-xs text-red-500 mt-1.5 flex items-center gap-1"
                      >
                        <FiX size={12} /> {emailError}
                      </p>
                    )}
                  </div>

                  {/* Password */}
                  <div className="mb-3">
                    <div className="flex items-center justify-between mb-1.5">
                      <label
                        htmlFor="password"
                        className="block text-xs font-medium opacity-70"
                      >
                        Password
                      </label>
                      <a
                        href="/auth/forgot-password"
                        onClick={handleForgotPassword}
                        className="text-xs font-medium hover:underline placify-focus-ring rounded"
                        style={{ color: BRAND_FROM }}
                      >
                        Forgot Password?
                      </a>
                    </div>
                    <div className="relative">
                      <input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onBlur={() => markTouched("password")}
                        placeholder="Enter your password"
                        aria-invalid={!!passwordError}
                        aria-describedby={
                          passwordError ? "password-error" : undefined
                        }
                        className={`placify-input placify-focus-ring w-full rounded-xl border bg-[var(--bg-primary)] px-4 py-2.5 pr-11 text-sm outline-none placeholder:opacity-40 ${
                          passwordError
                            ? "border-red-500"
                            : "border-[var(--border-color)] focus:border-[var(--text-primary)]/30"
                        }`}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword((v) => !v)}
                        className="absolute right-3.5 top-1/2 -translate-y-1/2 opacity-50 hover:opacity-90 transition-opacity placify-focus-ring rounded"
                        aria-label={
                          showPassword ? "Hide password" : "Show password"
                        }
                        aria-pressed={showPassword}
                      >
                        {showPassword ? (
                          <FiEyeOff size={16} />
                        ) : (
                          <FiEye size={16} />
                        )}
                      </button>
                    </div>
                    {passwordError && (
                      <p
                        id="password-error"
                        className="text-xs text-red-500 mt-1.5 flex items-center gap-1"
                      >
                        <FiX size={12} /> {passwordError}
                      </p>
                    )}
                  </div>

                  {/* Remember me */}
                  <div className="mb-6">
                    <label className="flex items-center gap-2.5 cursor-pointer w-fit">
                      <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        className="w-4 h-4 rounded accent-current cursor-pointer placify-focus-ring"
                        style={{ accentColor: BRAND_FROM }}
                      />
                      <span className="text-xs opacity-70">Remember Me</span>
                    </label>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={!isFormValid || isSubmitting}
                    className="placify-btn-primary placify-focus-ring w-full rounded-xl py-3 text-sm font-semibold text-white flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed"
                    style={{
                      background: `linear-gradient(135deg, var(--primary, ${BRAND_FROM}), var(--primary-hover, ${BRAND_TO}))`,
                      boxShadow: isFormValid
                        ? `0 8px 24px -8px ${BRAND_FROM}66`
                        : "none",
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <span
                          className="w-4 h-4 rounded-full border-2 border-white/40 border-t-white"
                          style={{
                            animation: "placify-spin 0.7s linear infinite",
                          }}
                        />
                        Signing In...
                      </>
                    ) : (
                      <>
                        Sign In
                        <FiArrowRight size={15} />
                      </>
                    )}
                  </button>

                  {/* Trust section */}
                  <div className="mt-5 space-y-1.5">
                    <div className="flex items-center gap-1.5 text-[11px] opacity-50">
                      <FiLock size={11} /> Secure Login
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px] opacity-50">
                      <FiShield size={11} /> Encrypted Authentication
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px] opacity-50">
                      <FiLock size={11} /> Your information is protected
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
                      className="placify-social-btn placify-focus-ring w-full rounded-xl border border-[var(--border-color)] py-2.5 text-sm font-medium flex items-center justify-center gap-2.5 hover:bg-[var(--bg-primary)]"
                    >
                      <FcGoogle size={17} />
                      Continue with Google
                    </button>
                    <button
                      type="button"
                      onClick={() => handleSocialLogin("GitHub")}
                      className="placify-social-btn placify-focus-ring w-full rounded-xl border border-[var(--border-color)] py-2.5 text-sm font-medium flex items-center justify-center gap-2.5 hover:bg-[var(--bg-primary)]"
                    >
                      <FaGithub size={16} />
                      Continue with GitHub
                    </button>
                  </div> */}
                </form>

                {/* Create account link */}
                <p className="text-center text-xs opacity-60 mt-7">
                  Don't have an account?{" "}
                  <NavLink
                    to={"/register"}
                    className="font-semibold opacity-100 hover:underline placify-focus-ring rounded"
                    style={{ color: BRAND_FROM }}
                  >
                    Create Account
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
