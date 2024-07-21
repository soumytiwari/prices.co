import style from "@/styles/categaroyCards.module.css";
export default function CategoryCards({
	content,
}: {
	content: {
		id: string;
		title: string;
		url: string;
	}[];
}) {
	return (
		<div className={style.categories}>
			<h1>Browse by Categories</h1>
			<div className={style.categoryCard_container}>
				{content.map((item, index) => {
					return (
						<div
							key={index}
							id={item.id}
							className={style.c}
							style={{
								gridArea: `card${index + 1}`,
							}}
						>
							<div
								className={style.gradient}
								style={{ backgroundImage: `url(${item.url})` }}
							>
								{item.title}
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
