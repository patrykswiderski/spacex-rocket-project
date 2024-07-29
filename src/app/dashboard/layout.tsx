import React from "react";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";

function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<div className="h-screen bg-[url('../../public/space.png')] bg-no-repeat bg-center bg-cover">
				<Navbar />
				<div className="flex justify-center items-center h-[80vh]">
					{children}
				</div>
			</div>
			<Footer />
		</>
	);
}

export default Layout;
