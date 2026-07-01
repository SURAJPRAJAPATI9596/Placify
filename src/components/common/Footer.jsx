import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="
      bg-(--card-bg)
      text-(--text-primary)
      border-t
border(--border-color)
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        py-14
        grid
        md:grid-cols-4
        gap-10
        "
      >
        {/* Brand */}

        <div>
          <h1
            className="
            text-3xl
            font-bold
            "
          >
            Placify
          </h1>

          <p
            className="
            mt-4
            opacity-70
            leading-7
            "
          >
            Build skills, prepare interviews, track progress and achieve your
            career goals.
          </p>

          <div
            className="
            flex
            gap-4
            mt-6
            "
          >
            {[FaGithub, FaLinkedin, FaTwitter].map((Icon, index) => (
              <div
                key={index}
                className="
                p-3
                rounded-full
          bg-(--bg-primary)
                border
          border(--border-color)
                hover:bg-blue-600
                hover:text-white
                transition
                cursor-pointer
                "
              >
                <Icon size={18} />
              </div>
            ))}
          </div>
        </div>

        {/* Product */}

        <div>
          <h3
            className="
            font-bold
            text-lg
            "
          >
            Product
          </h3>

          <ul
            className="
            mt-5
            space-y-3
            opacity-70
            "
          >
            <li>Resume Builder</li>
            <li>AI Interview</li>
            <li>Coding Practice</li>
            <li>Roadmaps</li>
            <li>Tracker</li>
          </ul>
        </div>

        {/* Company */}

        <div>
          <h3
            className="
            font-bold
            text-lg
            "
          >
            Company
          </h3>

          <ul
            className="
            mt-5
            space-y-3
            opacity-70
            "
          >
            <li>About</li>
            <li>Contact</li>
            <li>Privacy Policy</li>
            <li>Terms</li>
          </ul>
        </div>

        {/* Contact Section */}

        <div>
          <h3
            className="
            text-xl
            font-bold
            flex
            gap-3
            items-center
            "
          >
            <span>📩</span>
            Get In Touch
          </h3>

          <div
            className="
            mt-6
            space-y-5
            "
          >
            <input
              placeholder="Enter your email"
              className="
              w-full
              h-16
              px-6
              rounded-2xl
              bg-transparent
              border
        border(--border-color)
              outline-none
        text-(--text-primary)
              placeholder:text-gray-400
              focus:border-purple-500
              transition
              "
            />

            <textarea
              placeholder="Write your message..."
              className="
              w-full
              h-40
              px-6
              py-5
              rounded-2xl
              bg-transparent
              border
        border(--border-color)
              outline-none
              resize-none
        text-(--text-primary)
              placeholder:text-gray-400
              focus:border-purple-500
              transition
              "
            />

            <button
              className="
              w-full
              h-16
              rounded-2xl
              bg-linear-to-r
              from-purple-600
              to-blue-600
              text-white
              font-bold
              text-lg
              hover:scale-[1.02]
              transition
              "
            >
              Send Message
            </button>
          </div>
        </div>
      </div>

      {/* Bottom */}

      <div
        className="
        border-t
  border(--border-color)
        py-5
        text-center
        opacity-60
        "
      >
        © 2026 Placify. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
