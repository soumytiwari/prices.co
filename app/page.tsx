"use client";
import Navbar from "@/components/navbar";
import { useEffect, useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const images = [
	"/images/cesar-la-rosa-HbAddptme1Q.jpg",
	"/images/jaclyn-moy-ugZxwLQuZec.jpg",
	"/images/andi-rieger-x9H9GupmS48.jpg",
	"/images/vinicius-amnx-amano-V16owPoti24.jpg",
	"/images/cat-han-BJ3grTerqY4.jpg",
	"/images/harper-sunday-HCfV9rQuIrs.jpg",
	"/images/woodwatch-SNxu-LX9dLo.jpg",
	"/images/mali-902194.jpg",
];

export default function Home() {
	const [currentImage, setCurrentImage] = useState(0);

	useEffect(() => {
		const intervalID = setInterval(() => {
			setCurrentImage((preImage) => (preImage + 1) % images.length);
		}, 5000);

		return () => clearInterval(intervalID);
	});
	return (
		<div
			className="bg"
			style={{ backgroundImage: `url(${images[currentImage]})` }}
		>
			<div className="gradient">
				<Navbar />
				<div className="ad">
					<button>
						<FiArrowLeft className="arrbtn" />
					</button>
					<div className="headlines">
						<h1>Discover, Compare, and Save</h1>
						<h2>on every purchase</h2>
						<p>All in One Place</p>
					</div>
					<button>
						<FiArrowRight className="arrbtn" />
					</button>
				</div>
			</div>
		</div>
	);
}
