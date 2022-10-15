import '../styles/globals.scss';
import { initFirebase, app } from '../firebase/firebase';
import { AuthContextProvider } from '../store/auth-context';
import { useEffect } from 'react';
import { getAnalytics, logEvent } from 'firebase/analytics';

initFirebase();

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (
      process.env.NODE_ENV === 'production' ||
      process.env.NODE_ENV === 'development'
    ) {
      const analytics = getAnalytics(app);
      logEvent(analytics, 'screen_view');
    }
  }, []);

  return (
    <AuthContextProvider>
      <Component {...pageProps} />
    </AuthContextProvider>
  );
}

export default MyApp;
