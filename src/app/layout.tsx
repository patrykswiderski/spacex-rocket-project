import type { Metadata } from "next";
import "./globals.css";
import { Do_Hyeon } from "next/font/google";

const inter = Do_Hyeon({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
	title: "SpaceX Rocket Project",
	description: "Testing project",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
