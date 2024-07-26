import React from "react";
import { TypeAnimation } from "react-type-animation";

function Header() {
	return (
		<header>
			<div className="w-[80vw] m-auto text-center flex flex-col">
				<TypeAnimation
					sequence={[
						"Welcome to SpaceX",
						2000,
						"SpaceX Garage",
						2000,
						"Explore SpaceX Rockets",
						2000,
					]}
					wrapper="span"
					speed={40}
					repeat={Infinity}
					className="text-white font-sans font-semibold text-5xl pb-8"
				/>
				<h2 className="text-neutral-300 font-sans text-2xl">
					SpaceX designs, manufactures and launches advanced rockets and
					spacecraft. The company was founded in 2002 to revolutionize space
					technology, with the ultimate goal of enabling people to live on other
					planets.
				</h2>
			</div>
		</header>
	);
}

export default Header;
