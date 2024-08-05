import { useState } from "react";
import style from "@/styles/searchBar.module.css";
import BrandLogo from "../brand";
import { IoIosSearch } from "react-icons/io";

export default function SearchBar() {
	const [inputValue, setInput] = useState("");
	const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key == "Enter") {
			console.log(inputValue);
		}
	};
	const handleSearch = () => {
		console.log("pressed");
	};
	return (
		<div className={style.searchBar}>
			<BrandLogo />
			<div className={style.inputBar}>
				<input
					className={style.main_input}
					type="text"
					placeholder="search for Products"
					value={inputValue}
					onChange={(e) => setInput(e.target.value)}
					onKeyDown={handleKeyDown}
				/>
				<svg
					className={style.searchIcon}
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<circle
						cx="11"
						cy="11"
						r="8"
					></circle>
					<line
						x1="21"
						y1="21"
						x2="16.65"
						y2="16.65"
					></line>
				</svg>
			</div>
		</div>
	);
}
