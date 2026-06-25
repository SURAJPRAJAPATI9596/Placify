import processSteps from "../../../../src/data/processSteps";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const ProcessSteps = () => {
  return (
    <section
      className="
py-24
bg-var(--bg-primary)
text-var(--text-primary)
px-6
"
    >
      <div className="text-center mb-16">
        <h2
          className="
text-4xl
md:text-5xl
font-bold
"
        >
          Your Placement Journey
        </h2>

        <p
          className="
text-gray-400
mt-4
"
        >
          Follow these simple steps and reach your goal
        </p>
      </div>

      <div
        className="
max-w-7xl
mx-auto
flex
flex-col
lg:flex-row
items-center
justify-center
gap-5
"
      >
        {processSteps.map((step, index) => (
          <React.Fragment key={step.id}>
            <div
              className="
group
relative
w-full
lg:w-64
bg-white/5
backdrop-blur-xl
border
border-white/10
rounded-3xl
p-8
hover:-translate-y-3
transition-all
duration-300
shadow-xl
"
            >
              {/* number */}

              <div
                className="
absolute
-top-5
left-1/2
-translate-x-1/2
bg-purple-600
w-12
h-12
rounded-full
flex
items-center
justify-center
font-bold
"
              >
                {step.id}
              </div>

              <div
                className="
text-5xl
mt-5
mb-5
group-hover:scale-110
transition
"
              >
                {step.icon}
              </div>

              <h3
                className="
text-xl
font-bold
mb-3
"
              >
                {step.title}
              </h3>

              <p
                className="
text-gray-400
text-sm
leading-6
"
              >
                {step.desc}
              </p>
            </div>

            {index !== processSteps.length - 1 && (
              <FaArrowRight
                className="
hidden
lg:block
text-purple-500
text-3xl
animate-pulse
"
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default ProcessSteps;
