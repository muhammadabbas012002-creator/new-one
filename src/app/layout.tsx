import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { TooltipProvider } from "@/components/ui/tooltip";

import { GoogleAnalytics } from "@next/third-parties/google";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Madz visa services - Your Trusted Partner for Global Opportunities",
    icons: [
        {
            rel: "icon",
            url: "/logo.jpg",
        },
    ],
    description:
        "Madz visa services is your trusted partner for all your visa and immigration needs. We provide expert guidance and support to help you navigate the complex world of visa applications and immigration processes.",
    authors: [
        {
            name: "Muhammad Abbas",
            url: "https://www.linkedin.com/in/muhammad-abbas-b648b2358",
        },
    ],
    keywords: [
        "visa services",
        "immigration",
        "global opportunities",
        "student visa",
        "tourist visa",
        "business visa",
        "work visa",
        "family visit visa",
        "permanent residency",
        "visa application",
        "visa consultancy",
        "visa support",
        "visa guidance",
        "visa experts",
        "visa assistance",
        "visa processing",
        "visa help",
        "visa solutions",
        "visa advice",
        "visa services",
    ],
    category: "Services",
    robots: "index, follow",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <GoogleAnalytics gaId="G-EQZDL3YNZP" />
                <TooltipProvider>
                    <Header />
                    {children}
                    <Footer />
                    <WhatsAppButton />
                </TooltipProvider>
            </body>
        </html>
    );
}
