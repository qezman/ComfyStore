// pages/_app.js
import "../styles/globals.css"; // Import global styles
import Layout from "../Components/Layout";
import { ToggleBackgroundProvider } from "../context/ToggleBackgroundContext";
import { CartProvider } from "../context/CartContext";

function MyApp({ Component, pageProps }) {
  return (
    <ToggleBackgroundProvider>
      <CartProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CartProvider>
    </ToggleBackgroundProvider>
  );
}

export default MyApp;
