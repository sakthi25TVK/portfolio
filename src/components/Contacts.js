import React, { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Example async logic (e.g., send form data)
      // await fetch("/api/send", { method: "POST", ... });

      alert("Send successfully ✅");
    } catch (error) {
      console.error("Submission failed:", error);
      alert("❌ Failed to send");
    }
  };

  console.log(name, email, message);

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text font-orbitron">Get In Touch</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Have a project in mind or want to collaborate? Reach out to me</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2 glass-card p-8 rounded-xl">
            <h3 className="text-xl font-bold mb-6">Contact Form</h3>
            <form id="contactForm" onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-gray-800 bg-opacity-50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  placeholder="John Doe"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-gray-800 bg-opacity-50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  placeholder="you@example.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full px-4 py-3 bg-gray-800 bg-opacity-50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  placeholder="Tell me about your project..."
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg font-medium hover:opacity-90 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="lg:w-1/2">
            <div className="glass-card p-8 rounded-xl h-full">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-cyan-900 bg-opacity-30 text-cyan-400">
                    <i className="fas fa-envelope text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-gray-400">sakthivel20047@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-purple-900 bg-opacity-30 text-purple-400">
                    <i className="fas fa-phone-alt text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p className="text-gray-400">+91 9176695886</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-yellow-900 bg-opacity-30 text-yellow-400">
                    <i className="fas fa-map-marker-alt text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p className="text-gray-400">INDIA, Tamil NADU, Chennai</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-blue-900 bg-opacity-30 text-blue-400">
                    <i className="fab fa-linkedin-in text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-medium">LinkedIn</h4>
                    <p className="text-gray-400">https://www.linkedin.com/in/sakthivel-s-390893335</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h4 className="font-medium mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  <a href="#" className="p-3 rounded-full bg-gray-800 bg-opacity-50 hover:bg-cyan-500 hover:text-white transition">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="#" className="p-3 rounded-full bg-gray-800 bg-opacity-50 hover:bg-blue-500 hover:text-white transition">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="p-3 rounded-full bg-gray-800 bg-opacity-50 hover:bg-purple-500 hover:text-white transition">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" className="p-3 rounded-full bg-gray-800 bg-opacity-50 hover:bg-red-500 hover:text-white transition">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

