import Head from 'next/head';
import React, { useState } from 'react';
import Header from '../components/tailwind-css/header';
import MainContent from '../components/tailwind-css/mainContent';
import Footer from '../components/tailwind-css/footer';

export default function Home() {
  const [analyticsConsent, setAnalyticsConsent] = useState('unknown');

  const handlePrivacyAgree = () => {
    setAnalyticsConsent('granted');
    // Enable Google Analytics tracking here
  };

  return (
    <>
      <Head>
        <title>My Web Class</title>
        <meta property="og:title" content="" />
        <meta property="og:description" content="" />
        <meta property="og:image" content="assets/images/logo.png" />
        <meta property="og:url" content="" />
      </Head>
      <Header onPrivacyAgree={handlePrivacyAgree} />
      <MainContent />
      <Footer />
    </>
  );
}
