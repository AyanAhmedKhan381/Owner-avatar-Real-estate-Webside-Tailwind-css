import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import Footer from "@/components/Home/Footer/Footer";

const font = Roboto({
  weight:['100','300','400','500','700',"900"],
  subsets: ['latin']

});


export const metadata: Metadata = {
  title: "Real Esate Projects | Next.js",
  description: "Real Esate webside useing next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased`}
      >
        <ResponsiveNav/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
