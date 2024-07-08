import { instance } from "@/api/axiosConfig";

import { VacancyQueryCardData } from "./types";

export const VacanciesService = {
	getAll: async () => instance.get("/vacancies/all"),
	delete: async (id: string) => instance.post("/vacancies/delete", id),
	update: async (data: VacancyQueryCardData) => instance.post("/vacancies/update", data),
	getVacancy: async (id: string) => instance.post("/vacancies/vacacny", id),
};
