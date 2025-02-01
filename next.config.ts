import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  env: {
    PHONE_NUMBER: "79595836688",
    BOT_TOKEN: "7787399062:AAHstHnya-p8cY6etAYxoLftmQW53pjyR7s", // Токен Telegram-бота @Okna_v_Mir_bot
    CHAT_ID: "-4664510211", // ID рабочего Telegram-чата "Окна в Мир"
    CHAT_URL: "https://t.me/+ahyI8x1lNaRmMTIy",
  },
};

export default nextConfig;
