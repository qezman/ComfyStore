import './globals.css'
import Footer from "./Components/Footer";
import Layout from "./Components/Layout";
import Navbar from "./Components/Navbar";

const poppins = "Poppins, sans-serif";

export const metadata = {
  title: "Portfolio Website",
  description: "Portfolio Website for a Frontend Developer",
};

const RootLayout = ({ children }) => (
  <Layout>
    <html lang="en">
      <body style={{ fontFamily: poppins }}>
        <Navbar />
        <main className="relative overflow-hidden lg:mb-10 mb-5">{children}</main>
        <Footer />
      </body>
    </html>
  </Layout>
);

export default RootLayout;
