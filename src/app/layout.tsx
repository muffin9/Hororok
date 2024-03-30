import type { Metadata } from "next";

import "./globals.css";
import QueryProvider from "@/Hooks/useReactQuery";
import KakaoScript from "@/Hooks/KakaoScript";

export const metadata: Metadata = {
  title: "Hororok",
  description: "Hororok",
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
