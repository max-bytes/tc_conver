import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "EMU Chat",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
         {/* required to not push content out of screen when keyboard opens on mobile */}
        <meta name="viewport" content="width=device-width, initial-scale=1, interactive-widget=resizes-content"></meta>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
