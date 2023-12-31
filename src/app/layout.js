import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/(components)/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My Portfolio",
  description: "Kirtiraj Gawale Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="w-full absolute top-20">
          {children}
        </div>
      </body>
    </html>
  );
}
