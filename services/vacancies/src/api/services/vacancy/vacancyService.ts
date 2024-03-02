import { instance } from "@/api/axiosConfig";

export const VacancyService = {
	liked: async (id: string): Promise<boolean> => instance.post("/vacancy/liked", { id }),
};
