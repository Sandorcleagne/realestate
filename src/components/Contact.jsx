import React from "react";

const Contact = () => {
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
      <form className="max-w-2xl mx-auto text-gray-600 pt-8">
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
              type="text"
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
        <buttton
          type="submit"
          className="bg-red-800 text-white py-3 px-6 rounded hover:bg-red-700 transition duration-300 cursor-pointer"
        >
          Send Message
        </buttton>
      </form>
    </div>
  );
};

export default Contact;
