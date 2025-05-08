import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Wayne Chandler Gomez | Portfolio",
  description: "Dynamic Ops & Play Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-dark-bg text-white`}>
        {children}
      </body>
    </html>
  );
}
