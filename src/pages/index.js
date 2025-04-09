// import Image from "next/image";
// import { Geist, Geist_Mono } from "next/font/google";
// import HomeLayout from "../../Frontend/HomeLayout";

import HomeLayout from "../../Frontend/HomeLayout";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export default function Home() {
  return (
    <>
     <Analytics/>
     <SpeedInsights/>
    <HomeLayout/>
     </>
  );
}
