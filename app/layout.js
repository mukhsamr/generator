"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  useEffect(() => {
    const initialBackground = () => {
      document.body.style.background = `radial-gradient(circle at 50% 50%, #ffafbd, #ffc3a0)`;
    };

    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      document.body.style.background = `radial-gradient(circle at ${x}% ${y}%, #ffafbd, #ffc3a0)`;
    };

    initialBackground();
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
