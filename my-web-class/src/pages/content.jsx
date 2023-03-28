import React, { useState } from 'react';
import ContentPage from '../components/ContentPage';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

const sections = [
    {
      id: 'section1',
      title: 'Section 1',
      paragraphs: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis mauris ut lectus sollicitudin, at feugiat purus volutpat. Proin sit amet arcu vitae nisl pharetra vestibulum. Integer auctor turpis a fermentum ultricies. Fusce ac nisl cursus, faucibus nisi a, tincidunt ex. Sed nec neque pellentesque, facilisis odio nec, tempus odio. Vestibulum in purus et metus pellentesque tempor. Curabitur vitae tellus sit amet metus euismod tincidunt.',
        'Aliquam auctor augue massa, ac maximus nibh dapibus vel. Sed sollicitudin orci at nunc feugiat, in bibendum neque malesuada. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam nec ullamcorper sapien, a tempor dui. Ut vel erat sit amet lorem bibendum placerat. In hac habitasse platea dictumst. Praesent ut ante ante. Etiam vel elit id elit eleifend ultricies. Maecenas interdum et libero non porttitor.'
    ,   'Nulla luctus, magna at pulvinar tincidunt, massa lacus fringilla quam, at dapibus libero ligula a nunc. In accumsan consectetur venenatis. Suspendisse a libero et odio feugiat vulputate at sit amet ante. Etiam lacinia nibh non lobortis consequat. Donec feugiat lacus vitae aliquam efficitur. Integer at semper enim, nec tempor dolor. Proin scelerisque auctor consectetur.',
    'Nulla luctus, magna at pulvinar tincidunt, massa lacus fringilla quam, at dapibus libero ligula a nunc. In accumsan consectetur venenatis. Suspendisse a libero et odio feugiat vulputate at sit amet ante. Etiam lacinia nibh non lobortis consequat. Donec feugiat lacus vitae aliquam efficitur. Integer at semper enim, nec tempor dolor. Proin scelerisque auctor consectetur.',
    'Nulla luctus, magna at pulvinar tincidunt, massa lacus fringilla quam, at dapibus libero ligula a nunc. In accumsan consectetur venenatis. Suspendisse a libero et odio feugiat vulputate at sit amet ante. Etiam lacinia nibh non lobortis consequat. Donec feugiat lacus vitae aliquam efficitur. Integer at semper enim, nec tempor dolor. Proin scelerisque auctor consectetur.',
    'Nulla luctus, magna at pulvinar tincidunt, massa lacus fringilla quam, at dapibus libero ligula a nunc. In accumsan consectetur venenatis. Suspendisse a libero et odio feugiat vulputate at sit amet ante. Etiam lacinia nibh non lobortis consequat. Donec feugiat lacus vitae aliquam efficitur. Integer at semper enim, nec tempor dolor. Proin scelerisque auctor consectetur.',  
    ]
    },
    {
      id: 'section2',
      title: 'Section 2',
      paragraphs: [
        'Nulla luctus, magna at pulvinar tincidunt, massa lacus fringilla quam, at dapibus libero ligula a nunc. In accumsan consectetur venenatis. Suspendisse a libero et odio feugiat vulputate at sit amet ante. Etiam lacinia nibh non lobortis consequat. Donec feugiat lacus vitae aliquam efficitur. Integer at semper enim, nec tempor dolor. Proin scelerisque auctor consectetur.',
        'Quisque id lacus non velit aliquet ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse ullamcorper justo et venenatis cursus. Nullam eu augue eget quam convallis consequat vitae et augue. Fusce odio nunc, fermentum vel blandit ac, pharetra sed velit. Maecenas euismod dui eget tempor tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
    ,  'Nulla luctus, magna at pulvinar tincidunt, massa lacus fringilla quam, at dapibus libero ligula a nunc. In accumsan consectetur venenatis. Suspendisse a libero et odio feugiat vulputate at sit amet ante. Etiam lacinia nibh non lobortis consequat. Donec feugiat lacus vitae aliquam efficitur. Integer at semper enim, nec tempor dolor. Proin scelerisque auctor consectetur.',
    'Nulla luctus, magna at pulvinar tincidunt, massa lacus fringilla quam, at dapibus libero ligula a nunc. In accumsan consectetur venenatis. Suspendisse a libero et odio feugiat vulputate at sit amet ante. Etiam lacinia nibh non lobortis consequat. Donec feugiat lacus vitae aliquam efficitur. Integer at semper enim, nec tempor dolor. Proin scelerisque auctor consectetur.',
    'Nulla luctus, magna at pulvinar tincidunt, massa lacus fringilla quam, at dapibus libero ligula a nunc. In accumsan consectetur venenatis. Suspendisse a libero et odio feugiat vulputate at sit amet ante. Etiam lacinia nibh non lobortis consequat. Donec feugiat lacus vitae aliquam efficitur. Integer at semper enim, nec tempor dolor. Proin scelerisque auctor consectetur.',  
    ,  'Nulla luctus, magna at pulvinar tincidunt, massa lacus fringilla quam, at dapibus libero ligula a nunc. In accumsan consectetur venenatis. Suspendisse a libero et odio feugiat vulputate at sit amet ante. Etiam lacinia nibh non lobortis consequat. Donec feugiat lacus vitae aliquam efficitur. Integer at semper enim, nec tempor dolor. Proin scelerisque auctor consectetur.',
    'Nulla luctus, magna at pulvinar tincidunt, massa lacus fringilla quam, at dapibus libero ligula a nunc. In accumsan consectetur venenatis. Suspendisse a libero et odio feugiat vulputate at sit amet ante. Etiam lacinia nibh non lobortis consequat. Donec feugiat lacus vitae aliquam efficitur. Integer at semper enim, nec tempor dolor. Proin scelerisque auctor consectetur.',
    'Nulla luctus, magna at pulvinar tincidunt, massa lacus fringilla quam, at dapibus libero ligula a nunc. In accumsan consectetur venenatis. Suspendisse a libero et odio feugiat vulputate at sit amet ante. Etiam lacinia nibh non lobortis consequat. Donec feugiat lacus vitae aliquam efficitur. Integer at semper enim, nec tempor dolor. Proin scelerisque auctor consectetur.',
]
    },
    {
      id: 'section3',
      title: 'Section 3',
      paragraphs: [
        'Nulla luctus, magna at pulvinar tincidunt, massa lacus fringilla quam, at dapibus libero ligula a nunc. In accumsan consectetur venenatis. Suspendisse a libero et odio feugiat vulputate at sit amet ante. Etiam lacinia nibh non lobortis consequat. Donec feugiat lacus vitae aliquam efficitur. Integer at semper enim, nec tempor dolor. Proin scelerisque auctor consectetur.',
        'Quisque id lacus non velit aliquet ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse ullamcorper justo et venenatis cursus. Nullam eu augue eget quam convallis consequat vitae et aug'
        , 'Nulla luctus, magna at pulvinar tincidunt, massa lacus fringilla quam, at dapibus libero ligula a nunc. In accumsan consectetur venenatis. Suspendisse a libero et odio feugiat vulputate at sit amet ante. Etiam lacinia nibh non lobortis consequat. Donec feugiat lacus vitae aliquam efficitur. Integer at semper enim, nec tempor dolor. Proin scelerisque auctor consectetur.',
        'Quisque id lacus non velit aliquet ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse ullamcorper justo et venenatis cursus. Nullam eu augue eget quam convallis consequat vitae et aug'
        , 'Nulla luctus, magna at pulvinar tincidunt, massa lacus fringilla quam, at dapibus libero ligula a nunc. In accumsan consectetur venenatis. Suspendisse a libero et odio feugiat vulputate at sit amet ante. Etiam lacinia nibh non lobortis consequat. Donec feugiat lacus vitae aliquam efficitur. Integer at semper enim, nec tempor dolor. Proin scelerisque auctor consectetur.',
        'Quisque id lacus non velit aliquet ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse ullamcorper justo et venenatis cursus. Nullam eu augue eget quam convallis consequat vitae et aug'
        , 'Nulla luctus, magna at pulvinar tincidunt, massa lacus fringilla quam, at dapibus libero ligula a nunc. In accumsan consectetur venenatis. Suspendisse a libero et odio feugiat vulputate at sit amet ante. Etiam lacinia nibh non lobortis consequat. Donec feugiat lacus vitae aliquam efficitur. Integer at semper enim, nec tempor dolor. Proin scelerisque auctor consectetur.',
        'Quisque id lacus non velit aliquet ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse ullamcorper justo et venenatis cursus. Nullam eu augue eget quam convallis consequat vitae et aug',
        'Nulla luctus, magna at pulvinar tincidunt, massa lacus fringilla quam, at dapibus libero ligula a nunc. In accumsan consectetur venenatis. Suspendisse a libero et odio feugiat vulputate at sit amet ante. Etiam lacinia nibh non lobortis consequat. Donec feugiat lacus vitae aliquam efficitur. Integer at semper enim, nec tempor dolor. Proin scelerisque auctor consectetur.',
        'Quisque id lacus non velit aliquet ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse ullamcorper justo et venenatis cursus. Nullam eu augue eget quam convallis consequat vitae et aug'
      ]},
      {
        id: 'section4',
        title: 'Section 4',
        paragraphs: [
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis mauris ut lectus sollicitudin, at feugiat purus volutpat. Proin sit amet arcu vitae nisl pharetra vestibulum. Integer auctor turpis a fermentum ultricies. Fusce ac nisl cursus, faucibus nisi a, tincidunt ex. Sed nec neque pellentesque, facilisis odio nec, tempus odio. Vestibulum in purus et metus pellentesque tempor. Curabitur vitae tellus sit amet metus euismod tincidunt.',
          'Aliquam auctor augue massa, ac maximus nibh dapibus vel. Sed sollicitudin orci at nunc feugiat, in bibendum neque malesuada. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam nec ullamcorper sapien, a tempor dui. Ut vel erat sit amet lorem bibendum placerat. In hac habitasse platea dictumst. Praesent ut ante ante. Etiam vel elit id elit eleifend ultricies. Maecenas interdum et libero non porttitor.'
      ,   'Nulla luctus, magna at pulvinar tincidunt, massa lacus fringilla quam, at dapibus libero ligula a nunc. In accumsan consectetur venenatis. Suspendisse a libero et odio feugiat vulputate at sit amet ante. Etiam lacinia nibh non lobortis consequat. Donec feugiat lacus vitae aliquam efficitur. Integer at semper enim, nec tempor dolor. Proin scelerisque auctor consectetur.',
      'Nulla luctus, magna at pulvinar tincidunt, massa lacus fringilla quam, at dapibus libero ligula a nunc. In accumsan consectetur venenatis. Suspendisse a libero et odio feugiat vulputate at sit amet ante. Etiam lacinia nibh non lobortis consequat. Donec feugiat lacus vitae aliquam efficitur. Integer at semper enim, nec tempor dolor. Proin scelerisque auctor consectetur.',
      'Nulla luctus, magna at pulvinar tincidunt, massa lacus fringilla quam, at dapibus libero ligula a nunc. In accumsan consectetur venenatis. Suspendisse a libero et odio feugiat vulputate at sit amet ante. Etiam lacinia nibh non lobortis consequat. Donec feugiat lacus vitae aliquam efficitur. Integer at semper enim, nec tempor dolor. Proin scelerisque auctor consectetur.',
      'Nulla luctus, magna at pulvinar tincidunt, massa lacus fringilla quam, at dapibus libero ligula a nunc. In accumsan consectetur venenatis. Suspendisse a libero et odio feugiat vulputate at sit amet ante. Etiam lacinia nibh non lobortis consequat. Donec feugiat lacus vitae aliquam efficitur. Integer at semper enim, nec tempor dolor. Proin scelerisque auctor consectetur.',  
      ]
      },
    ];
  

const content = () => {
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
        <meta property="og:url" content="" />
      </Head>
      <Header onPrivacyAgree={handlePrivacyAgree} />
      <ContentPage sections={sections} />
      <Footer />
    </>
  );
};

export default content;
