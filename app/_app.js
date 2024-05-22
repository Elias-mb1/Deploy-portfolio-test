// pages/_app.js
import '../styles/globals.css';
import ThemeToggle from '../components/ThemeToggle';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <ThemeToggle />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
