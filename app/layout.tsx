import type { Metadata } from "next";

import { Noto_Sans_KR } from "next/font/google";
import { AppContextProvider } from "./context/app.context";
import { Header, Sidebar, Footer } from "./components/organisms";
import { getMenu } from "./api/menu-api";
import { Up } from "./components";

import s from "./layout.module.css";
import cn from "classnames";
import "./globals.css";
import Head from "next/head";

const inter = Noto_Sans_KR({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Our the best choice",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const menu = await getMenu(0);
  const firstCategory = 0;

  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body
        className={cn(inter.className, s.wrapper)}
        suppressHydrationWarning={true}
      >
        <AppContextProvider menu={menu} firstCategory={firstCategory}>
          <Header className={s.header} />
          <Sidebar className={s.sidebar} />
          <main role="main" className={s.main}>
            {children}
          </main>
          <Footer className={s.footer} />
          <Up />
        </AppContextProvider>
      </body>
    </html>
  );
}
