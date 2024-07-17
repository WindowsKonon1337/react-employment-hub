import { instance } from "@/api/axiosConfig";

import { CreateCompanyQueryData } from "./types";
import { CompanyCardData } from "@/components";

export const CompanyService = {
	// getAll: async (page: number): Promise<CompanyCardData[]> =>
	// 	instance.get("/companies", { params: { page: page } }),
	getAll: (page: number): CompanyCardData[] => [
		{
			id: "test1",
			companyTitle: "title",
			companyDescription: "test",
			location: "Russia/Moscow",
			tags: [{ value: "test" }],
			companyImg:
				"https://images.unsplash.com/photo-1718103377026-df9e40c78141?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
		{
			id: "test2",
			companyTitle: "title",
			companyDescription: "test",
			location: "Russia/Moscow",
			tags: [{ value: "test" }],
			companyImg:
				"https://images.unsplash.com/photo-1718103377026-df9e40c78141?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
		{
			id: "test3",
			companyTitle: "title",
			companyDescription: "test",
			location: "Russia/Moscow",
			tags: [{ value: "test" }],
			companyImg:
				"https://images.unsplash.com/photo-1718103377026-df9e40c78141?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
		{
			id: "test4",
			companyTitle: "title",
			companyDescription: "test",
			location: "Russia/Moscow",
			tags: [{ value: "test" }],
			companyImg:
				"https://images.unsplash.com/photo-1718103377026-df9e40c78141?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
		{
			id: "test5",
			companyTitle: "title",
			companyDescription: "test",
			location: "Russia/Moscow",
			tags: [{ value: "test" }],
			companyImg:
				"https://images.unsplash.com/photo-1718103377026-df9e40c78141?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
		{
			id: "test6",
			companyTitle: "title",
			companyDescription: "test",
			location: "Russia/Moscow",
			tags: [{ value: "test" }],
			companyImg:
				"https://images.unsplash.com/photo-1718103377026-df9e40c78141?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
		{
			id: "test7",
			companyTitle: "title",
			companyDescription: "test",
			location: "Russia/Moscow",
			tags: [{ value: "test" }],
			companyImg:
				"https://images.unsplash.com/photo-1718103377026-df9e40c78141?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
		{
			id: "test8",
			companyTitle: "title",
			companyDescription: "test",
			location: "Russia/Moscow",
			tags: [{ value: "test" }],
			companyImg:
				"https://images.unsplash.com/photo-1718103377026-df9e40c78141?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
		{
			id: "test9",
			companyTitle: "title",
			companyDescription: "test",
			location: "Russia/Moscow",
			tags: [{ value: "test" }],
			companyImg:
				"https://images.unsplash.com/photo-1718103377026-df9e40c78141?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
		{
			id: "test10",
			companyTitle: "title",
			companyDescription: "test",
			location: "Russia/Moscow",
			tags: [{ value: "test" }],
			companyImg:
				"https://images.unsplash.com/photo-1718103377026-df9e40c78141?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
		{
			id: "test11",
			companyTitle: "title",
			companyDescription: "test",
			location: "Russia/Moscow",
			tags: [{ value: "test" }],
			companyImg:
				"https://images.unsplash.com/photo-1718103377026-df9e40c78141?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
		{
			id: "test12",
			companyTitle: "title",
			companyDescription: "test",
			location: "Russia/Moscow",
			tags: [{ value: "test" }],
			companyImg:
				"https://images.unsplash.com/photo-1718103377026-df9e40c78141?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
		{
			id: "test13",
			companyTitle: "title",
			companyDescription: "test",
			location: "Russia/Moscow",
			tags: [{ value: "test" }],
			companyImg:
				"https://images.unsplash.com/photo-1718103377026-df9e40c78141?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
	],
	createCompany: async (data: CreateCompanyQueryData) => instance.post("/create/company", data),
	deleteCompany: async (id: string) => instance.delete(`/delete/company/${id}`),
	getCompany: async (id: string): Promise<any> => instance.get(`/companies/company/${id}`),
};
