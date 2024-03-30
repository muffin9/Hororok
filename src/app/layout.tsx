import type { Metadata } from "next";

import "./globals.css";
import QueryProvider from "@/Hooks/useReactQuery";

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
      <head>
        <script src="https://developers.kakao.com/sdk/js/kakao.js" defer />
      </head>
      <body>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
