import '../styles/globals.scss';
import { initFirebase } from '../firebase/firebase';
import { AuthContextProvider } from '../store/auth-context';

initFirebase();

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Component {...pageProps} />
    </AuthContextProvider>
  );
}

export default MyApp;
