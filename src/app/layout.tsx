import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";

import "./globals.css";
import QueryProvider from "@/Hooks/useReactQuery";
import KakaoScript from "@/Hooks/KakaoScript";
import Introduce from "@/components/Introduce";
import Head from "next/head";

export const metadata: Metadata = {
  title: "카페콕 | 당신의 완벽한 카페 찾기",
  description:
    "카페콕은 당신의 목적에 맞는 완벽한 카페를 찾을 수 있도록 도와주는 서비스입니다. 데이트, 노트북 작업, 독서 등 다양한 목적에 맞는 최고의 카페를 발견해보세요.",
  icons: {
    icon: "/assets/Images/logo.png",
  },
  openGraph: {
    title: "카페콕 | 당신의 완벽한 카페 찾기",
    description:
      "카페콕은 당신의 목적에 맞는 완벽한 카페를 찾을 수 있도록 도와주는 서비스입니다. 데이트, 노트북 작업, 독서 등 다양한 목적에 맞는 최고의 카페를 발견해보세요.",
    images: [
      {
        url: "/assets/Images/logo.png",
        width: 1200,
        height: 627,
        alt: "Hororok Image",
      },
    ],
  },
  keywords: [
    "카페 찾기",
    "데이트 카페",
    "노트북 작업 카페",
    "독서 카페",
    "카페콕",
  ],
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    other: {
      me: ["jinha6707@gmail.com", "https://cafecok.site/"],
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <Head>
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_KEY || ""} />
      </Head>
      <body>
        <Introduce />
        <QueryProvider>
          <section style={{ width: "380px", height: "100vh" }}>
            {children}
          </section>
        </QueryProvider>
      </body>

      <KakaoScript />
    </html>
  );
}
