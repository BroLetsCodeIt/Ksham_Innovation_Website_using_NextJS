import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/themeprovider";
import Footer from "@/components/Footer";
import Header from "@/components/header";
import Topheader from "@/components/topheader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ksham Innovation",
  description: "Ksham Innovation , a new glasses innovation",
  keywords:['glasses' , 'ksham innovation' , 'startup' , 'arduino' , 'iit_mandi' , 'iit_kanpur'],
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider defaultTheme="light" enableColorScheme disableTransitionOnChange attribute="class">
         
        <Header/>
        {children}
        <Footer/>
          </ThemeProvider>
        </body>
    </html>
  );
}
