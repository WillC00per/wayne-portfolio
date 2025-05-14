import "./globals.css";
import { Plus_Jakarta_Sans, Orbitron } from "next/font/google";

const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" });
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" });

export const metadata = {
  title: "Wayne Chandler Gomez | Portfolio",
  description: "Dynamic Ops & Play Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;700;800&family=Orbitron:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className={`${plusJakarta.className} theme-transition bg-primary text-primary antialiased`}>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                const storedTheme = localStorage.getItem('theme');
                if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
                  document.documentElement.classList.add('dark');
                }
              })()
            `,
          }}
        />
        {children}
      </body>
    </html>
  );
}
