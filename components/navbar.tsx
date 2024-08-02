import { Righteous } from "next/font/google";
import Link from "next/link";
import style from "@/styles/navbar.module.css";
import { KeyboardEventHandler, useState } from "react";

const anton = Righteous({
	weight: ["400"],
	subsets: ["latin"],
});

export default function Navbar() {
	return (
		<div className={style.navbar}>
			<Link
				href="/"
				className={anton.className + " " + style.brandlogo}
			>
				PRICES.CO
			</Link>
			<ul className={style.navlist}>
				<li className={style.navlink}>TRACKER</li>
				<li className={style.navlink}>ABOUT</li>
				<li className={style.navlink}>CONTACT</li>
			</ul>
			<button className={style.sign_in}></button>
		</div>
	);
}
