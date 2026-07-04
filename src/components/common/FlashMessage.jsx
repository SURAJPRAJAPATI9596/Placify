import React, { useState, useEffect, useCallback, useRef } from "react";
import {
  FaCheckCircle,
  FaTimesCircle,
  FaExclamationTriangle,
  FaInfoCircle,
  FaTimes,
} from "react-icons/fa";

const FlashMessage = ({
  message,
  type = "info",
  title,
  duration,
  show = false,
  onClose,
  position = "top-right",
}) => {
  // ─── State ───────────────────────────────────────────────
  const [isMounted, setIsMounted] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const timerRef = useRef(null);

  // ─── Type Configuration ──────────────────────────────────
  const typeConfig = {
    success: {
      icon: FaCheckCircle,
      accentColor: "border-emerald-500",
      iconColor: "text-emerald-500",
      closeColor: "hover:bg-emerald-50 dark:hover:bg-emerald-950/30",
      label: "Success",
    },
    error: {
      icon: FaTimesCircle,
      accentColor: "border-rose-500",
      iconColor: "text-rose-500",
      closeColor: "hover:bg-rose-50 dark:hover:bg-rose-950/30",
      label: "Error",
    },
    warning: {
      icon: FaExclamationTriangle,
      accentColor: "border-amber-500",
      iconColor: "text-amber-500",
      closeColor: "hover:bg-amber-50 dark:hover:bg-amber-950/30",
      label: "Warning",
    },
    info: {
      icon: FaInfoCircle,
      accentColor: "border-sky-500",
      iconColor: "text-sky-500",
      closeColor: "hover:bg-sky-50 dark:hover:bg-sky-950/30",
      label: "Information",
    },
  };

  const config = typeConfig[type] || typeConfig.info;
  const IconComponent = config.icon;

  // ─── Position Classes ────────────────────────────────────
  const positionClasses = {
    "top-right": "top-4 right-4",
    "top-left": "top-4 left-4",
    "bottom-right": "bottom-4 right-4",
    "bottom-left": "bottom-4 left-4",
    "top-center": "top-4 left-1/2 -translate-x-1/2",
    "bottom-center": "bottom-4 left-1/2 -translate-x-1/2",
  };

  const posClass = positionClasses[position] || positionClasses["top-right"];

  // ─── Auto-Dismiss ────────────────────────────────────────
  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const startTimer = useCallback(() => {
    clearTimer();
    if (duration && duration > 0 && show) {
      timerRef.current = setTimeout(() => {
        handleClose();
      }, duration);
    }
  }, [duration, show]);

  // ─── Close Handler ──────────────────────────────────────
  const handleClose = useCallback(() => {
    clearTimer();
    setIsExiting(true);
    // Wait for exit animation to complete before unmounting
    setTimeout(() => {
      setIsMounted(false);
      setIsExiting(false);
      if (onClose) onClose();
    }, 300); // matches transition duration
  }, [onClose]);

  // ─── Show/Hide Effect ──────────────────────────────────
  useEffect(() => {
    if (show) {
      setIsMounted(true);
      setIsExiting(false);
    } else {
      // If show becomes false, trigger exit
      if (isMounted) {
        handleClose();
      }
    }
  }, [show]);

  // ─── Timer Effect ──────────────────────────────────────
  useEffect(() => {
    if (isMounted && !isExiting) {
      startTimer();
    }
    return () => clearTimer();
  }, [isMounted, isExiting, startTimer]);

  // ─── Animation Classes ──────────────────────────────────
  const animationClasses = isExiting
    ? "opacity-0 translate-y-2 scale-95"
    : "opacity-100 translate-y-0 scale-100";

  // ─── Render ──────────────────────────────────────────────
  if (!isMounted) return null;

  // The title to display: either the passed title or the default label for the type
  const displayTitle = title || config.label;

  return (
    <div
      className={`
                fixed ${posClass} z-50 w-full max-w-sm
                transition-all duration-300 ease-out
                ${animationClasses}
                pointer-events-none
            `}
      role="alert"
      aria-live="polite"
    >
      <div
        className={`
                    pointer-events-auto
                    bg-[var(--card-bg)]/90 backdrop-blur-sm
                    border-l-4 ${config.accentColor}
                    rounded-xl
                    shadow-lg shadow-black/5 dark:shadow-black/20
                    p-4
                    flex items-start gap-3
                    ring-1 ring-[var(--border-color)]/40
                `}
      >
        {/* ── Icon ── */}
        <div className={`flex-shrink-0 mt-0.5 ${config.iconColor}`}>
          <IconComponent className="w-5 h-5" />
        </div>

        {/* ── Content ── */}
        <div className="flex-1 min-w-0">
          {displayTitle && (
            <h4 className="text-sm font-semibold text-[var(--text-primary)] leading-tight">
              {displayTitle}
            </h4>
          )}
          <p className="text-sm text-[var(--text-primary)]/80 leading-relaxed mt-0.5 break-words">
            {message}
          </p>
        </div>

        {/* ── Close Button ── */}
        <button
          onClick={handleClose}
          className={`MuiButtonBase-root
                        flex-shrink-0 mt-0.5
                        p-1.5 rounded-lg
                        text-[var(--text-primary)]/40
                        transition-colors duration-200
                        hover:text-[var(--text-primary)]/80
                        ${config.closeColor}
                        focus:outline-none focus:ring-2 focus:ring-[var(--border-color)]
                    `}
          aria-label="Dismiss notification"
        >
          <FaTimes className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};

export default FlashMessage;
