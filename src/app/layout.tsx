import "../styles/globals.css";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import SideMenuComp from "@/components/layout/menu/side.menu";
import getmetaData from "@/components/seo/meta.data";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = getmetaData({});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // cupcake
    <html lang="ko" data-theme="garden">
      <body className={inter.className}>
        <div className="grid min-h-screen w-full md:grid-cols-[280px_1fr]">
          {/* Side Menu */}
          <SideMenuComp />

          {/* Main Contents */}
          <div className="flex flex-col">
            <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
