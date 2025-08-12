import React from 'react';

const TermsOfUse: React.FC = () => {
  return (
    <main className="max-w-5xl mx-auto p-8 mt-16 bg-white rounded-lg shadow-md prose prose-blue">
      <h1 className="text-4xl font-bold mb-6 text-blue-700 border-b-4 border-blue-300 pb-2">
        Terms of Use
      </h1>

      <p className="text-gray-700 leading-relaxed mb-6">
        Welcome to TheEcoTech Digital Agency website. By accessing or using our website and services, you agree to comply with these Terms of Use. Please read them carefully.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-blue-600">1. Use of Our Website</h2>
        <p className="text-gray-700 leading-relaxed">
          You agree to use our website for lawful purposes only and in a way that does not infringe the rights of others or restrict their use and enjoyment of the site.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-blue-600">2. Intellectual Property</h2>
        <p className="text-gray-700 leading-relaxed">
          All content, including text, graphics, logos, and software, is the intellectual property of TheEcoTech or its licensors. You may not reproduce, distribute, or create derivative works without our explicit permission.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-blue-600">3. User Conduct</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>You agree not to post or transmit any unlawful, harmful, defamatory, or abusive content.</li>
          <li>You will not use the website to engage in fraudulent activities or to collect data unlawfully.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-blue-600">4. Disclaimers and Limitation of Liability</h2>
        <p className="text-gray-700 leading-relaxed mb-2">
          Our website and services are provided “as is” without warranties of any kind. We do not guarantee the accuracy, completeness, or reliability of any content.
        </p>
        <p className="text-gray-700 leading-relaxed">
          To the fullest extent permitted by law, TheEcoTech will not be liable for any damages arising from your use of the website.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-blue-600">5. Changes to Terms</h2>
        <p className="text-gray-700 leading-relaxed">
          We reserve the right to modify these Terms of Use at any time. Changes will be posted here and your continued use signifies acceptance.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-blue-600">6. Governing Law</h2>
        <p className="text-gray-700 leading-relaxed">
          These terms are governed by the laws applicable in your jurisdiction without regard to conflict of laws principles.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3 text-blue-600">Contact Us</h2>
        <p className="text-gray-700 leading-relaxed">
          If you have any questions about these Terms of Use, please contact us at{' '}
          <a href="mailto:theecotechh@gmail.com" className="text-blue-600 hover:underline">
            theecotechh@gmail.com
          </a>.
        </p>
      </section>
    </main>
  );
};

export default TermsOfUse;
