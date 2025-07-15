import React, { useState } from "react";

export default function NewsletterSubscription() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = async () => {
    if (!email) {
      setMessage("Please enter an email address.");
      return;
    }

    // Fake backend request simulation
    try {
      // Here you would implement the real backend call, for example:
      // await fetch('/api/subscribe', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email }),
      // });

      setMessage("Subscription successful!");
      setEmail("");
    } catch (error) {
      setMessage("Failed to subscribe. Please try again later.");
    }
  };

  return (
    <div className="bg-gray-200 px-6 py-4 flex items-center justify-between max-w-full">
      <nav className="flex space-x-8 text-black text-sm font-medium">
        <a href="#home" className="hover:underline">
          Home
        </a>
        <a href="#services" className="hover:underline">
          Services
        </a>
        <a href="#projects" className="hover:underline">
          Projects
        </a>
        <a href="#testimonials" className="hover:underline">
          Testimonials
        </a>
        <a href="#contact" className="hover:underline">
          Contact
        </a>
      </nav>
      <div className="flex items-center space-x-2">
        <span className=" font-medium hidden sm:inline">Subscribe Us</span>
        <input
          type="email"
          placeholder="Enter Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="rounded-l px-3 py-1 w-48 sm:w-64 text-sm border-2"
          aria-label="Enter Email Address"
        />
        <button
          onClick={handleSubscribe}
          className="bg-white text-blue-600 font-semibold px-4 py-1 rounded-r hover:bg-gray-100 transition"
          aria-label="Subscribe button"
        >
          Subscribe
        </button>
      </div>
      {message && (
        <p
          className={`absolute top-full mt-1 text-white text-xs ${
            message.includes("successful") ? "text-green-300" : "text-red-300"
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
}
