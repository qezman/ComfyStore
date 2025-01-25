// pages/_app.js
import "../styles/globals.css"; // Import global styles
import Layout from "../Components/Layout";
import { ToggleBackgroundProvider } from "../context/ToggleBackgroundContext";

function MyApp({ Component, pageProps }) {
  return (
    <ToggleBackgroundProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ToggleBackgroundProvider>
  );
}

export default MyApp;
