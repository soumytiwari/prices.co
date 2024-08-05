import { Righteous } from "next/font/google";
import Link from "next/link";

const anton = Righteous({
	weight: ["400"],
	subsets: ["latin"],
});

export default function BrandLogo() {
	return (
		<Link
			href="/"
			className={anton.className}
			style={{ fontSize: "xx-large" }}
		>
			PRICES.CO
		</Link>
	);
}
