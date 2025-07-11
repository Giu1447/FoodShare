import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar"; // <-- WICHTIG: Import
import React from "react";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "FoodShare App",
    description: "Test frontend for all endpoints",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar/>
        <main className="max-w-5xl mx-auto p-4">
            {children}
        </main>
        </body>
        </html>
    );
}
