import "./globals.css";
import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import { Header } from "./Layout/Header/Header";
import { Sidebar } from "./Layout/Sidebar/Sidebar";
import { Footer } from "./Layout/Footer/Footer";
import s from "./layout.module.css";
import cn from "classnames";

const inter = Noto_Sans_KR({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Our the best choice",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cn(inter.className, s.wrapper)} suppressHydrationWarning={true}>
        <Header className={s.header} />
        <Sidebar className={s.sidebar} />
        <main className={s.main}>{children}</main>
        <Footer className={s.footer} />
      </body>
    </html>
  );
}
