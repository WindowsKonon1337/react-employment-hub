import { FiltersType } from "@/components/Filters/types";
import { FiltersState } from "@/state/types";

export const getConvertFiltersToString = ({ filters }: FiltersState) => {
	const filtersString: any = {};

	filters.forEach((filter) => {
		let title = filter.title;
		if (filter.title.indexOf(" ") > -1) {
			title = filter.title.replace(" ", "_");
		}
		filter.filters.forEach((fl) => {
			if (fl.type === FiltersType.checkBox) {
				fl.data.forEach((item, idx) => {
					const filterData = `${item.title}` + `${idx === fl.data.length - 1 ? "" : ";"}`;
					filtersString[title] = filtersString[title] ? filtersString[title] + filterData : filterData;
				});
			}
			if (fl.type === FiltersType.range) {
				const filterData = `${fl.data.from},${fl.data.to}`;
				filtersString[title] = filtersString[title] ? filtersString[title] + filterData : filterData;
			}
		});
	});

	return filtersString;
};
