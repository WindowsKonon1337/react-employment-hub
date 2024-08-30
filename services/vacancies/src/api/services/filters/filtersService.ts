import { instance } from "@/api/axiosConfig";

import { BaseResponseParams } from "@/api";

import { FiltersResponseData } from "./types";
import { FiltersType } from "@/state";

export const filtersService = {
	// getFilters: (): Promise<BaseResponseParams<FiltersResponseData>> =>
	// 	instance.get(`/vacancies/filters`),
	getFilters: (): BaseResponseParams<FiltersResponseData> => ({
		data: {
			filters: [
				{
					title: "Test",
					filters: [
						{
							type: FiltersType.checkBox,
							data: [
								{ title: "test", isCheck: false },
								{ title: "test23", isCheck: false },
							],
						},
					],
				},
				{
					title: "Test23",
					filters: [
						{
							type: FiltersType.checkBox,
							data: [
								{ title: "test44", isCheck: false },
								{ title: "test55", isCheck: false },
							],
						},
					],
				},
				{
					title: "Test range",
					filters: [{ type: FiltersType.range, data: { from: "0", to: "10" } }],
				},
			],
		},
	}),
};
