"use client";

import { KeyboardEvent, useState } from "react";
import Navbar from "./navbar";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

export default function Background({ images }: { images: string[] }) {
	const [currentImage, setCurrentImage] = useState(0);
	const [inputValue, setInput] = useState("");
	const handleKeyDown = (event: KeyboardEvent) => {
		if (event.key == "Enter") {
			console.log(inputValue);
		}
	};
	const handleSearch = () => {
		console.log("pressed");
	};

	const previousImage = () => {
		setCurrentImage(
			(prevImage) => (prevImage - 1 + images.length) % images.length
		);
	};

	const nextImage = () => {
		setCurrentImage((prevImage) => (prevImage + 1) % images.length);
	};
	return (
		<div
			className="bg"
			style={{ backgroundImage: `url(${images[currentImage]})` }}
		>
			<div className="gradient">
				<Navbar />
				<div className="ad">
					<button>
						<FiArrowLeft
							className="arrbtn"
							onClick={previousImage}
						/>
					</button>
					<div className="headlines">
						<h1>Discover, Compare, and Save</h1>
						<h2>on every purchase</h2>
						<p>All in One Place</p>
						<div className="lets-begin">
							<input
								className="m-input"
								type="text"
								placeholder="bags, sunglasses etc"
								value={inputValue}
								onChange={(e) => setInput(e.target.value)}
								onKeyDown={handleKeyDown}
							></input>
							<button
								className="start"
								onClick={handleSearch}
							></button>
						</div>
					</div>
					<button>
						<FiArrowRight
							className="arrbtn"
							onClick={nextImage}
						/>
					</button>
				</div>
			</div>
		</div>
	);
}
