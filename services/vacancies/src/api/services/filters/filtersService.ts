import { instance } from "@/api/axiosConfig";
import { FiltersProps, FiltersType, FiltersTypeData } from "@/components/Filters/types";

export const filtersService = {
	// getFilters: (pageName: string): Promise<FiltersProps[]> => instance.get(`/filters/${pageName}`),
	getFilters: (): FiltersProps[] => [
		{
			title: "Test",
			filters: [
				{ type: FiltersType.checkBox, data: { title: "test" } },
				{ type: FiltersType.checkBox, data: { title: "test1", isCheck: true } },
			],
		},
		{
			title: "Test range",
			filters: [{ type: FiltersType.range, data: { from: "0", to: "10" } }],
		},
	],
};
