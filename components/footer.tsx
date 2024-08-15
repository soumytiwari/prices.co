"use client";
import { Righteous, Bebas_Neue,Barlow } from "next/font/google";
import style from "@/styles/footer.module.css";
import Link from "next/link";
import {  useEffect, useRef } from "react";

const righteous = Righteous({
	weight: ["400"],
	subsets: ["latin"],
});

const Josefin = Barlow({
	weight: ["400","200",'600','700','800'],
	subsets: ["latin"],
});

export default function Footer() {
	const parallaxRef = useRef<HTMLDivElement>(null);
	const headingRef = useRef<HTMLHeadingElement>(null);
	const imgRef2 = useRef<HTMLImageElement>(null);

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			parallaxIt(e, headingRef.current, 50);
			parallaxIt(e, imgRef2.current, -50);
		};

		const parallaxIt = (
			e: MouseEvent,
			target: HTMLImageElement | HTMLHeadingElement | null,
			movement: number
		) => {
			const container = parallaxRef.current;
			const relX = e.pageX - container!.offsetLeft;
			// const relY = e.pageY - container!.offsetTop;

			target!.style.transform = `translate(${
				((relX - container!.offsetWidth / 2) / container!.offsetWidth) *
				movement
			}px, 0px)`; //  <---- this 0
		};
		//  replace following code with 0 (keep px) above, To apply effect in Y axis
		// ${
		// 	((relY - container!.offsetHeight / 2) /
		// 		container!.offsetHeight) *
		// 	movement
		// }

		const container = parallaxRef.current;
		container!.addEventListener("mousemove", handleMouseMove);

		return () => {
			container!.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);
	return (
		<div className={style.footer}>
			<div
				className={style.extra}
				ref={parallaxRef}
			>
				<h1 
					className={righteous.className}
					style={{ marginBottom:'250px', fontSize: '190px', color:'rgba(40, 40, 40);', letterSpacing:'60px'}}
					ref = {headingRef}
					>PRICES.CO</h1>
				<img
					src="/images/b.png"
					style={{position:'absolute'}}
				></img>
				<img
					src="/images/shopping.png"
					className={style.parallaximg}
					ref={imgRef2}
				></img>
				<h1 className={righteous .className} style={{ marginTop:'360px', fontSize: '15px', color:'rgba(255, 255, 255, 0.3);'}}>PRICES.CO</h1>

			</div>
			<div className={style.info_container}>
				<div className={style.social}>
					<div>
						<Link
							href="/"
							className={righteous.className + " " + style.brandlogo}
						>
							PRICES.CO
						</Link>
						<p style={{ fontSize: "14px", fontStyle: "italic" }}>
							"Shop Smarter with Us"
						</p>
					</div>
					<div className={style.social_media}>
						<Link href="">
							<svg
								width="20"
								viewBox="0 0 1200 1227"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"
									fill="white"
								/>
							</svg>
						</Link>
						<Link href="">
							<svg
								width="20px"
								viewBox="0 0 256 256"
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								preserveAspectRatio="xMidYMid"
							>
								<g>
									<path
										d="M127.999746,23.06353 C162.177385,23.06353 166.225393,23.1936027 179.722476,23.8094161 C192.20235,24.3789926 198.979853,26.4642218 203.490736,28.2166477 C209.464938,30.5386501 213.729395,33.3128586 218.208268,37.7917319 C222.687141,42.2706052 225.46135,46.5350617 227.782844,52.5092638 C229.535778,57.0201472 231.621007,63.7976504 232.190584,76.277016 C232.806397,89.7746075 232.93647,93.8226147 232.93647,128.000254 C232.93647,162.177893 232.806397,166.225901 232.190584,179.722984 C231.621007,192.202858 229.535778,198.980361 227.782844,203.491244 C225.46135,209.465446 222.687141,213.729903 218.208268,218.208776 C213.729395,222.687649 209.464938,225.461858 203.490736,227.783352 C198.979853,229.536286 192.20235,231.621516 179.722476,232.191092 C166.227425,232.806905 162.179418,232.936978 127.999746,232.936978 C93.8200742,232.936978 89.772067,232.806905 76.277016,232.191092 C63.7971424,231.621516 57.0196391,229.536286 52.5092638,227.783352 C46.5345536,225.461858 42.2700971,222.687649 37.7912238,218.208776 C33.3123505,213.729903 30.538142,209.465446 28.2166477,203.491244 C26.4637138,198.980361 24.3784845,192.202858 23.808908,179.723492 C23.1930946,166.225901 23.0630219,162.177893 23.0630219,128.000254 C23.0630219,93.8226147 23.1930946,89.7746075 23.808908,76.2775241 C24.3784845,63.7976504 26.4637138,57.0201472 28.2166477,52.5092638 C30.538142,46.5350617 33.3123505,42.2706052 37.7912238,37.7917319 C42.2700971,33.3128586 46.5345536,30.5386501 52.5092638,28.2166477 C57.0196391,26.4642218 63.7971424,24.3789926 76.2765079,23.8094161 C89.7740994,23.1936027 93.8221066,23.06353 127.999746,23.06353 M127.999746,0 C93.2367791,0 88.8783247,0.147348072 75.2257637,0.770274749 C61.601148,1.39218523 52.2968794,3.55566141 44.1546281,6.72008828 C35.7374966,9.99121548 28.5992446,14.3679613 21.4833489,21.483857 C14.3674532,28.5997527 9.99070739,35.7380046 6.71958019,44.1551362 C3.55515331,52.2973875 1.39167714,61.6016561 0.769766653,75.2262718 C0.146839975,88.8783247 0,93.2372872 0,128.000254 C0,162.763221 0.146839975,167.122183 0.769766653,180.774236 C1.39167714,194.398852 3.55515331,203.703121 6.71958019,211.845372 C9.99070739,220.261995 14.3674532,227.400755 21.4833489,234.516651 C28.5992446,241.632547 35.7374966,246.009293 44.1546281,249.28042 C52.2968794,252.444847 61.601148,254.608323 75.2257637,255.230233 C88.8783247,255.85316 93.2367791,256 127.999746,256 C162.762713,256 167.121675,255.85316 180.773728,255.230233 C194.398344,254.608323 203.702613,252.444847 211.844864,249.28042 C220.261995,246.009293 227.400247,241.632547 234.516143,234.516651 C241.632039,227.400755 246.008785,220.262503 249.279912,211.845372 C252.444339,203.703121 254.607815,194.398852 255.229725,180.774236 C255.852652,167.122183 256,162.763221 256,128.000254 C256,93.2372872 255.852652,88.8783247 255.229725,75.2262718 C254.607815,61.6016561 252.444339,52.2973875 249.279912,44.1551362 C246.008785,35.7380046 241.632039,28.5997527 234.516143,21.483857 C227.400247,14.3679613 220.261995,9.99121548 211.844864,6.72008828 C203.702613,3.55566141 194.398344,1.39218523 180.773728,0.770274749 C167.121675,0.147348072 162.762713,0 127.999746,0 Z M127.999746,62.2703115 C91.698262,62.2703115 62.2698034,91.69877 62.2698034,128.000254 C62.2698034,164.301738 91.698262,193.730197 127.999746,193.730197 C164.30123,193.730197 193.729689,164.301738 193.729689,128.000254 C193.729689,91.69877 164.30123,62.2703115 127.999746,62.2703115 Z M127.999746,170.667175 C104.435741,170.667175 85.3328252,151.564259 85.3328252,128.000254 C85.3328252,104.436249 104.435741,85.3333333 127.999746,85.3333333 C151.563751,85.3333333 170.666667,104.436249 170.666667,128.000254 C170.666667,151.564259 151.563751,170.667175 127.999746,170.667175 Z M211.686338,59.6734287 C211.686338,68.1566129 204.809755,75.0337031 196.326571,75.0337031 C187.843387,75.0337031 180.966297,68.1566129 180.966297,59.6734287 C180.966297,51.1902445 187.843387,44.3136624 196.326571,44.3136624 C204.809755,44.3136624 211.686338,51.1902445 211.686338,59.6734287 Z"
										fill="white"
									></path>
								</g>
							</svg>
						</Link>
						<Link href="">
							<svg
								fill="white"
								width="20px"
								version="1.1"
								id="Layer_1"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 310 310"
							>
								<g id="XMLID_834_">
									<path
										id="XMLID_835_"
										d="M81.703,165.106h33.981V305c0,2.762,2.238,5,5,5h57.616c2.762,0,5-2.238,5-5V165.765h39.064
											c2.54,0,4.677-1.906,4.967-4.429l5.933-51.502c0.163-1.417-0.286-2.836-1.234-3.899c-0.949-1.064-2.307-1.673-3.732-1.673h-44.996
											V71.978c0-9.732,5.24-14.667,15.576-14.667c1.473,0,29.42,0,29.42,0c2.762,0,5-2.239,5-5V5.037c0-2.762-2.238-5-5-5h-40.545
											C187.467,0.023,186.832,0,185.896,0c-7.035,0-31.488,1.381-50.804,19.151c-21.402,19.692-18.427,43.27-17.716,47.358v37.752H81.703
											c-2.762,0-5,2.238-5,5v50.844C76.703,162.867,78.941,165.106,81.703,165.106z"
									/>
								</g>
							</svg>
						</Link>
					</div>
				</div>
				<div className={style.contact}>
					<div className={style.partition}>
						<h3 className={righteous.className + " " + style.head}>
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
