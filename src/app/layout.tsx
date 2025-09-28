// src/app/layout.tsx
import "./globals.css";
import { Inter } from "next/font/google";
import { AppProvider } from "../context/AppStateContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "EventSimplifier Demo",
  description: "College event demo",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppProvider>
          <main>{children}</main>
        </AppProvider>
      </body>
    </html>
  );
}