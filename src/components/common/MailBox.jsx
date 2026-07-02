import React from "react";
import { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaArrowRight,
} from "react-icons/fa";

const MailBox = () => {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.subject || !formData.message) {
      setSubmitStatus("error");
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setSubmitStatus("success");

      setTimeout(() => {
        setFormData({ email: "", subject: "", message: "" });
        setSubmitStatus(null);
      }, 2500);
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="md:col-span-3">
      <h4 className="font-semibold text-2xl mb-2">Get in touch</h4>
      <p className="text-gray-400 mb-8">
        Have questions? We'd love to hear from you.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          type="email"
          name="email"
          placeholder="Your email address"
          value={formData.email}
          onChange={handleChange}
          className="w-full bg-white/5 border border-white/10 focus:border-violet-500 rounded-2xl px-6 py-4 outline-none transition placeholder:text-gray-500"
          required
        />

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full bg-white/5 border border-white/10 focus:border-violet-500 rounded-2xl px-6 py-4 outline-none transition placeholder:text-gray-500"
          required
        />

        <textarea
          name="message"
          placeholder="Your message..."
          rows="5"
          value={formData.message}
          onChange={handleChange}
          className="w-full bg-white/5 border border-white/10 focus:border-violet-500 rounded-3xl px-6 py-4 outline-none transition resize-y placeholder:text-gray-500"
          required
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-white text-black font-semibold py-4 rounded-2xl hover:bg-gray-100 transition flex items-center justify-center gap-3 disabled:opacity-70"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
          {!isSubmitting && <FaArrowRight />}
        </button>

        {submitStatus === "success" && (
          <p className="text-emerald-400 text-center font-medium">
            Message sent successfully! 🎉
          </p>
        )}
        {submitStatus === "error" && (
          <p className="text-red-400 text-center font-medium">
            Please fill all fields
          </p>
        )}
      </form>
    </div>
  );
};

export default MailBox;
