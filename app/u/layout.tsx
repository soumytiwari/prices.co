import Navbar from "@/components/navbar";

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <div style={{paddingTop:"10vh"}}>
		{/* <Navbar/> */}
		{/* TODO : add path here eg. Home >> products >> ... >> */}
		{children}
		</div>;
}
