import React from 'react';

const CookiePolicy: React.FC = () => {
  return (
    <main className="max-w-5xl mx-auto p-8 mt-16 bg-white rounded-lg shadow-md prose prose-blue">
      <h1 className="text-4xl font-bold mb-6 text-blue-700 border-b-4 border-blue-300 pb-2">
        Cookie Policy
      </h1>

      <p className="text-gray-700 leading-relaxed mb-6">
        This Cookie Policy explains how TheEcoTech Digital Agency uses cookies and similar technologies on our website.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-blue-600">1. What Are Cookies?</h2>
        <p className="text-gray-700 leading-relaxed">
          Cookies are small text files stored on your device that help us recognize your browser and remember your preferences.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-blue-600">2. How We Use Cookies</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li><strong>Essential Cookies:</strong> Necessary for website functionality and security.</li>
          <li><strong>Performance Cookies:</strong> Help us understand how visitors interact with our website by collecting anonymous data.</li>
          <li><strong>Functional Cookies:</strong> Remember your preferences and improve user experience.</li>
          <li><strong>Advertising Cookies:</strong> Used to deliver relevant ads and track campaign effectiveness.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-blue-600">3. Third-Party Cookies</h2>
        <p className="text-gray-700 leading-relaxed">
          We may allow third-party services, such as analytics and advertising partners, to place cookies on your device.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-blue-600">4. Managing Cookies</h2>
        <p className="text-gray-700 leading-relaxed">
          You can control or disable cookies through your browser settings, but this may affect the functionality of our website.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-blue-600">5. Changes to This Policy</h2>
        <p className="text-gray-700 leading-relaxed">
          We may update this Cookie Policy periodically. Changes will be posted here with the latest revision date.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3 text-blue-600">Contact Us</h2>
        <p className="text-gray-700 leading-relaxed">
          For questions about our Cookie Policy, please contact us at{' '}
          <a href="mailto:theecotechh@gmail.com" className="text-blue-600 hover:underline">
            theecotechh@gmail.com
          </a>.
        </p>
      </section>
    </main>
  );
};

export default CookiePolicy;
