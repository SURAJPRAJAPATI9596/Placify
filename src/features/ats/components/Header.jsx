import React from "react";

const Header = () => {
  return (
    <section className="text-center max-w-3xl mx-auto mb-12">
      <h1 className="text-4xl font-bold">PLACIFY ATS CHECKER</h1>

      <p className="mt-4 text-lg opacity-80">
        Optimize Your Resume for Applicant Tracking Systems
      </p>

      <p className="mt-2 opacity-70">
        Upload your resume, compare it with job description, and receive ATS
        score with improvement suggestions.
      </p>
    </section>
  );
};

export default Header;
