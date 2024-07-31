import Link from "next/link";
import { Rocket } from "../../interfaces";

const API_URL = process.env.NEXT_PUBLIC_SPACEX_API_URL;

async function getData() {
	const res = await fetch(`${API_URL}`);

	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}

	return res.json();
}

export default async function RocketList() {
	const rockets = await getData();

	return (
		<div className="flex flex-col justify-center items-center">
			<h2 className="text-2xl md:text-3xl pt-10 pb-6">SpaceX Rockets</h2>
			<ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
				{rockets?.map((rocket: Rocket) => (
					<li
						className="flex flex-col gap-3 font-sans bg-black bg-opacity-50 p-2 rounded-md hover:scale-105 shadow-md shadow-black cursor-pointer"
						key={rocket?.id}
					>
						<Link href={`/dashboard/rocket/${rocket?.id}`}>
							<h2 className="text-xl md:text-2xl text-center font-semibold">
								{rocket.name}
							</h2>
							{/* <p className="text-neutral-400">{rocket.description}</p> */}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
