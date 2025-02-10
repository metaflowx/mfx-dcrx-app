import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-4 text-center">Terms and Conditions</h1>
      <div className="space-y-6 text-gray-700">
        <section>
          <h2 className="text-xl font-semibold">1. Introduction</h2>
          <p>Welcome to [Your Company Name]! These Terms and Conditions govern your use of our website, services, and products. By accessing or using our platform, you agree to be bound by these terms. If you do not agree, please refrain from using our services.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">2. Definitions</h2>
          <ul className="list-disc list-inside">
            <li><strong>Company</strong> refers to [Your Company Name].</li>
            <li><strong>User</strong> refers to any person accessing or using our services.</li>
            <li><strong>Services</strong> refer to the website, applications, and other offerings provided by us.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">3. User Obligations</h2>
          <ul className="list-disc list-inside">
            <li>You must be at least 18 years old to use our services.</li>
            <li>You agree to provide accurate and truthful information when registering or using our services.</li>
            <li>You are responsible for maintaining the confidentiality of your account details.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">4. Prohibited Activities</h2>
          <p>Users must not:</p>
          <ul className="list-disc list-inside">
            <li>Engage in unlawful or fraudulent activities.</li>
            <li>Attempt to hack, modify, or interfere with our website or services.</li>
            <li>Post or distribute harmful, offensive, or illegal content.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">5. Intellectual Property</h2>
          <p>All content, trademarks, and materials on our platform are the property of [Your Company Name] or licensed to us. You may not use, copy, or distribute our content without permission.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">6. Limitation of Liability</h2>
          <p>We are not liable for any damages, losses, or disruptions caused by the use of our services, including but not limited to direct, indirect, incidental, or consequential damages.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">7. Termination</h2>
          <p>We reserve the right to terminate or suspend your account at our discretion if you violate these terms.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">8. Privacy Policy</h2>
          <p>Your use of our services is also governed by our Privacy Policy, which outlines how we collect, store, and use your personal information.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">9. Changes to Terms</h2>
          <p>We may update these Terms and Conditions from time to time. Any changes will be posted on our website, and continued use of our services constitutes acceptance of the revised terms.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">10. Contact Information</h2>
          <p>For any questions or concerns regarding these Terms and Conditions, please contact us at [Your Contact Email].</p>
        </section>

        <p className="text-sm text-gray-500 text-center mt-6">Last Updated: [Date]</p>
      </div>
    </div>
  );
};

export default TermsAndConditions;