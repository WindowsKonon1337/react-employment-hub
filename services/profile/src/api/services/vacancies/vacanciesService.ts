import { instance } from "@/api/axiosConfig";

import { VacancyQueryCardData } from "./types";
import { VacancyCardData } from "@/components/VacancyCard/types";

export const VacanciesService = {
	// getAll: async (page: number) => instance.get("/vacancies/all", { params: [{ page }] }),
	getAll: async (page: number): Promise<VacancyCardData[]> => [
		{
			description: "test etste",
			id: "test1",
			tags: [{ value: "test", label: "test" }],
			title: "test1",
			salary: { amount: "200", currency: "euros", inTime: "hour" },
		},
		{
			description: "test etste",
			id: "test",
			tags: [{ value: "test", label: "test" }],
			title: "test",
			salary: { amount: "200", currency: "euros", inTime: "hour" },
		},
		{
			description: "test etste",
			id: "test",
			tags: [{ value: "test", label: "test" }],
			title: "test",
			salary: { amount: "200", currency: "euros", inTime: "hour" },
		},
		{
			description: "test etste",
			id: "test",
			tags: [{ value: "test", label: "test" }],
			title: "test",
			salary: { amount: "200", currency: "euros", inTime: "hour" },
		},
		{
			description: "test etste",
			id: "test",
			tags: [{ value: "test", label: "test" }],
			title: "test",
			salary: { amount: "200", currency: "euros", inTime: "hour" },
		},
		{
			description: "test etste",
			id: "test",
			tags: [{ value: "test", label: "test" }],
			title: "test",
			salary: { amount: "200", currency: "euros", inTime: "hour" },
		},
		{
			description: "test etste",
			id: "test",
			tags: [{ value: "test", label: "test" }],
			title: "test",
			salary: { amount: "200", currency: "euros", inTime: "hour" },
		},
		{
			description: "test etste",
			id: "test",
			tags: [{ value: "test", label: "test" }],
			title: "test",
			salary: { amount: "200", currency: "euros", inTime: "hour" },
		},
		{
			description: "test etste",
			id: "test",
			tags: [{ value: "test", label: "test" }],
			title: "test",
			salary: { amount: "200", currency: "euros", inTime: "hour" },
		},
		{
			description: "test etste",
			id: "test",
			tags: [{ value: "test", label: "test" }],
			title: "test",
			salary: { amount: "200", currency: "euros", inTime: "hour" },
		},
		{
			description: "test etste",
			id: "test",
			tags: [{ value: "test", label: "test" }],
			title: "test",
			salary: { amount: "200", currency: "euros", inTime: "hour" },
		},
		{
			description: "test etste",
			id: "test",
			tags: [{ value: "test", label: "test" }],
			title: "test",
			salary: { amount: "200", currency: "euros", inTime: "hour" },
		},
		{
			description: "test etste",
			id: "test",
			tags: [{ value: "test", label: "test" }],
			title: "test",
			salary: { amount: "200", currency: "euros", inTime: "hour" },
		},
		{
			description: "test etste",
			id: "test",
			tags: [{ value: "test", label: "test" }],
			title: "test",
			salary: { amount: "200", currency: "euros", inTime: "hour" },
		},
		{
			description: "test etste",
			id: "test",
			tags: [{ value: "test", label: "test" }],
			title: "test",
			salary: { amount: "200", currency: "euros", inTime: "hour" },
		},
		{
			description: "test etste",
			id: "test",
			tags: [{ value: "test", label: "test" }],
			title: "test",
			salary: { amount: "200", currency: "euros", inTime: "hour" },
		},
	],
	delete: async (id: string) => instance.post("/vacancies/delete", id),
	// update: async (id: string, data: VacancyQueryCardData): Promise<VacancyQueryCardData> =>
	// 	instance.post("/vacancies/update", data, { params: [{ id }] }),
	update: async (id: string, data: VacancyQueryCardData): Promise<VacancyQueryCardData> => ({
		description: "test etste",
		id: "test1",
		tags: ["test"],
		title: "test45",
		salary: { amount: "200", currency: "euros", inTime: "hour" },
	}),
	getVacancy: async (id: string) => instance.post("/vacancies/vacacny", id),
};
