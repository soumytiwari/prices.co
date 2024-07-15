import { Arimo, Inter } from "next/font/google";
import Link from "next/link";

const anton = Arimo({
	weight: ["700"],
	subsets: ["latin"],
});
const inter = Inter({
	weight: ["400"],
	subsets: ["latin"],
});
export default function Navbar() {
	return (
		<div className="navbar">
			<Link
				href="/track"
				className={anton.className + " logo"}
			>
				PRICES.CO
			</Link>
			<ul className={inter.className + " navlist"}>
				<li className="navlink">Tracker</li>
				<li className="navlink">About</li>
				<li className="navlink">Contact</li>
			</ul>
			<div className={inter.className + " sign-in"}>Sign in</div>
		</div>
	);
}
