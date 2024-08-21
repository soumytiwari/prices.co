import styles from '@/styles/searchResults.module.css'
import Cards from '../productCards';
import { useState } from 'react';
import FilterMenu from './filters';

let products = [
	{
		id: "1",
		url: "",
		title: "phone lorem epsum dolor sit",
		price: "$2000",
		rating: 4.5,
	},
	{
		id: "2",
		url: "",
		title: "watch tres do unus",
		price: "$2000",
		rating: 4,
	},
	{ id: "3", url: "", title: "nihil nihil nihil", price: "$2000", rating: 3 },
	{
		id: "4",
		url: "",
		title: "blade of miquella , malenaia",
		price: "$2000",
		rating: 3.7,
	},
	{
		id: "5",
		url: "",
		title: "starscourage rhadhan",
		price: "$2000",
		rating: 4.4,
	},
	{
		id: "6",
		url: "",
		title: "phone lorem epsum dolor sit",
		price: "$2000",
		rating: 4.5,
	},
	{
		id: "7",
		url: "",
		title: "watch tres do unus",
		price: "$2000",
		rating: 4,
	},
	{ id: "8", url: "", title: "nihil nihil nihil", price: "$2000", rating: 3 },
	{
		id: "9",
		url: "",
		title: "blade of miquella , malenaia",
		price: "$2000",
		rating: 3.7,
	},
	{
		id: "10",
		url: "",
		title: "starscourage rhadhan",
		price: "$2000",
		rating: 4.4,
	},
	{
		id: "11",
		url: "",
		title: "phone lorem epsum dolor sit",
		price: "$2000",
		rating: 4.5,
	},
	{
		id: "12",
		url: "",
		title: "watch tres do unus",
		price: "$2000",
		rating: 4,
	},
	{
		id: "13",
		url: "",
		title: "nihil nihil nihil",
		price: "$2000",
		rating: 3,
	},
	{
		id: "14",
		url: "",
		title: "blade of miquella , malenaia",
		price: "$2000",
		rating: 3.7,
	},
	{
		id: "15",
		url: "",
		title: "starscourage rhadhan",
		price: "$2000",
		rating: 4.4,
	},
	{
		id: "16",
		url: "",
		title: "nihil nihil nihil",
		price: "$2000",
		rating: 3,
	},
	{
		id: "17",
		url: "",
		title: "blade of miquella , malenaia",
		price: "$2000",
		rating: 3.7,
	},
	{
		id: "18",
		url: "",
		title: "starscourage rhadhan",
		price: "$2000",
		rating: 4.4,
	},
];

const itemsPerPage = 16;
export default function ResultProducts() {

	const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(products.length / itemsPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleFirstPage = () => {
        setCurrentPage(1);
    };

    const handleLastPage = () => {
        setCurrentPage(totalPages);
    };

    const displayedProducts = products.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return(
        <div className= {styles.resultsContainer}>
            <h1 className={styles.searchTitle}>Result <sup>1</sup></h1>
			<FilterMenu/>
            <div className={styles.cardContainer}>
                {displayedProducts.map((item, index) => {
                    return (
                        <Cards
                            key={index}
                            id={item.id}
                            url={item.url}
                            title={item.title}
                            price={item.price}
                            rating={item.rating}
                        />
                    );
                })}
            </div>
			<div className={styles.pagination}>
                <button 
                    className={styles.pageButton} 
                    onClick={handleFirstPage}
                    disabled={currentPage === 1}
                >
                    &laquo;
                </button>
                <button 
                    className={styles.pageButton} 
                    onClick={handlePreviousPage}
                    disabled={currentPage === 1}
                >
                    &lsaquo; Previous
                </button>
                <span className={styles.pageInfo}>
                    Page {currentPage} of {totalPages}
                </span>
                <button 
                    className={styles.pageButton} 
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                >
                    Next &rsaquo;
                </button>
                <button 
                    className={styles.pageButton} 
                    onClick={handleLastPage}
                    disabled={currentPage === totalPages}
                >
                    &raquo;
                </button>
            </div>
        </div>
    )
}