import React from "react";

const Project3: React.FC = () => {
  return (
    <div className="bg-gray-950 text-white min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-gray-900/90 backdrop-blur-md shadow-md z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="flex items-center gap-2 text-xl font-bold text-cyan-400">
            SEO Dream
            <img src="/assets/images/logo-icon.png" alt="logo" className="h-6 w-6" />
          </a>
          <nav>
            <ul className="hidden md:flex gap-6 text-sm font-medium">
              <li><a href="#top" className="hover:text-cyan-400">Home</a></li>
              <li><a href="#features" className="hover:text-cyan-400">Features</a></li>
              <li><a href="#about" className="hover:text-cyan-400">About Us</a></li>
              <li><a href="#services" className="hover:text-cyan-400">Services</a></li>
              <li><a href="#portfolio" className="hover:text-cyan-400">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-cyan-400">Contact</a></li>
              <li>
                <a
                  href="#contact"
                  className="bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded-lg text-white transition"
                >
                  Get Your Quote
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Banner */}
      <section id="top" className="pt-32 bg-gray-900">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="space-y-6">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-gray-800 p-4 rounded-lg">
                <h6 className="text-sm text-gray-400">Agency Status:</h6>
                <h4 className="text-lg font-bold">Ready Work</h4>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <h6 className="text-sm text-gray-400">Price:</h6>
                <h4 className="text-lg font-bold">$720/Month</h4>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <h6 className="text-sm text-gray-400">Schedules</h6>
                <h4 className="text-lg font-bold">$450/Meeting</h4>
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-cyan-400">
              SEO & Digital Marketing Agency
            </h2>
            <a
              href="#contact"
              className="inline-block bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg text-white font-semibold transition"
            >
              Get Your Quote
            </a>
          </div>
          {/* Right */}
          <div>
            <img
              src="/assets/images/banner-right-image.png"
              alt="banner"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {[
            { num: "01", title: "Reach Out", text: "This template is based on Bootstrap 5 CSS. You are free to customize anything." },
            { num: "02", title: "Develop a Strategy", text: "Lorem ipsum dolor sit amet consectetur adipiscing elit." },
            { num: "03", title: "Implementation", text: "This template is free to use, consider supporting us." },
            { num: "04", title: "Analyze the result", text: "Supports circular progress animations." },
          ].map((f, i) => (
            <div key={i} className="bg-gray-800 p-6 rounded-xl hover:scale-105 transition">
              <h6 className="text-cyan-400 text-lg font-bold">{f.num}</h6>
              <h4 className="text-xl font-semibold mt-2">{f.title}</h4>
              <p className="text-gray-400 mt-2">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <img src="/assets/images/about-left-image.png" alt="about" className="rounded-lg" />
          <div>
            <h6 className="text-sm uppercase tracking-wider text-cyan-400">About Us</h6>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Top <em className="text-cyan-400 not-italic">marketing</em> agency & consult your website{" "}
              <span className="text-green-400">with us</span>
            </h2>
            <div className="grid grid-cols-3 gap-6 mt-6">
              {[
                { stat: "750+", label: "projects finished" },
                { stat: "340+", label: "happy clients" },
                { stat: "128+", label: "awards" },
              ].map((item, i) => (
                <div key={i} className="bg-gray-800 p-4 rounded-lg text-center">
                  <h4 className="text-xl font-bold">{item.stat}</h4>
                  <h6 className="text-gray-400 text-sm">{item.label}</h6>
                </div>
              ))}
            </div>
           
            <a
              href="#"
              className="inline-block mt-6 bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg text-white font-semibold transition"
            >
              Discover Company
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 container mx-auto px-6">
        <div className="text-center mb-12">
          <h6 className="text-cyan-400 uppercase">Our Services</h6>
          <h2 className="text-3xl md:text-4xl font-bold">
            Discover What We Do & <span className="text-green-400">Offer</span> To Our{" "}
            <em className="text-cyan-400 not-italic">Clients</em>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { img: "/assets/images/service-icon-01.png", title: "Similar Websites", desc: "We create similar websites with custom strategies." },
            { img: "/assets/images/service-icon-02.png", title: "Website Trends", desc: "Stay updated with modern website trends." },
            { img: "/assets/images/service-icon-03.png", title: "Traffic Analysis", desc: "Boost website traffic with analysis and optimization." },
          ].map((s, i) => (
            <div key={i} className="bg-gray-800 p-6 rounded-xl text-center hover:shadow-lg transition">
              <img src={s.img} alt="service" className="mx-auto h-16 mb-4" />
              <h4 className="text-xl font-semibold">{s.title}</h4>
              <p className="text-gray-400 mt-2">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6 text-center">
          <h6 className="text-cyan-400 uppercase">Our Portfolio</h6>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Discover Our Recent <em className="text-green-400 not-italic">Projects</em>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { img: "/assets/images/portfolio-01.jpg", title: "Awesome Project 101" },
              { img: "/assets/images/portfolio-02.jpg", title: "Awesome Project 102" },
              { img: "/assets/images/portfolio-03.jpg", title: "Awesome Project 103" },
            ].map((p, i) => (
              <div key={i} className="rounded-xl overflow-hidden shadow-lg hover:scale-105 transition">
                <img src={p.img} alt="portfolio" className="w-full h-64 object-cover" />
                <h4 className="p-4 bg-gray-800">{p.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 container mx-auto px-6">
        <div className="text-center mb-12">
          <h6 className="text-cyan-400 uppercase">Contact Us</h6>
          <h2 className="text-3xl md:text-4xl font-bold">
            Fill Out The Form Below To <span className="text-green-400">Get</span> In{" "}
            <em className="text-cyan-400 not-italic">Touch</em> With Us
          </h2>
        </div>
        <form className="max-w-3xl mx-auto space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Name"
              required
              className="p-3 rounded-lg bg-gray-800 w-full outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <input
              type="text"
              placeholder="Surname"
              required
              className="p-3 rounded-lg bg-gray-800 w-full outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              className="p-3 rounded-lg bg-gray-800 w-full outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <input
              type="text"
              placeholder="Subject"
              className="p-3 rounded-lg bg-gray-800 w-full outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>
          <textarea
            placeholder="Message"
            required
            className="p-3 rounded-lg bg-gray-800 w-full h-40 outline-none focus:ring-2 focus:ring-cyan-400"
          ></textarea>
          <button
            type="submit"
            className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg text-white font-semibold transition"
          >
            Send Message Now
          </button>
        </form>
        <div className="mt-12 text-center text-gray-300 space-y-2">
          <p>Email: info@company.com</p>
          <p>Phone: +001-002-0034</p>
          <p>Location: 26th Street, Digital Villa</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-6 text-center text-gray-400 text-sm">
        <p>
          © 2025 SEO Dream Co., Ltd.
          <br />
          Web Designed by TemplateMo
        </p>
      </footer>
    </div>
  );
};

export default Project3;
