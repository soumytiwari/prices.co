import styles from '@/styles/searchResults.module.css'
import Cards from '../productCards';
import { useContext, useEffect, useState } from 'react';
import FilterMenu from './filters';
import { MyContext } from './context';

interface product {
		id: string;
		url: string;
		title: string;
		price: string;
		rating: number;
}
let products : product[] = [
	{
		id: "1",
		url: "",
		title: "phone lorem epsum dolor sit",
		price: "$99",
		rating: 4.5,
	},
	{
		id: "2",
		url: "",
		title: "watch tres do unus",
		price: "$1299",
		rating: 4,
	},
	{ id: "3", url: "", title: "nihil nihil nihil", price: "$348", rating: 3 },
	{
		id: "4",
		url: "",
		title: "blade of miquella , malenaia",
		price: "$449",
		rating: 3.7,
	},
	{
		id: "5",
		url: "",
		title: "starscourage rhadhan",
		price: "$299",
		rating: 4.4,
	},
	{
		id: "6",
		url: "",
		title: "phone lorem epsum dolor sit",
		price: "$499",
		rating: 4.5,
	},
	{
		id: "7",
		url: "",
		title: "watch tres do unus",
		price: "$799",
		rating: 4,
	},
	{ id: "8", url: "", title: "nihil nihil nihil", price: "$1199", rating: 3 },
	{
		id: "9",
		url: "",
		title: "blade of miquella , malenaia",
		price: "$499",
		rating: 3.7,
	},
	{
		id: "10",
		url: "",
		title: "starscourage rhadhan",
		price: "$399",
		rating: 4.4,
	},
	{
		id: "11",
		url: "",
		title: "phone lorem epsum dolor sit",
		price: "$299",
		rating: 4.5,
	},
	{
		id: "12",
		url: "",
		title: "watch tres do unus",
		price: "$199",
		rating: 4,
	},
	{
		id: "13",
		url: "",
		title: "nihil nihil nihil",
		price: "$999",
		rating: 3,
	},
	{
		id: "14",
		url: "",
		title: "blade of miquella , malenaia",
		price: "$200",
		rating: 3.7,
	},
	{
		id: "15",
		url: "",
		title: "starscourage rhadhan",
		price: "$1235",
		rating: 4.4,
	},
	{
		id: "16",
		url: "",
		title: "watch tres do unus",
		price: "$199",
		rating: 4,
	},
	{
		id: "17",
		url: "",
		title: "nihil nihil nihil",
		price: "$999",
		rating: 3,
	},
	{
		id: "18",
		url: "",
		title: "blade of miquella , malenaia",
		price: "$200",
		rating: 3.7,
	},
	{
		id: "19",
		url: "",
		title: "starscourage rhadhan",
		price: "$1235",
		rating: 4.4,
	},
];

const itemsPerPage = 16;
export default function ResultProducts() {

	const [currentPage, setCurrentPage] = useState(1);
	const [sorted, setSorted] = useState<product[]>(products);
	const {sortBy} = useContext(MyContext)!;
    const totalPages = Math.ceil(products.length / itemsPerPage);
	useEffect(()=>{
		if (sortBy === 'PRICE') {
            let sort = [...products].sort((a, b) => {
                // Remove the $ sign and convert to number for sorting
                const priceA = parseFloat(a.price.replace('$', ''));
                const priceB = parseFloat(b.price.replace('$', ''));
                return priceA - priceB; // Ascending order
            });
			setSorted(sort);
        }
	},[sortBy])

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

    const displayedProducts = sorted.slice(
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