import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Prices.co",
	description: " A website comparing prices across all websites",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
