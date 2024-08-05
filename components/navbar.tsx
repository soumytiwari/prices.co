import { Righteous } from "next/font/google";
import Link from "next/link";
import style from "@/styles/navbar.module.css";
import BrandLogo from "./brand";

const anton = Righteous({
	weight: ["400"],
	subsets: ["latin"],
});

export default function Navbar() {
	return (
		<div className={style.navbar}>
			<BrandLogo />
			<ul className={style.navlist}>
				<li className={style.navlink}>TRACKER</li>
				<li className={style.navlink}>ABOUT</li>
				<li className={style.navlink}>CONTACT</li>
			</ul>
			<button className={style.sign_in}></button>
		</div>
	);
}
