import React, { useState, useEffect } from "react";
import HeroImage from "../../../components/ui/HeroImage";

const Hero = ({ dark, setDark }) => {
  return (
    <section
      className="min-h-screen relative overflow-hidden px-6 lg:px-24 flex items-center    bg-(--bg-primary)
    text-(--text-primary) mt-8"
    >
      {/* glow */}

      <div
        className="
absolute
w-125
h-125
bg-purple-600
opacity-20
blur-[150px]
top-20
left-10
"
      />

      <div
        className="
max-w-7xl
mx-auto
grid
lg:grid-cols-2
gap-12
items-center
w-full
"
      >
        {/* LEFT */}

        <div>
          <div
            className="
inline-flex
border
border-purple-500/40
px-5
py-2
rounded-full
text-purple-400
mb-8
"
          >
            ✨ Trusted by 50,000+ students
          </div>

          <h1
            className="
text-5xl
md:text-7xl
font-bold
leading-[1.05]
text-[1.5rem]
"
          >
            Your Complete
            <br />
            <span
              className="
bg-linear-to-r
from-purple-400
to-purple-700
text-transparent
bg-clip-text
"
            >
              Placement
            </span>
            <br />
            Preparation
            <br />
            Platform
          </h1>

          <p
            className="
mt-8
text-gray-400
text-lg
max-w-xl
leading-8
"
          >
            Learn skills, build resumes, prepare for interviews, practice
            coding, and land your dream job — all in one place.
          </p>

          <div
            className="
flex
gap-5
mt-10
flex-wrap
"
          >
            <button
              className="
bg-purple-600
px-8
py-4
rounded-xl
font-semibold
hover:scale-105
transition
"
            >
              Get Started Free →
            </button>

            <button
              className="
border
border-gray-700
px-8
py-4
rounded-xl
hover:bg-white
hover:text-black
transition
"
            >
              Explore Roadmaps
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <HeroImage />
      </div>
    </section>
  );
};

export default Hero;
