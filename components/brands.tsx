export default function Brands({ logos }: { logos: string[] }) {
	return (
		<div className="scrollContainer">
			<div className="scroll">
				{logos.concat(logos).map((logo, index) => (
					<div
						className="logoItem"
						key={index}
					>
						<img
							src={logo}
							alt="Logo"
						/>
					</div>
				))}
			</div>
		</div>
	);
}
