import { useQuery } from "@tanstack/react-query";

import { FiltersType, useFiltersContext } from "@/state";
import { filtersService } from "@/api/services";

const useGetFilters = () => {
	const { data, isLoading } = useQuery({
		queryKey: ["getFilters"],
		queryFn: () => filtersService.getFilters(),
	});

	return { data, isLoading };
};

export const useFiltersQuery = () => {
	const { filters } = useFiltersContext();

	const { data, isLoading } = useGetFilters();

	const newData = data ? [...data.filters] : [];

	if (filters.filters.length > 0) {
		data?.filters.forEach((item, idx) => {
			const isFIltersExistIdx = filters.filters.findIndex((filter) => filter.title === item.title);
			if (isFIltersExistIdx > -1) {
				item.filters.forEach((fltr) => {
					if (fltr.type === FiltersType.checkBox) {
						const filtersData = [...fltr.data];

						fltr.data.forEach((fl, inx) => {
							const isValueFilterExist = filters.filters[isFIltersExistIdx].filters.findIndex(
								(f) =>
									f.type === FiltersType.checkBox &&
									f.data.findIndex((itemTitle) => itemTitle.title === fl.title) > -1,
							);
							if (isValueFilterExist > -1) {
								filtersData[inx] = {
									title: fl.title,
									isCheck: true,
								};
								newData[idx] = {
									title: newData[idx].title,
									filters: [
										{
											type: FiltersType.checkBox,
											data: filtersData,
										},
									],
								};
							}
						});
					} else if (fltr.type === FiltersType.range) {
						filters.filters[isFIltersExistIdx].filters.forEach((fl) => {
							if (fl.type === FiltersType.range) {
								newData[idx] = {
									title: newData[idx].title,
									filters: [{ ...fl }],
								};
							}
						});
					}
				});
			}
		});
	}

	return { data: newData, isLoading };
};
