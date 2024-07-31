"use client";
import useSWR from "swr";
import { useParams, useRouter } from "next/navigation";
import { Rocket } from "../../../interfaces";
import { fetcher } from "../../../utils/fetcher";

const API_URL = process.env.NEXT_PUBLIC_SPACEX_API_URL;

export default function RocketPage() {
	const { id } = useParams();
	const router = useRouter();
	const {
		data: rocket,
		error,
		isLoading,
	} = useSWR<Rocket>(`${API_URL}/${id}`, fetcher);

	if (isLoading) return <div>Loading...</div>;
	if (error || !rocket) {
		router.push("/dashboard/error");
		return null;
	}

	return (
		<div className="flex flex-col gap-3 font-sans bg-black size-5/6 md:size-4/6 bg-opacity-50 p-4 md:p-8 rounded-md shadow-md shadow-black">
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
		</div>
	);
}
