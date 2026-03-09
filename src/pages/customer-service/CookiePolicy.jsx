import React from 'react';

const CookiePolicy = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-4xl font-extrabold text-black mb-8">Cookie Policy</h1>
      <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
        <p>Last updated: October 2026</p>
        
        <h2 className="text-2xl font-bold text-black mt-8">1. What Are Cookies</h2>
        <p>As is common practice with almost all professional websites this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it and why we sometimes need to store these cookies.</p>
        
        <h2 className="text-2xl font-bold text-black mt-8">2. How We Use Cookies</h2>
        <p>We use cookies for a variety of reasons detailed below. Unfortunately in most cases there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site.</p>
        
        <h2 className="text-2xl font-bold text-black mt-8">3. Essential Cookies</h2>
        <p>If you create an account with us then we will use cookies for the management of the signup process and general administration. These cookies will usually be deleted when you log out however in some cases they may remain afterwards to remember your site preferences when logged out.</p>
      </div>
    </div>
  );
};

export default CookiePolicy;
