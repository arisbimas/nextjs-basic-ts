import Link from "next/link";
// import './globals.css'
import { Inter } from "next/font/google";

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
  return (
    <html lang="en">
      <body className={inter.className}>
        <ul>
          <li>
            <Link prefetch={false} href="/">
              Home
            </Link>
          </li>
          <li>
            <Link prefetch={false} href="/dashboard">
              Dashboard
            </Link>
          </li>
          <li>
            <Link prefetch={false} href="/settings">
              Setting
            </Link>
          </li>
          <li>
            <Link prefetch={false} href="/calculator">
              Calculator
            </Link>
          </li>
          <li>
            <Link prefetch={false} href="/cari">
              Cari User di Github
            </Link>
          </li>
        </ul>
        {children}
      </body>
    </html>
  );
}
