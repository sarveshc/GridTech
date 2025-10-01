import type { Metadata } from "next";
import "./globals.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "GridTech — IT Services | Consulting | Cloud | Web & App Development",
  description: "GridTech provides IT division management, consulting, web & mobile app development, and cloud infrastructure services in India.",
  icons: { icon: "/favicon.svg" }
};
export default function RootLayout({ children }: { children: React.ReactNode }){
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
