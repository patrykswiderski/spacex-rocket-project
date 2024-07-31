"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Error() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen">
			<h1 className="text-4xl font-bold mb-2 text-neutral-100">
				Something went wrong!
			</h1>
			<p className="mb-4 font-sans text-neutral-100">
				We couldn&apos;t find the rocket you&apos;re looking for.
			</p>
			<Link href="/dashboard">
				<Button
					variant="ghost"
					className="text-neutral-100 font-sans border border-neutral-100 font-semibold bg-black bg-opacity-30 text-xl md:text-2xl p-6 md:p-8"
				>
					Go back to Home
				</Button>
			</Link>
		</div>
	);
}
