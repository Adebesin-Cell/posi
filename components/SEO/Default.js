import React from 'react';
import { DefaultSeo } from 'next-seo';
import { NextRouter } from 'next/router';

const SEOHeader = ({ router }) => {
  return (
    <DefaultSeo
      title='Posi - Adekanmbi Ayomiposi'
      description='Ayomiposi is a product designer, I’m passionate about design and i love to create solutions for complex problems through user-centric design.'
      canonical={`https://ayoposi.vercel.app/${router.asPath || ''}`}
      openGraph={{
        title: 'Posi - Adekanmbi Ayomiposi',
        description:
          'Ayomiposi is a product designer, I’m passionate about design and i love to create solutions for complex problems through user-centric design.',
        type: 'website',
        site_name: 'Posi - Adekanmbi Ayomiposi',
        images: [
          {
            url: 'https://ayoposi.vercel.app/images/og-image-default.png',
            width: 1200,
            height: 630,
            alt: 'Posi - Adekanmbi Ayomiposi'
          }
        ]
      }}
    />
  );
};

export default SEOHeader;
