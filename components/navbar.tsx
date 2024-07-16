import { Righteous } from "next/font/google";
import Link from "next/link";

const anton = Righteous({
	weight: ["400"],
	subsets: ["latin"],
});

export default function Navbar() {
	return (
		<div className="navbar">
			<Link
				href="/"
				className={anton.className + " logo"}
			>
				PRICES.CO
			</Link>
			<ul className="navlist">
				<li className="navlink">TRACKER</li>
				<li className="navlink">ABOUT</li>
				<li className="navlink">CONTACT</li>
			</ul>
			<button className="sign-in"></button>
		</div>
	);
}
