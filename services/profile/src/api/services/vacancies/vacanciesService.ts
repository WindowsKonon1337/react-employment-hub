import { instance } from "@/api/axiosConfig";

export const VacanciesService = {
	getAll: async () => instance.get("/vacancies/all"),
	delete: async (id: string) => instance.post("/vacancies/delete", id),
	getVacancy: async (id: string) => instance.post("/vacancies/vacacny", id),
};
