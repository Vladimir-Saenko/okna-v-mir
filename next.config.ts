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
    BOT_TOKEN: "7787399062:AAHstHnya-p8cY6etAYxoLftmQW53pjyR7s", // Токен Telegram-бота @Okna_v_Mir_bot
    CHAT_ID: "-4664510211", // ID рабочего Telegram-чата "Окна в Мир"
  },
};

export default nextConfig;
