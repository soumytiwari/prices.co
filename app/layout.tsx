import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

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
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Navbar/>
				{children}
				<Footer />
			</body>
		</html>
	);
}
