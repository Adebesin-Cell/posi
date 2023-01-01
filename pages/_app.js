import '../styles/globals.scss';
import { initFirebase } from '../firebase/firebase';
import { AuthContextProvider } from '../store/auth-context';
import Script from 'next/script';
import SEOHeader from '../components/SEO/Default';

initFirebase();

function MyApp({ Component, pageProps, router }) {
  return (
    <AuthContextProvider>
      <SEOHeader router={router} />
      <Component {...pageProps} />
      <Script
        strategy='lazyOnload'
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script id='google-analytics' strategy='lazyOnload'>
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
                `}
      </Script>
    </AuthContextProvider>
  );
}

export default MyApp;
