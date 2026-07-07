import React, { useEffect, useState } from "react";

const ProgressBar = ({
  score = 100,
  circleSize = 50,
  textSize = "2xl",
  dark,
}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let value = 0;

    const timer = setInterval(() => {
      value++;

      if (value >= score) {
        value = score;
        clearInterval(timer);
      }

      setProgress(value);
    }, 20);

    return () => clearInterval(timer);
  }, [score]);

  const radius = circleSize;

  const circumference = 2 * Math.PI * radius;

  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="flex justify-center">
      <div className="relative w-44 h-44">
        <svg className="-rotate-90 w-full h-full" viewBox="0 0 200 200">
          <circle
            cx="100"
            cy="100"
            r={radius}
            stroke="gray"
            strokeWidth="18"
            fill="transparent"
          />

          <circle
            cx="100"
            cy="100"
            r={radius}
            stroke="url(#gradient)"
            strokeWidth="18"
            fill="transparent"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
          />

          <defs>
            <linearGradient id="gradient">
              <stop offset="0%" stopColor="#2563eb" />

              <stop offset="100%" stopColor="#9333ea" />
            </linearGradient>
          </defs>
        </svg>

        <div
          className="
absolute
inset-0
flex
flex-col
items-center
justify-center
"
        >
          <h1 className={`text-${textSize} font-bold`}>{progress}%</h1>

          <p className="text-sm opacity-70 text-shadow-white">Match</p>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
