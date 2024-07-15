import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import "./globals.css";
import "@/styles/styles.css";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
	title: "Prices.co",
	description: " A website comparing prices across all websites",
};

const inter = Inter({
	weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
	subsets: ["latin"],
});

const bgStyle = {};

export default function RootLayout({
	children,
}: Readonly<{
	// Navbar: React.ReactNode;
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
