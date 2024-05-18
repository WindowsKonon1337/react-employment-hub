// import { instance } from "@/api/axiosConfig";

import { FiltersResponseData } from "./types";
import { FiltersType } from "@/state";

export const filtersService = {
	// getFilters: (pageName: string): Promise<FiltersResponseData> =>
	// 	instance.get(`/filters/${pageName}`),
	getFilters: (): FiltersResponseData => ({
		pageInfo: {
			page: 0,
			size: 16,
			sorts: [
				{
					code: "title",
					direction: "ASC",
				},
			],
		},
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
