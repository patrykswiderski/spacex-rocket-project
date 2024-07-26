import React from "react";
import Image from "next/image";

function Navbar() {
	const MenuList = [
		{ name: "Home", path: "/" },
		{ name: "Rockets", path: "/rockets" },
	];

	return (
		<nav className="flex flex-row justify-between items-center py-5 px-14 shadow-md shadow-neutral-500 mb-2 bg-black">
			<div className="flex flex-row justify-between items-center gap-4">
				<Image
					src={"/rocket_logo.png"}
					alt="logo with rocket"
					width={80}
					height={80}
				/>
				<h2 className="text-neutral-100 text-4xl font-bold">SpaceX Garage</h2>
			</div>

			<div className="flex flex-row gap-8">
				{MenuList.map((menu, index) => (
					<div
						className="hover:scale-110 transition-all cursor-pointer"
						key={index}
					>
						<h2 className="text-neutral-200 text-xl">{menu.name}</h2>
					</div>
				))}
			</div>
		</nav>
	);
}

export default Navbar;
