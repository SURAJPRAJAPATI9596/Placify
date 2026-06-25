import React from "react";

const Footer = () => {
  return (
    <footer className="bg-(--bg-primary) text-(--text-primary)px-5 sm:px-10 py-14">
      <div className="max-w-7xl mx-auto">
        {/* Main footer card */}

        <div className="bg-(--bg-primary) text-(--text-primary) border border-white/10 rounded-3xl p-6 md:p-12">
          <div
            className="
            grid
            lg:grid-cols-2
            gap-12
            "
          >
            {/* Left section */}

            <div>
              <h2 className=" text-3xl md:text-5xl font-bold">
                Build Your Career
                <span className="text-purple-500"> With Placify</span>
              </h2>

              <p
                className="
                text-gray-400
                mt-5
                leading-7
                "
              >
                Create resumes, prepare interviews, improve skills and find your
                dream job from one platform.
              </p>

              {/* Contact */}

              <div className="mt-8 space-y-4">
                <div>
                  <h3 className="text-purple-400 font-semibold">Email</h3>

                  <p className="text-gray-300">surajprajapatijob@gmail.com</p>
                </div>

                <div>
                  <h3 className="text-purple-400 font-semibold">WhatsApp</h3>

                  <p className="text-gray-300">8737003813</p>
                </div>
              </div>
            </div>

            {/* Mailing Section (kept) */}

            <div>
              <h2
                className="
                text-2xl
                font-bold
                mb-6
                "
              >
                📩 Get In Touch
              </h2>

              <form className="space-y-5">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="
                  w-full
                 bg-(--bg-primary) text-(--text-primary)
                  border
                  border-white/10
                  rounded-xl
                  px-5
                  py-4
                  outline-none
                  focus:border-purple-500
                  "
                />

                <textarea
                  rows="4"
                  placeholder="Write your message..."
                  className="
                  w-full
                 bg-(--bg-primary) text-(--text-primary)
                  border
                  border-white/10
                  rounded-xl
                  px-5
                  py-4
                  outline-none
                  focus:border-purple-500
                  "
                />

                <button
                  className="
                w-full
                bg-purple-600
                hover:bg-purple-700
                rounded-xl
                py-4
                font-bold
                transition
                "
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Links */}

          <div
            className="
            mt-14
            pt-10
            border-t
            border-white/10
            grid
            grid-cols-2
            md:grid-cols-4
            gap-8
            "
          >
            <div>
              <h3 className="font-bold mb-4">Platform</h3>

              <p className="text-gray-400">Resume Builder</p>
              <p className="text-gray-400">Jobs</p>
              <p className="text-gray-400">Interview Prep</p>
              <p className="text-gray-400">Coding</p>
            </div>

            <div>
              <h3 className="font-bold mb-4">Resources</h3>

              <p className="text-gray-400">Roadmaps</p>
              <p className="text-gray-400">Courses</p>
              <p className="text-gray-400">Notes</p>
              <p className="text-gray-400">Blogs</p>
            </div>

            <div>
              <h3 className="font-bold mb-4">Company</h3>

              <p className="text-gray-400">About</p>

              <p className="text-gray-400">Contact</p>

              <p className="text-gray-400">Privacy</p>
            </div>

            <div>
              <h3 className="font-bold mb-4">Follow</h3>

              <a href="https://www.linkedin.com/in/suraj-prajapati9596 ">
                <p className="text-gray-400">LinkedIn</p>
              </a>
              <p className="text-gray-400">Github</p>

              <p className="text-gray-400">Twitter</p>
            </div>
          </div>
        </div>

        {/* Bottom */}

        <div
          className="
          text-center
          mt-8
          pt-6
          border-t
          border-white/10
          text-gray-400
          "
        >
          © 2026
          <span className="text-purple-400 font-bold"> Placify</span>. All
          Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
