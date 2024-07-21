import { Righteous } from "next/font/google";
import style from "@/styles/footer.module.css";
import Link from "next/link";

const anton = Righteous({
	weight: ["400"],
	subsets: ["latin"],
});

export default function Footer() {
	return (
		<div className={style.footer}>
			<div className={style.extra}>
				<img src="/images/b.jpg"></img>
				<img
					src="/images/shopping.png"
					className={style.parallaximg}
				></img>
				<h1>Shop Smarter with Us!</h1>
			</div>
			<div className={style.info_container}>
				<div className={style.social}>
					<Link
						href="/"
						className={anton.className + " " + style.brandlogo}
					>
						PRICES.CO
					</Link>
					<div className={style.social_media}>
						<Link href="" />
						<Link href="" />
						<Link href="" />
						<Link href="" />
					</div>
				</div>
				<div className={style.contact}>
					<div className={style.partition}>
						<h3 className={anton.className + " " + style.head}>
							PRICES.CO
						</h3>
						<ul className={style.content}>
							<li className={style.content_item}>
								<Link href="">About</Link>
							</li>
							<li className={style.content_item}>
								<Link href="">Brands</Link>
							</li>
							<li className={style.content_item}>
								<Link href="">Career</Link>
							</li>
							<li className={style.content_item}>
								<Link href="">Contact</Link>
							</li>
						</ul>
					</div>
					<div className={style.partition}>
						<h3 className={style.head}>ADDRESS</h3>
						<div className={style.content}>
							<h2>123 A/23</h2>
							<h2>4th Avenue</h2>
							<h2>Bridge Road</h2>
							<h2>shikoy, Utopia</h2>
						</div>
					</div>
					<div className={style.partition}>
						<h3 className={style.head}>LEGAL</h3>
						<ul className={style.content}>
							<li className={style.content_item}>
								<Link href="">Terms of Use</Link>
							</li>
							<li className={style.content_item}>
								<Link href="">Privacy Policy</Link>
							</li>
							<li className={style.content_item}>
								<Link href="">Scrapping</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className={style.bottom}>
				<div>No Rights Reserved</div>
			</div>
		</div>
	);
}
