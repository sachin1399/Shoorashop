import React from 'react';

const TermsOfService = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-4xl font-extrabold text-black mb-8">Terms of Service</h1>
      <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
        <p>Last updated: October 2026</p>
        
        <h2 className="text-2xl font-bold text-black mt-8">1. Acceptance of Terms</h2>
        <p>By accessing or using our website, you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the service.</p>
        
        <h2 className="text-2xl font-bold text-black mt-8">2. Purchases</h2>
        <p>If you wish to purchase any product or service made available through the Service ("Purchase"), you may be asked to supply certain information relevant to your Purchase including, without limitation, your credit card number, the expiration date of your credit card, and your billing address.</p>
        
        <h2 className="text-2xl font-bold text-black mt-8">3. Accounts</h2>
        <p>When you create an account with us, you must provide us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.</p>
      </div>
    </div>
  );
};

export default TermsOfService;
