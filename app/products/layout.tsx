import SearchBar from "@/components/products/search";

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <div style={{paddingTop:'10vh'}}>
			<SearchBar />
			{/* TODO : add path here eg. Home >> products >> ... >> */}
			{children}
		</div>;
}
