import React, { useEffect, useState } from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children?: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      {children}
      <a
        href="https://wa.me/+595961709565"
        target="_blank"
        className={`fixed ${
          scrollY < 200 ? "bottom-10" : "bottom-24"
        } right-0 lg:right-16 z-20 transition-all duration-500`}
      >
        <img
          src="https://res.cloudinary.com/da6b7skw8/image/upload/v1693169652/acgroup/WhatsApp_1_omdkpk.png"
          alt=""
          className="w-12"
        />
      </a>
      <button
        className={`fixed bottom-10 right-0 lg:right-16 z-20 ${
          scrollY > 200 ? "block" : "hidden"
        }`}
        onClick={() => window.scrollTo(0, 0)}
      >
        <img
          src="https://res.cloudinary.com/da6b7skw8/image/upload/v1693169909/acgroup/Group_2_hl2tcs.png"
          alt=""
          className="w-12"
        />
      </button>
      <Footer />
    </div>
  );
}
