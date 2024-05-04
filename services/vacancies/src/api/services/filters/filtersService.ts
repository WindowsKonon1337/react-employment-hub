// import { instance } from "@/api/axiosConfig";
import { FiltersData, FiltersProps, FiltersType } from "@/components/Filters/types";

export const filtersService = {
	// getFilters: (pageName: string): Promise<FiltersProps[]> => instance.get(`/filters/${pageName}`),
	getFilters: (): FiltersData[] => [
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
			title: "Test range",
			filters: [{ type: FiltersType.range, data: { from: "0", to: "10" } }],
		},
	],
};
