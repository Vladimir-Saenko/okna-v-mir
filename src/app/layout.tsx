import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Layout, FixedPlugin, Navbar, Footer } from "@/components";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Окно в Мир",
  description: "Установка пластиковых окон качественно.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
          integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Layout>
          <Navbar />

          <div className="relative min-h-screen w-full">
            <header className="grid !min-h-[30rem] bg-gradient-to-t from-white to to-blue-600 px-8">
              <div className="container mx-auto mt-5 grid h-full w-full grid-cols-1 place-items-center pt-14">
                {children}
              </div>
            </header>
          </div>

          <Footer />
          <FixedPlugin />
        </Layout>
      </body>
    </html>
  );
}
