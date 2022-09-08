import '../styles/globals.scss';
import { AuthContextProvider } from '../store/auth-context';

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Component {...pageProps} />
    </AuthContextProvider>
  );
}

export default MyApp;
