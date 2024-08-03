// "use client"

import Navbar from "./Navbar";
import Footer from "./Footer";

// import Head from "next/head";

// const Layout = ({ children }) => (
//   <>
//     <Head>
//       <link
//         href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
//         rel="stylesheet"
//       />
//     </Head>
//     {children}
//   </>
// );

// export default Layout;

const Layout = ({children}) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
