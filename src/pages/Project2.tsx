import React from "react";

const Project2 = () => {
  return (
    <div className="bg-gray-950 text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-gray-900">
        <div className="absolute inset-0">
          <img
            src="/images/projects/the-5th-IQYR7N67dhM-unsplash.jpg"
            alt="Luxury watch hero"
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="relative text-center px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-cyan-400 drop-shadow-lg">
            The Watch
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200">
            Luxury watch eCommerce project
          </p>
        </div>
      </section>

      {/* Project Content */}
      <section className="py-16 container mx-auto px-6">
        <div className="space-y-12">
          {/* About */}
          <div>
            <h2 className="text-3xl font-bold text-cyan-400 mb-4">About the Project</h2>
            <p className="text-gray-300 leading-relaxed">
              The Watch is a modern eCommerce website I designed and developed for a luxury watch
              retailer. The focus was on elegant UI/UX, responsive layouts, and a smooth checkout
              experience.
            </p>
          </div>

          {/* Features */}
          <div>
            <h2 className="text-3xl font-bold text-cyan-400 mb-4">Features</h2>
            <ul className="space-y-2 text-gray-300">
              <li>⚡ Responsive, mobile-first design</li>
              <li>🛒 Custom shopping cart & checkout flow</li>
              <li>🔎 SEO-friendly product pages</li>
              <li>📈 Integrated analytics dashboard</li>
            </ul>
          </div>

          {/* Preview */}
          <div>
            <h2 className="text-3xl font-bold text-cyan-400 mb-6">Preview</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="overflow-hidden rounded-xl shadow-lg hover:scale-105 transition-transform">
                <img
                  src="/images/projects/the-5th-IQYR7N67dhM-unsplash.jpg"
                  alt="The Watch homepage"
                  className="w-full h-80 object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-xl shadow-lg hover:scale-105 transition-transform">
                <img
                  src="/images/projects/true-agency-9Bjog5FZ-oc-unsplash.jpg"
                  alt="The Watch product page"
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>

          {/* Back Button */}
          <div className="pt-8">
            <a
              href="/projects"
              className="inline-block bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg text-white font-semibold transition"
            >
              ← Back to Projects
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project2;
