import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import MailBox from "./MailBox";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaArrowRight,
} from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    {
      icon: <FaGithub size={22} />,
      url: "https://github.com/SURAJPRAJAPATI9596",
    },
    {
      icon: <FaLinkedin size={22} />,
      url: "https://www.linkedin.com/in/suraj-prajapati9596",
    },
    {
      icon: <FaTwitter size={22} />,
      url: "https://x.com/SURAJ_9596",
    },
    { icon: <FaInstagram size={22} />, url: "#" },
  ];

  return (
    <footer className=" bg-(--bg-primary) text-white pt-20 pb-12 border-t border-white/10 overflow-y-hidden w-full">
      <div className="max-w-7xl mx-auto px-6 overflow-y-hidden">
        <div className="grid md:grid-cols-12 gap-16">
          {/* BRAND SECTION */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-linear-to-br from-violet-500 to-fuchsia-500 rounded-2xl flex items-center justify-center text-2xl font-bold">
                P
              </div>
              <span className="text-4xl font-bold tracking-tighter">
                Placify
              </span>
            </div>

            <p className="text-lg text-gray-400 max-w-md leading-relaxed">
              Placify is an AI-powered placement preparation platform helping
              students build skills, optimize resumes, crack interviews, and
              land their dream jobs.
            </p>

            <div className="flex gap-5 mt-10 ">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center justify-center transition-all hover:scale-110 hover:rotate-6"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Contact Details */}
            <div className="mt-12 text-sm text-gray-400 space-y-2">
              <div>
                <strong>Email:</strong> placify.support@gmail.com
              </div>

              <div>
                <strong>Location:</strong> India
              </div>
              <div>
                <strong>Response Time:</strong> Usually within 24 hours
              </div>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="md:col-span-2">
            <h4 className="font-semibold text-lg mb-6 text-white">Platform</h4>
            <div className="space-y-4 text-gray-400">
              {[
                "Resources",
                "Resume Builder",
                "AI Interview",
                "Coding Practice",
                "Job Portal",
                "Tracker",
              ].map((link, i) => (
                <NavLink
                  key={i}
                  to={link}
                  className="block hover:text-white transition"
                >
                  {link}
                </NavLink>
              ))}
            </div>
          </div>

          {/* CONTACT FORM */}
          <MailBox />
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col justify-between items-center text-sm text-gray-400 gap-4">
          <div>© 2026 Placify. Built with love for students worldwide.</div>

          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition">
              Terms
            </a>
            <a href="#" className="hover:text-white transition">
              Cookies
            </a>
            <a href="#" className="hover:text-white transition">
              Status
            </a>
          </div>

          <div className="text-xs opacity-60">v1.0.0</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
{
  /* RESOURCES */
}
{
  /* <div className="md:col-span-2">
  <h4 className="font-semibold text-lg mb-6 text-white">Resources</h4>
  <div className="space-y-4 text-gray-400">
    {[
      "Frontend Roadmap",
      "DSA Mastery",
      "System Design",
      "Interview Prep",
      "Resume Tips",
      "Career Blogs",
    ].map((link, i) => (
      <a
        key={i}
        href="#"
        className="block hover:text-white transition"
      >
        {link}
      </a>
    ))}
  </div>
</div> */
}
