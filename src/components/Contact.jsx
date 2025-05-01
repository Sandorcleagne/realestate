"use client";
import React, { useState } from "react";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ type: "", message: "" });
  async function handleSubmit(event) {
    try {
      event.preventDefault();
      setLoading(true);
      const formData = new FormData(event.target);

      formData.append("access_key", "c18de7b2-3f14-4c5c-a893-2dcbe6a10bce");

      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });
      const result = await response.json();
      if (result.success) {
        setAlert({ type: "success", message: "Message sent successfully!" });
        event.target.reset();
      } else {
        setAlert({ type: "error", message: "Something went wrong." });
      }
    } catch (error) {
      setAlert({
        type: "error",
        message: "Failed to submit. Please try again.",
      });
    } finally {
      setLoading(false);
    }
    setTimeout(() => {
      setAlert({ type: "", message: "" });
    }, 3000);
  }

  return (
    <div
      className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden"
      id="contact"
    >
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-4">
        Contact{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          With Us
        </span>
      </h2>
      <p className="text-gray-500 max-w-80 text-center mb-8 mx-auto">
        Ready to make a move? Let's Build your future together!
      </p>
      {alert.message && (
        <div
          className={`mb-4 p-2 rounded text-white transition-all duration-300 ${
            alert.type === "success" ? "bg-green-600" : "bg-red-600"
          }`}
        >
          {alert.message}
        </div>
      )}
      <form
        className="max-w-2xl mx-auto text-gray-600 pt-8"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 text-left">
            Your Name
            <input
              type="text"
              placeholder="Enter your name"
              required
              name="name"
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
            />
          </div>
          <div className="w-full md:w-1/2 text-left md:pl-4">
            Your Email
            <input
              type="email"
              placeholder="Enter your Email"
              required
              name="email"
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
            />
          </div>
        </div>
        <div className="my-6 text-left">
          Message
          <textarea
            rows="4"
            placeholder="Enter your message"
            required
            name="message"
            className="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none"
          />
        </div>
        <button
          type="submit"
          className="bg-red-800 text-white py-3 px-6 rounded hover:bg-red-700 transition duration-300 cursor-pointer"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default Contact;
