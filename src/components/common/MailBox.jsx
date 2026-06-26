import React from "react";

const MailBox = () => {
  return (
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
  );
};

export default MailBox;
