import { IoStar } from "react-icons/io5";
import styles from '@/styles/starRating.module.css'
export default function StarRating(
    {rating, totalCount, id}:{
        rating : number,
        totalCount : string|number
        id : string
    }) {
    const colors = {
        orange: "#F2C265",
        gray: "#a9a9a9",
    };

    const totalStars = 5;
    let stars = [];

	for (let i = 1; i <= totalStars; i++) {
		let fullstar = Math.floor(rating);
		if (i <= fullstar) {
			stars.push(
				<IoStar
					key={i}
					color={colors.orange}
				/>
			);
		} else if (i === Math.ceil(rating) && rating % 1 !== 0) {
			let partstar = rating - fullstar;
			stars.push(
				<svg
					width="21"
					height="21"
					key={i}
				>
					<defs>
						<linearGradient
							id={`starGradient-${id}`}
							x1="0%"
							y1="0%"
							x2="100%"
							y2="0%"
						>
							<stop
								offset={`${partstar * 100}%`}
								stopColor={colors.orange}
							/>
							<stop
								offset="0%"
								stopColor={colors.gray}
							/>
						</linearGradient>
					</defs>
					<IoStar
						key={i}
						fill={`url(#starGradient-${id})`}
					/>
				</svg>
			);
		} else {
			stars.push(
				<IoStar
					key={i}
					color={colors.gray}
				/>
			);
		}
	}
    return (
        <div className={styles.rating}>
            {stars}
            <span>{totalCount}</span>
        </div>
    )
}