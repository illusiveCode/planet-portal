import type { Metadata } from "next";
import "@/styles/globals.css";
import Navbar from "@/app/components/NavBar";
import { Antonio } from "next/font/google";
import bgStars from "@/../../assets/background-stars.svg";
import Image from "next/image";

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
        <Image className="w-full absolute h-screen object-cover  bg-repeat" src={bgStars} alt="" />
        <main className="">{children}</main>
      </body>
    </html>
  );
}
