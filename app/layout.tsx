import Link from "next/link";
// import './globals.css'
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const menuItem = (url: string, title: string, customClass?: string) => {
    return (
      <div
        className={`bg-secondary-brand text-white px-2 py-2 mb-3 rounded ${customClass}`}
      >
        <Link prefetch={false} href={url}>
          {title}
        </Link>
      </div>
    );
  };
  return (
    <html lang="en">
      <body
        className={
          inter.className + " container justify-center mx-auto py-[10px]"
        }
      >
        <div className="inline-flex w-full">
          {menuItem(
            "/",
            "Home",
            "bg-gradient-to-tl from-secondary-brand to-primary-brand"
          )}
          <div className="inline-flex justify-end  w-full space-x-3">
            {menuItem("/dashboard", "dashboard")}
            {menuItem("/settings", "settings")}
            {menuItem("/calculator", "calculator")}
            {menuItem("/cari", "Cari User di Github")}
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
