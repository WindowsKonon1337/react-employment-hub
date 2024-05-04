import { FC, useState } from "react";

import { FiltersComponents, FiltersTitle, FiltersWrapper } from "./styled";
import { FiltersProps, FiltersType, FiltersTypeData } from "./types";
import { FiltersItem } from "./FIltersItem";
import { useFiltersContext } from "@/state";

export const Filters: FC<FiltersProps> = ({ filters, title }) => {
	const [currentFilters, setCurrentfitlers] = useState<FiltersTypeData[] | []>(filters);
	const { updateCurrentFilter } = useFiltersContext();

	const handleUpdateFilters = (updatedFilters: FiltersTypeData) => {
		if (updatedFilters.type === FiltersType.checkBox) {
			if (currentFilters.length > 0 && currentFilters[0].type === FiltersType.checkBox) {
				const currenFiltersIdx = currentFilters[0].data.findIndex(
					(filter) => filter.title === updatedFilters.data[0].title,
				);
				const newFiltersData = [...currentFilters[0].data];

				newFiltersData[currenFiltersIdx] = updatedFilters.data[0];

				console.log(currentFilters);

				if (currenFiltersIdx > -1 && updateCurrentFilter) {
					if (updatedFilters.data[0].isCheck) {
						updateCurrentFilter({
							title,
							filters: [
								{
									type: FiltersType.checkBox,
									data: newFiltersData,
								},
							],
						});
						// @ts-ignore
						setCurrentfitlers([
							{
								type: FiltersType.checkBox,
								data: newFiltersData,
							},
						]);
					} else {
						if (newFiltersData.length === 1) {
							updateCurrentFilter({
								title,
								filters: [],
							});
							setCurrentfitlers([]);
						} else {
							newFiltersData.splice(currenFiltersIdx, 1);
							updateCurrentFilter({
								title,
								filters: [
									{
										type: FiltersType.checkBox,
										data: newFiltersData,
									},
								],
							});
							// @ts-ignore
							setCurrentfitlers([
								{
									type: FiltersType.checkBox,
									data: newFiltersData,
								},
							]);
						}
					}
				}
			} else {
				if (updateCurrentFilter) {
					updateCurrentFilter({
						title,
						filters: [updatedFilters],
					});
					// @ts-ignore
					setCurrentfitlers([updatedFilters]);
				}
			}
		}
		if (updatedFilters.type === FiltersType.range) {
			if (updateCurrentFilter) {
				updateCurrentFilter({ title, filters: [updatedFilters] });
			}
		}
	};

	return (
		<FiltersWrapper>
			<FiltersTitle>{title}</FiltersTitle>
			<FiltersComponents>
				{filters.length &&
					filters.map((filter, idx) => (
						<FiltersItem data={filter} key={`FiltersItem_${idx}`} handleCheck={handleUpdateFilters} />
					))}
			</FiltersComponents>
		</FiltersWrapper>
	);
};

// const newFilterTitle = updatedFilters.data[0].title;
// const isFilterExist = currentFilters.findIndex(
// 	(item) =>
// 		(item.type === FiltersType.checkBox &&
// 			item.data.find((itm) => itm.title === newFilterTitle)) ||
// 		updatedFilters.data[0].isCheck === false,
// );
// let currentUpdatedFilters: any = [];
// if (isFilterExist > -1) {
// 	currentUpdatedFilters = currentFilters;
// 	currentUpdatedFilters.splice(isFilterExist, 1);
// 	setCurrentfitlers(() => currentUpdatedFilters);
// } else {
// 	currentUpdatedFilters = [...currentFilters, updatedFilters];
// 	setCurrentfitlers(() => currentUpdatedFilters);
// }
// if (updateCurrentFilter) {
// 	updateCurrentFilter({ title, filters: currentUpdatedFilters });
// }
