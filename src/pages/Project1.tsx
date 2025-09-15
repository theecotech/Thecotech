import React, { useState } from "react";

const Project1 = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-gray-950 text-white min-h-screen relative">
      {/* Navbar */}
      <nav className="bg-gray-900/80 fixed top-0 left-0 w-full z-50 backdrop-blur-md">
        <div className="container mx-auto flex justify-between items-center px-6 py-4">
          <a href="#top" className="text-2xl font-bold text-cyan-400">
            NexusFlow
          </a>
          <ul className="hidden md:flex space-x-8 font-medium">
            <li><a href="#features" className="hover:text-cyan-400">Features</a></li>
            <li><a href="#pricing" className="hover:text-cyan-400">Pricing</a></li>
            <li><a href="#stats" className="hover:text-cyan-400">Stats</a></li>
            <li><a href="#contact" className="hover:text-cyan-400">Contact</a></li>
          </ul>
          <a href="#" className="hidden md:block bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg">
            Access Terminal
          </a>
          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/80 z-40 flex flex-col items-center justify-center space-y-6 text-lg">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-4 right-6 text-3xl text-white"
          >
            ✕
          </button>
          <a href="#features" onClick={() => setMenuOpen(false)}>Features</a>
          <a href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</a>
          <a href="#stats" onClick={() => setMenuOpen(false)}>Stats</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          <a href="#" className="bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded-lg">Access Terminal</a>
        </div>
      )}

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-6xl md:text-7xl font-extrabold">
          <span className="text-cyan-400">NEXUS</span>{" "}
          <span className="text-white">FLOW</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl">
          The quantum leap in team collaboration. Connect minds, sync realities, achieve impossible.
        </p>
        <div className="mt-8 space-x-4">
          <a href="#" className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg text-white font-semibold">
            Initialize System
          </a>
          <a href="#" className="border border-cyan-500 px-6 py-3 rounded-lg text-cyan-400 font-semibold hover:bg-cyan-500 hover:text-white">
            View Documentation
          </a>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-16 bg-gray-900">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-4xl font-bold text-cyan-400">99%</h3>
            <p className="mt-2 text-gray-300">Uptime</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-cyan-400">5000+</h3>
            <p className="mt-2 text-gray-300">Teams Synced</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-cyan-400">120,000+</h3>
            <p className="mt-2 text-gray-300">Users Connected</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-cyan-500/40 transition">
            <h3 className="text-xl font-semibold text-cyan-400">Quantum Sync</h3>
            <p className="mt-2 text-gray-300">Experience real-time collaboration across multiple realities.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-cyan-500/40 transition">
            <h3 className="text-xl font-semibold text-cyan-400">Neural Link</h3>
            <p className="mt-2 text-gray-300">Connect directly to your teammates’ ideas and thoughts.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-cyan-500/40 transition">
            <h3 className="text-xl font-semibold text-cyan-400">AI Optimization</h3>
            <p className="mt-2 text-gray-300">Let intelligent algorithms streamline your workflow.</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 bg-gray-900">
        <h2 className="text-3xl font-bold text-center mb-10">Pricing</h2>
        <div className="container mx-auto grid md:grid-cols-2 gap-8 px-6">
          <div className="bg-gray-800 p-8 rounded-xl text-center shadow-lg">
            <h3 className="text-xl font-semibold text-cyan-400">Starter</h3>
            <p className="text-3xl font-bold mt-4">$9<span className="text-lg text-gray-400">/mo</span></p>
            <ul className="mt-4 space-y-2 text-gray-300">
              <li>Basic Features</li>
              <li>10 Users</li>
              <li>Email Support</li>
            </ul>
            <a href="#" className="mt-6 inline-block bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg text-white font-semibold">
              Get Started
            </a>
          </div>
          <div className="bg-gray-800 p-8 rounded-xl text-center shadow-lg">
            <h3 className="text-xl font-semibold text-cyan-400">Pro</h3>
            <p className="text-3xl font-bold mt-4">$29<span className="text-lg text-gray-400">/mo</span></p>
            <ul className="mt-4 space-y-2 text-gray-300">
              <li>All Starter Features</li>
              <li>Unlimited Users</li>
              <li>Priority Support</li>
            </ul>
            <a href="#" className="mt-6 inline-block bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg text-white font-semibold">
              Choose Pro
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Contact Us</h2>
        <div className="grid md:grid-cols-2 gap-10">
          <form className="flex flex-col space-y-4">
            <input type="text" placeholder="Your Name" className="p-3 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-cyan-400 outline-none" />
            <input type="email" placeholder="Your Email" className="p-3 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-cyan-400 outline-none" />
            <textarea placeholder="Your Message" rows={5} className="p-3 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-cyan-400 outline-none"></textarea>
            <button type="submit" className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg text-white font-semibold">
              Send Message
            </button>
          </form>
          <div className="flex flex-col justify-center text-gray-300 space-y-4">
            <p><span className="font-semibold text-cyan-400">Email:</span> support@nexusflow.com</p>
            <p><span className="font-semibold text-cyan-400">Phone:</span> +123 456 7890</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-6 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} NexusFlow. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Project1;
