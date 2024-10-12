/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);
  const [focusedField, setFocusedField] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFocus = (field) => {
    setFocusedField(field);
  };

  const handleBlur = () => {
    setFocusedField("");
  };

  const validate = () => {
    let errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name) {
      errors.name = "Please enter your name.";
    }

    if (!formData.email || !emailRegex.test(formData.email)) {
      errors.email = "Please enter a valid email address.";
    }

    if (!formData.message) {
      errors.message = "Please enter your message.";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSending(true);
    try {
      await emailjs.send(
        "service_hdnbwzb",
        "template_mjxg4tn",
        formData,
        "USJtQCr7P1OefsB0j"
      );
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast.error("Failed to send message, please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-6"
      id="contact"
    >
      <div className="shadow-lg rounded-lg overflow-hidden w-full max-w-4xl">
        <div className="text-white p-8">
          <h2 className="text-3xl font-bold">Get in Touch</h2>
          <p className="mt-2">
            We'd love to hear from you! Fill out the form below to get started.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="p-8">
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <motion.input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onFocus={() => handleFocus("name")}
              onBlur={handleBlur}
              className={`w-full t px-3 py-2 bg-black text-white border rounded-lg focus:outline-none ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
              animate={{
                scale: focusedField === "name" ? 1.02 : 1,
                borderColor:
                  focusedField === "name"
                    ? "#4F46E5"
                    : errors.name
                    ? "red"
                    : "gray",
              }}
              transition={{ duration: 0.2 }}
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name}</p>
            )}
          </motion.div>
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <motion.input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onFocus={() => handleFocus("email")}
              onBlur={handleBlur}
              className={`w-full px-3 bg-black py-2 text-white border rounded-lg focus:outline-none ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
              animate={{
                scale: focusedField === "email" ? 1.02 : 1,
                borderColor:
                  focusedField === "email"
                    ? "#4F46E5"
                    : errors.email
                    ? "red"
                    : "gray",
              }}
              transition={{ duration: 0.2 }}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </motion.div>
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <motion.textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              onFocus={() => handleFocus("message")}
              onBlur={handleBlur}
              className={`w-full bg-black px-3 py-2 text-white border rounded-lg focus:outline-none ${
                errors.message ? "border-red-500" : "border-gray-300"
              }`}
              rows="5"
              animate={{
                scale: focusedField === "message" ? 1.02 : 1,
                borderColor:
                  focusedField === "message"
                    ? "#4F46E5"
                    : errors.message
                    ? "red"
                    : "gray",
              }}
              transition={{ duration: 0.2 }}
            />
            {errors.message && (
              <p className="text-red-500 text-xs mt-1">{errors.message}</p>
            )}
          </motion.div>
          <div className="flex justify-end">
            <motion.button
              type="submit"
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-150"
              disabled={isSending}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isSending ? "Sending..." : "Send Message"}
            </motion.button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;
