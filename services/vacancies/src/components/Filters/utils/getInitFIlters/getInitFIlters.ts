import { Dispatch, SetStateAction } from "react";

import { FiltersType, FiltersTypeData } from "@/state";

export const getInitFilters = (
	filters: FiltersTypeData[],
	setFilters: Dispatch<SetStateAction<FiltersTypeData[]>>,
) => {
	filters.forEach((filter) => {
		if (filter.type === FiltersType.checkBox) {
			const filtersCheck: any = [];
			filter.data.forEach((fl) => {
				if (fl.isCheck) {
					filtersCheck.push(fl);
				}
			});
			setFilters([
				{
					type: FiltersType.checkBox,
					data: filtersCheck,
				},
			]);
		}
	});
};
