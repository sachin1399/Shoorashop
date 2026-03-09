import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-4xl font-extrabold text-black mb-8">Privacy Policy</h1>
      <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
        <p>Last updated: October 2026</p>
        
        <h2 className="text-2xl font-bold text-black mt-8">1. Information We Collect</h2>
        <p>We collect information you provide directly to us, such as when you create or modify your account, request on-demand services, contact customer support, or otherwise communicate with us. This information may include: name, email, phone number, postal address, profile picture, payment method, and other personal information you choose to provide.</p>
        
        <h2 className="text-2xl font-bold text-black mt-8">2. How We Use Information</h2>
        <p>We use the information we collect about you to provide, maintain, and improve our services, including to facilitate payments, send receipts, provide products and services you request, and develop new features.</p>
        
        <h2 className="text-2xl font-bold text-black mt-8">3. Information Sharing And Disclosure</h2>
        <p>We may share the information we collect about you as described in this Statement or as described at the time of collection or sharing. We do not sell your personal data to third parties.</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
