import React from "react";
import AboutData from "../../data/AboutData";

const About = ({ dark }) => {
  return (
    <div className="min-h-screen bg-(--bg-primary) text-(--text-primary)">
      {/* Hero Section */}
      <section className="py-20 px-6 text-center">
        <h1 className="text-5xl font-bold mb-6">
          About <span className="text-blue-600">Placify</span>
        </h1>

        <p className="max-w-3xl mx-auto text-lg leading-relaxed text-left">
          Placement Help is an AI-powered career support platform designed
          specifically for college students. Our mission is to simplify
          placement preparation by providing resume building, ATS analysis, mock
          interviews, study materials, and career guidance—all in one place.
        </p>
      </section>

      {/* Mission Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className=" rounded-2xl p-8 shadow-lg bg-(--bg-primary) text-(--text-primary)">
          <h2 className="text-3xl font-bold mb-4 text-center">Our Mission</h2>

          <p className="text-lg leading-relaxed text-left">
            Many students struggle with placement preparation because they don't
            know where to start. Placement Help aims to bridge this gap by
            providing smart tools and personalized guidance that help students
            become industry-ready and confident.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-(--bg-primary) text-(--text-primary)">
        <h2 className="text-4xl font-bold text-center mb-12">What We Offer</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto ">
          {AboutData.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 bg-(--bg-primary) text-(--text-primary)"
            >
              <div className="text-4xl text-blue-600 mb-4">{item.icon}</div>

              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>

              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-4xl font-bold text-center mb-10">
          Why Choose Placify?
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 rounded-xl  shadow-md bg-(--bg-primary) text-(--text-primary)">
            <h3 className="text-2xl font-semibold mb-4">All-in-One Platform</h3>

            <p>
              No need to switch between multiple websites. Everything related to
              placement preparation is available in a single platform.
            </p>
          </div>

          <div className="p-8 rounded-xl shadow-md bg-(--bg-primary) text-(--text-primary)">
            <h3 className="text-2xl font-semibold mb-4">AI-Powered Support</h3>

            <p>
              Smart recommendations, resume analysis, ATS scoring, and interview
              preparation powered by AI technology.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Our Vision</h2>

        <p className="max-w-4xl mx-auto text-lg leading-relaxed">
          We envision a future where every student has equal access to quality
          placement preparation resources. Placement Help aims to become the
          go-to platform for students seeking jobs, internships, and career
          growth opportunities.
        </p>
      </section>
    </div>
  );
};

export default About;
