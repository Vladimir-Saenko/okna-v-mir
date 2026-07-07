import type { Metadata, Viewport } from "next";
import { Oswald, Play } from "next/font/google";
import "./globals.css";

import { FixedPlugin, Navbar, Footer } from "@/components";
import Providers from "./providers";
import { YandexMetrika } from "@/components/yandex-metrika";

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
  title: "Окна в Мир | Пластиковые окна Луганск и ЛНР",
  description:
    "Пластиковые окна с установкой в Луганске и ЛНР! Качественно и недорого. Остекление балконов, продажа и установка дверей, секционных ворот, роллет, жалюзи, рулонных штор. Гарантия и индивидуальный подход!",
  keywords:
    "пластиковые окна, окна пвх, установка, ремонт окон, остекление балконов, входные межкомнатные двери, секционные ворота, роллетные ворота, рольставни, жалюзи, рулонные шторы",
};
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  // maximumScale: 1.0,
  // userScalable: true,
  // Also supported but less commonly used
  // interactiveWidget: 'resizes-visual',
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
        <link rel="icon" href="/favicon.svg" />


      </head>
      <body className={`${oswald.variable} ${play.variable} antialiased`}>

        <YandexMetrika />

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

      </body>
    </html>
  );
}
