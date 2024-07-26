"use client";
import React, { useEffect, useState } from "react";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import axios from "axios";
import { RocketContext } from "@/store/rocket-data-contex";

interface Rocket {
	id: string;
	name: string;
	description: string;
	first_flight: string;
	wikipedia: string;
}

function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const [rockets, setRockets] = useState<Rocket[]>([]);

	useEffect(() => {
		const fetchRockets = async () => {
			const response = await axios.get("https://api.spacexdata.com/v4/rockets");
			setRockets(response.data);
		};

		fetchRockets();
	}, []);

	return (
		<RocketContext.Provider value={rockets}>
			<div className="h-screen bg-[url('../../public/space.png')] bg-no-repeat bg-center bg-cover">
				<Navbar />
				<div className="flex justify-center items-center h-[80vh]">
					{children}
				</div>
			</div>
			<Footer />
		</RocketContext.Provider>
	);
}

export default Layout;
