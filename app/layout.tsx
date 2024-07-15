import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import "./globals.css";
import "@/styles/styles.css";

export const metadata: Metadata = {
	title: "Prices.co",
	description: " A website comparing prices across all websites",
};

export default function RootLayout({
	children,
}: Readonly<{
	// Navbar: React.ReactNode;
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
