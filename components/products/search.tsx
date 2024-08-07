import { useState } from "react";
import style from "@/styles/searchBar.module.css";
import BrandLogo from "../brand";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { TbShoppingBag } from "react-icons/tb";
import { FaRegUser } from "react-icons/fa6";

export default function SearchBar() {
	const [inputValue, setInput] = useState("");
	const [categoryActive, setCategoryactive] = useState(false);
	const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key == "Enter") {
			console.log(inputValue);
		}
	};
	const handCategoryclick = () => {
		setCategoryactive(!categoryActive);
	};
	const handleSearch = () => {
		console.log("pressed");
	};
	return (
		<div className={style.searchBar}>
			<BrandLogo />
			<div className={style.inputBar}>
				<button
					className={style.categoryBtn}
					onMouseDownCapture={handCategoryclick}
				>
					<p>Categories</p>
					{categoryActive? <IoIosArrowDown />: <IoIosArrowUp/>} 
					
				</button>
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
			<div className={style.icon}>
				<TbShoppingBag size={'1.5em'}	style={{ marginRight:'20px'}}/>
				<FaRegUser size={'1.2em'}/>
			</div>
			
		</div>
	);
}
