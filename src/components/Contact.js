import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import SectionWrapper from "../hoc/SectionWrapper";
import '../styles/tech.scss'
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  //twt-sWQANk9-fguFn
  // template_olw8e1r
  //service_rlz9xbo

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'template_olw8e1r',
        'service_rlz9xbo',
        {
          from_name: form.name,
          to_name: "Abhay Verma",
          from_email: form.email,
          to_email: "nitjsr.akv@gmail.com",
          message: form.message,
        },
        'twt-sWQANk9-fguFn'
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="contact-container">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="contact-form"
      >
        <p className="form-label">Get in touch</p>
        <h3 className="form-title">Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="form-content"
        >
          <label className="form-label-container">
            <span className="form-text">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="form-input"
            />
          </label>
          <label className="form-label-container">
            <span className="form-text">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your Email address?"
              className="form-input"
            />
          </label>
          <label className="form-label-container">
            <span className="form-text">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="form-input"
            />
          </label>

          <button
            type="submit"
            className="form-button"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
    </div>

  );
};

export default SectionWrapper(Contact, "contact");
