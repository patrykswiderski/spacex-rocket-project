import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import logo from "/public/spacex_logo_vector.svg";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center p-8 gap-4 md:gap-8 bg-[url('../../public/space.png')] bg-no-repeat bg-center bg-cover">
			<Image src={logo} alt="logo.png" width={500} height={800} />
			<Link href="/dashboard">
				<Button
					variant="ghost"
					className="text-neutral-100 font-sans border border-neutral-100 font-semibold bg-black bg-opacity-30 text-xl md:text-2xl p-6 md:p-8"
				>
					Explore our Rockets!
				</Button>
			</Link>
		</main>
	);
}
