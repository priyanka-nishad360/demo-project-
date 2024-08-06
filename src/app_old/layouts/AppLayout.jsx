import { Suspense, useEffect } from "react";
// import { Outlet, useLocation } from 'react-router-dom';
// import Chatbot from "../components/Chatbot.jsx";
import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar.jsx";

import ThemeToggle from "../components/ThemeToggle.jsx";
import ScrollToTop from "../components/ScrollToTop.jsx";
import { useRouter } from "next/router.js";

function LoadingScreen() {
  return (
    <div className="fixed h-screen w-screen bg-white flex items-center justify-center">
      <img src="/loading.svg" alt="loading..." style={{ width: "100px" }} />
    </div>
  );
}

export default function AppLayout() {
  const location = useRouter();

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [location]);

  return (
    <>
      <Navbar />
      {/* <Suspense fallback={<LoadingScreen />}>
        <Outlet />
      </Suspense> */}
      <Footer />
      {/* <Chatbot /> */}
      {/* <ThemeToggle />
      <ScrollToTop /> */}
    </>
  );
}
