import { instance } from "@/api/axiosConfig";

export const LocationService = {
	getLocation: async (location: string): Promise<string[]> =>
		instance.post("/location", { location }),
	// getLocation: async (location: string): Promise<string[]> => ["test1", "test2"],
};
