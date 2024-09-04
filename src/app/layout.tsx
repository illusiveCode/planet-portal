import type { Metadata } from "next";
import "@/styles/globals.css";
import Navbar from "@/app/components/NavBar";
import { Antonio } from "next/font/google";
import bgStars from "@/../../public/background-stars.svg";
import Image from "next/image";
import { SpeedInsights } from "@vercel/speed-insights/next";

const antonio = Antonio({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${antonio.className} bg-neutral-darkBlue`}>
        <Navbar />
        <Image
          className="w-full absolute h-screen object-cover -z-10  bg-repeat"
          src={bgStars}
          alt=""
        />
        <main className="">{children}</main>
        <SpeedInsights />
      </body>
    </html>
  );
}
