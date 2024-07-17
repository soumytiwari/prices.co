import Background from "@/components/background";
import Brands from "@/components/brands";

const logos = [
	"/logos/amazon-logo.png",
	"/logos/walmart-logo.png",
	"/logos/meesho-logo.png",
	"/logos/cliq-logo.png",
	"logos/flipkart-logo.png",
	"logos/ebay-logo.png",
	"logos/myntra-logo.png",
	"logos/shopify-logo.png",
];

const images = [
	"/images/andi-rieger-x9H9GupmS48.jpg",
	"/images/cat-han-BJ3grTerqY4.jpg",
	"/images/cesar-la-rosa-HbAddptme1Q.jpg",
	"/images/harper-sunday-HCfV9rQuIrs.jpg",
	"/images/mali-902194.jpg",
	"/images/vinicius-amnx-amano-V16owPoti24.jpg",
];
export default function Home() {
	return (
		<div>
			<Background images={images} />
			<Brands logos={logos} />
			<div className="Main-container">
				<div className="trends">
					<h1>Trending</h1>
				</div>
			</div>
		</div>
	);
}
