const ProgressLoader = () => {
  return (
    <div className="w-full min-h-[350px] flex items-center justify-center">
      <div className="flex flex-col items-center gap-6">
        {/* Temporary SVG Loader */}
        <svg
          className="w-20 h-20 animate-spin text-blue-500"
          viewBox="0 0 50 50"
          fill="none"
        >
          <circle
            cx="25"
            cy="25"
            r="20"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="90 40"
          />
        </svg>

        <div className="text-center">
          <h2 className="text-xl font-semibold text-(--text-primary)">
            Analyzing your resume...
          </h2>

          <p className="mt-2 text-sm text-(--text-secondary)">
            Please wait while Placify AI evaluates your resume.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProgressLoader;
