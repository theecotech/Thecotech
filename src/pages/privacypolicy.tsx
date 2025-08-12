import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <main className="max-w-5xl mx-auto p-8 mt-16 bg-white rounded-lg shadow-md prose prose-blue">
      <h1 className="text-4xl font-bold mb-6 text-blue-700 border-b-4 border-blue-300 pb-2">
        Privacy Policy
      </h1>
      <p className="text-gray-700 leading-relaxed mb-6">
        At TheEcoTech Digital Agency, we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website or use our services.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-blue-600">1. Information We Collect</h2>
        <p className="text-gray-700 leading-relaxed">
          We collect information that you provide directly to us, such as your name, email address, phone number, and any other details you share through contact forms or communication.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-blue-600">2. How We Use Your Information</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>To provide, operate, and maintain our services.</li>
          <li>To respond to your inquiries and provide customer support.</li>
          <li>To send important updates, marketing communications, and promotional materials (only with your consent).</li>
          <li>To improve our website, products, and services based on user feedback and analytics.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-blue-600">3. Data Security</h2>
        <p className="text-gray-700 leading-relaxed">
          We implement appropriate technical and organizational measures to protect your data from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-blue-600">4. Sharing Your Information</h2>
        <p className="text-gray-700 leading-relaxed">
          We do not sell or rent your personal information. We may share data with trusted third-party service providers who assist in operating our business, provided they comply with confidentiality agreements.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-blue-600">5. Cookies and Tracking Technologies</h2>
        <p className="text-gray-700 leading-relaxed">
          We use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and deliver personalized content.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-blue-600">6. Your Rights</h2>
        <p className="text-gray-700 leading-relaxed">
          You have the right to access, update, or delete your personal information. You can also opt-out of marketing communications at any time.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-blue-600">7. Changes to This Policy</h2>
        <p className="text-gray-700 leading-relaxed">
          We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3 text-blue-600">Contact Us</h2>
        <p className="text-gray-700 leading-relaxed">
          If you have questions or concerns about this Privacy Policy, please contact us at{' '}
          <a href="mailto:theecotechh@gmail.com" className="text-blue-600 hover:underline">
            theecotechh@gmail.com
          </a>.
        </p>
      </section>
    </main>
  );
};

export default PrivacyPolicy;
