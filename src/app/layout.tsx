import type { Metadata } from "next";

import "./globals.css";
import QueryProvider from "@/Hooks/useReactQuery";
import KakaoScript from "@/Hooks/KakaoScript";

export const metadata: Metadata = {
  title: "카페콕 | Cafe",
  description: "카페콕 | Cafe",
  icons: {
    icon: "/assets/Images/logo.png",
  },
  openGraph: {
    title: "",
    description: "",
    images: [
      {
        url: "/assets/Images/logo.png",
        width: 1200,
        height: 627,
        alt: "Hororok Image",
      },
    ],
  },
  keywords: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <QueryProvider>{children}</QueryProvider>
      </body>
      <KakaoScript />
    </html>
  );
}
