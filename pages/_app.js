import '../styles/globals.scss';
import { initFirebase } from '../firebase/firebase';
import { AuthContextProvider } from '../store/auth-context';
import { GoogleAnalytics } from 'nextjs-google-analytics';

initFirebase();

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <GoogleAnalytics gaMeasurementId='G-W9CFEC023Q' trackPageViews />
      <Component {...pageProps} />
    </AuthContextProvider>
  );
}

export default MyApp;
