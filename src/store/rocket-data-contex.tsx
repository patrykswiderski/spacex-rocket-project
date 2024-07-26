import { createContext } from "react";

interface Rocket {
	id: string;
	name: string;
	description: string;
	first_flight: string;
	wikipedia: string;
}

export const RocketContext = createContext<Rocket[]>([]);
