"use client";
import useSWR from "swr";
import { usePathname } from "next/navigation";
import { Rocket } from "@/app/interfaces";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function RocketPage() {
	const pathname = usePathname();
	const id = pathname.split("/").pop();
	const { data: rockets, error } = useSWR<Rocket[]>(
		"https://api.spacexdata.com/v4/rockets",
		fetcher
	);

	if (error) return <div>Failed to load</div>;
	if (!rockets) return <div>Loading...</div>;

	const rocket = rockets.find((r) => r.id === id);

	return (
		<div className="flex flex-col gap-3 font-sans bg-black size-5/6 md:size-4/6 bg-opacity-50 p-4 md:p-8 rounded-md shadow-md shadow-black">
			{rocket ? (
				<>
					<h2 className="text-neutral-100 text-3xl md:text-4xl text-center font-semibold pb-3 md:pb-6">
						{rocket.name}
					</h2>
					<div className="text-neutral-300 flex flex-col gap-4">
						<p>
							Description: <strong>{rocket.description}</strong>
						</p>
						<p>
							First flight: <strong>{rocket.first_flight}</strong>
						</p>
						<p>
							Wikipedia page:{" "}
							<a
								href={rocket.wikipedia}
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue-500 underline"
							>
								{rocket.wikipedia}
							</a>
						</p>
					</div>
				</>
			) : (
				<h2 className="text-2xl text-center font-semibold">
					Sorry, Rocket not found
				</h2>
			)}
		</div>
	);
}
