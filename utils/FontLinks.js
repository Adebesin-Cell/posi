import Head from 'next/head';

const FontLinks = function () {
  return (
    <Head>
      <link
        href='https://api.fontshare.com/v2/css?f[]=clash-display@200,400,700,500,600,1,300&display=swap'
        rel='stylesheet'
      ></link>
      <link
        href='https://api.fontshare.com/v2/css?f[]=pilcrow-rounded@1,700,400,500,900,600&display=swap'
        rel='stylesheet'
      ></link>
      <link
        href='https://api.fontshare.com/v2/css?f[]=satoshi@1,900,700,500,301,701,300,501,401,901,400,2&display=swap'
        rel='stylesheet'
      ></link>
    </Head>
  );
};

export default FontLinks;
