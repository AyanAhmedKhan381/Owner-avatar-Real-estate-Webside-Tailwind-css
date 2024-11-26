import Image from "next/image";

export default function ContactForm() {
  return (
    <div
      className="relative flex justify-center items-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/pic/minimal-hero-05.jpg')", // Update with your image path
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-gray-900/80 z-0"></div>

      {/* Contact Form */}
      <div className="relative z-10 bg-white/10 rounded-2xl shadow-2xl p-6 max-w-md w-full backdrop-blur-md max-h-[76vh] h-auto my-12 mx-4 mb-10">
        <h2 className="text-3xl font-semibold text-white text-center mb-4">
          Contact Us
        </h2>
        <p className="text-center text-gray-300 text-sm mb-6">
          We’re here to help! Send us a message, and we’ll respond promptly.
        </p>
        <form className="space-y-4">
          {/* Full Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-xs font-medium text-gray-200"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="mt-2 p-2 w-full border border-gray-500/30 rounded-lg bg-gray-800/60 text-white focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 placeholder-gray-400"
            />
          </div>

          {/* Email Address */}
          <div>
            <label
              htmlFor="email"
              className="block text-xs font-medium text-gray-200"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="mt-2 p-2 w-full border border-gray-500/30 rounded-lg bg-gray-800/60 text-white focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 placeholder-gray-400"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label
              htmlFor="phone"
              className="block text-xs font-medium text-gray-200"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              className="mt-2 p-2 w-full border border-gray-500/30 rounded-lg bg-gray-800/60 text-white focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 placeholder-gray-400"
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-xs font-medium text-gray-200"
            >
              Your Message
            </label>
            <textarea
              rows={4}
              id="message"
              name="message"
              placeholder="Type your message here..."
              className="mt-2 p-2 w-full border border-gray-500/30 rounded-lg bg-gray-800/60 text-white focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 placeholder-gray-400"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-500 to-rose-600 text-white py-2 rounded-lg shadow-lg hover:bg-gradient-to-l hover:scale-105 transition-transform focus:ring-4 focus:ring-indigo-400 focus:ring-offset-1"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
