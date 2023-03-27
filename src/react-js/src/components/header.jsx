import React from 'react';

function Header() {
  return (
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Basic meta info */}
      <title>MyWebClass.org</title>
      <meta name="keywords" content="My Webclass Homepage" />
      <meta name="author" content="Keith Williams" />
      <meta
        name="description"
        content="A project to help educators integrate new technoliges into their teaching"
      />

      {/* OpenGraph meta */}
      <meta property="og:title" content="" />
      <meta property="og:description" content="" />
      <meta property="og:image" content="assets/images/logo.png" />
      <meta property="og:url" content="" />
    </head>
  );
}

export default Header;