import { Roboto } from "next/font/google";
import { Metadata } from "next";

import "@/styles/globals.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { ContextProvider } from "@/context/ContextProvider";

export const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["400", "700"],
});

export const metadata = {
  title: { default: "Ethos World", template: "" },
  metadataBase: new URL("https://dev.ethos.co.id"),
  keywords: [
    "PT Ethos Kreatif Indonesia",
    "ethos",
    "ethos world",
    "Ethos World",
    "PT Ethos",
    "pt ethos kreatif indonesia",
    "pt etos kreatif indonesia",
    "ethos team",
    "Pt Ethos Kreatif Indonesia",
    "pt etos",
  ],
  description: "PT Ethos Kreatif Indonesia",
  verification: {
    google: "zH1UnIguHE6qkLzn0mQVw01bSYcqfx05NjclLVY6RjE",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={` ${roboto.variable} `}>
        <ContextProvider>
          <Header />
          {children}
          <Footer />
        </ContextProvider>
      </body>
    </html>
  );
}
