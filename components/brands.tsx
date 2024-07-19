import style from "@/styles/brand_logo.module.css";
export default function Brands({ logos }: { logos: string[] }) {
	return (
		<div className={style.logoContainer}>
			<div className={style.scroll}>
				{logos.concat(logos).map((logo, index) => (
					<div
						className={style.logoItem}
						key={index}
					>
						<img
							src={logo}
							alt="Logo"
						/>
					</div>
				))}
			</div>
		</div>
	);
}
