"use client";
import React from "react";
import RocketList from "./_components/RocketList";
import Header from "./_components/Header";

function Dashboard() {
	return (
		<div className="text-neutral-200 w-[80vw] m-auto">
			<Header />
			<RocketList />
		</div>
	);
}

export default Dashboard;
