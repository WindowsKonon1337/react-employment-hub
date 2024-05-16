// import { instance } from "@/api/axiosConfig";

import { FiltersType } from "@/state";

import { FiltersResponseData } from "./types";

export const filtersService = {
	// getFilters: (pageName: string): Promise<FiltersData> => instance.get(`/filters/${pageName}`),
	getFilters: (): FiltersResponseData => ({
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
	}),
};
