import "../styles/globals.css";
import {Metadata} from "next";
import {Inter} from "next/font/google";
import SideMenuComp from "@/components/layout/menu/side.menu";
import getmetaData from "@/components/seo/meta.data";
import {GoogleAnalytics} from "@next/third-parties/google";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = getmetaData({
    title: "Introduce MHLab Service",
    description: "MHLab에서 만든 서비스를 소개합니다.",
});

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        // cupcake
        <html lang="ko" data-theme="garden">
            <meta
                name="naver-site-verification"
                content="995ccbea6a36a9bd6e1d5582e43a449a674254f0"
            />
            <meta
                name="google-site-verification"
                content="KJ670SOYI0h44vQg1Mf-NU0U4ZSk-crdT9n88DhVJos"
            />

            <GoogleAnalytics gaId="G-HJ0EKEN8LG" />

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
