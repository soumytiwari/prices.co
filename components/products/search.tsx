import { useState } from "react";
import style from "@/styles/searchBar.module.css";

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
		<div>
			<input
				className={style.main_input}
				type="text"
				placeholder="bags, sunglasses etc"
				value={inputValue}
				onChange={(e) => setInput(e.target.value)}
				onKeyDown={handleKeyDown}
			></input>
		</div>
	);
}
