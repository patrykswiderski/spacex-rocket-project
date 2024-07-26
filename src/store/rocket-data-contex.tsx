import { createContext } from "react";

interface Rocket {
	id: string;
	name: string;
	description: string;
}

export const RocketContext = createContext<Rocket[]>([]);
