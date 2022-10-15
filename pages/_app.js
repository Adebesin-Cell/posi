import '../styles/globals.scss';
import { initFirebase, app } from '../firebase/firebase';
import { AuthContextProvider } from '../store/auth-context';
import { useEffect } from 'react';
import { getAnalytics, logEvent } from 'firebase/analytics';
import { useRouter } from 'next/router';

initFirebase();

function MyApp({ Component, pageProps }) {
  const routers = useRouter();

  useEffect(() => {
    if (
      process.env.NODE_ENV === 'production' ||
      process.env.NODE_ENV === 'development'
    ) {
      const analytics = getAnalytics(app);
      routers.events.on(
        'routeChangeComplete',
        logEvent(analytics, 'page_view', window.location.pathname)
      );

      logEvent(analytics, 'page_view', window.location.pathname);

      return () => {
        routers.events.off(
          'routeChangeComplete',
          logEvent(analytics, 'page_view', window.location.pathname)
        );
      };
    }
  }, [routers]);

  return (
    <AuthContextProvider>
      <Component {...pageProps} />
    </AuthContextProvider>
  );
}

export default MyApp;
