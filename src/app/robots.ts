import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://okna-v-mir-lugansk.ru/sitemap.xml", // Укажите ваш реальный URL
  };
}
