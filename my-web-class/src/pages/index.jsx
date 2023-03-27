import Head from 'next/head';
import React, { useState } from 'react';
import Header from '../components/Header';
import MainContent from '../components/MainContent';
import Footer from '../components/Footer';

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
