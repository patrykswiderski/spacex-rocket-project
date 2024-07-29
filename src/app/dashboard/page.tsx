import React from "react";
import Header from "./_components/Header";
import RocketList from "./_components/RocketList";

function Dashboard() {
	return (
		<div className="text-neutral-200 w-[80vw] m-auto">
			<Header />
			<RocketList />
		</div>
	);
}

export default Dashboard;
