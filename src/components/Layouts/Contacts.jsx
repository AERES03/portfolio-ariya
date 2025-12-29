/** @format */

import React from "react";

function Contacts() {
  return (
    <section id="contact" className="py-20 px-6 text-white">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Have a project in mind or want to work together? Feel free to reach
            out 👋
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Get in Touch</h3>
              <p className="text-gray-400">
                I’m open for freelance projects, collaborations, or just a
                friendly chat.
              </p>
            </div>

            <div className="space-y-3 text-gray-300">
              <p>
                📧 Email:{" "}
                <span className="text-white">aryarezasaputra@email.com</span>
              </p>
              <p>
                💬 WhatsApp: <span className="text-white">+62 81263618443</span>
              </p>
              <p>
                🌍 Location: <span className="text-white">Indonesia</span>
              </p>
            </div>
          </div>

          {/* Form */}
          <form className="bg-white/5 p-6 rounded-2xl shadow-lg space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 bg-white/10 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 bg-white/10 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full px-4 py-3 bg-white/10 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 transition py-3 rounded-lg font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
