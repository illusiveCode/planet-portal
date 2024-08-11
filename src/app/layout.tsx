import type { Metadata } from "next";
import Image from "next/image";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/app/components/NavBar"; // Adjust the path as needed
import bgStars from "@/../assets/background-stars.svg";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={`${inter.className} h-screen bg-neutral-darkBlue`}>
        <Image className="absolute h-screen object-cover" src={bgStars} alt="" />
        <Navbar />
        <main className="flex flex-col items-center justify-center">{children}</main>
      </body>
    </html>
  );
}
