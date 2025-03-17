import type { Metadata } from "next";
import { Oswald, Play } from "next/font/google";
import "./globals.css";

import { Layout, FixedPlugin, Navbar, Footer } from "@/components";
import Providers from "./providers";

const oswald = Oswald({
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-oswald",
  subsets: ["latin", "cyrillic"],
});

const play = Play({
  weight: ["400", "700"],
  variable: "--font-play",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Окна в Мир",
  description:
    "Пластиковые окна, остекление балконов, продажа и установка дверей, жалюзи и рулонных штор в Луганске и ЛНР",
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
      <body className={`${oswald.variable} ${play.variable} antialiased`}>
        <Layout>
          <Navbar />

          <div className="relative min-h-screen w-full bg-light-blue-50 pb-12 ">
            <header className="grid !min-h-[30rem] bg-gradient-to-b from-blue-500 to to-light-blue-50 px-8 bg-[auto_650px] bg-no-repeat">
              <div className="container mx-auto mt-5 grid h-full w-full grid-cols-1 place-items-center pt-14">
                <Providers>{children}</Providers>
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
