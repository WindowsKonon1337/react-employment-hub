import { useFiltersContext } from "@/state";

import { FiltersType } from "../../types";
import { HandleUpdatedFiltersProps, UseHandleUpdatedFiltersProps } from "./types";

export const useHandleUpdatedFiletrs = ({
	setCurrentfitlers,
	currentFilters,
	titleFilter,
}: UseHandleUpdatedFiltersProps) => {
	const { updateCurrentFilter } = useFiltersContext();

	const handleUpdateFilters = ({ updatedFilters }: HandleUpdatedFiltersProps) => {
		if (updatedFilters.type === FiltersType.checkBox) {
			if (currentFilters.length > 0 && currentFilters[0].type === FiltersType.checkBox) {
				let currenFiltersIdx = -1;

				currentFilters.forEach((fl) => {
					if (fl.type === FiltersType.checkBox) {
						fl.data.forEach((f, i) => {
							if (f.title === updatedFilters.data[0].title) {
								currenFiltersIdx = i;
							}
						});
					}
				});

				const filtersData = [...currentFilters[0].data];

				if (currenFiltersIdx > -1 && updateCurrentFilter) {
					if (!updatedFilters.data[0].isCheck) {
						filtersData.splice(currenFiltersIdx, 1);
						if (filtersData.length >= 1) {
							setCurrentfitlers([
								{
									type: FiltersType.checkBox,
									// @ts-ignore
									data: [...filtersData],
								},
							]);
							updateCurrentFilter({
								title: titleFilter,
								filters: [
									// @ts-ignore
									{
										type: FiltersType.checkBox,
										// @ts-ignore
										data: filtersData,
									},
								],
							});
						} else {
							setCurrentfitlers([]);
							updateCurrentFilter({ filters: [], title: titleFilter });
						}
					}
				} else {
					filtersData.push(updatedFilters.data[0]);
					if (updateCurrentFilter) {
						updateCurrentFilter({
							title: titleFilter,
							filters: [
								{
									type: FiltersType.checkBox,
									data: filtersData,
								},
							],
						});
						setCurrentfitlers([
							{
								type: FiltersType.checkBox,
								data: [...filtersData],
							},
						]);
					}
				}
			} else {
				setCurrentfitlers([updatedFilters]);
				if (updateCurrentFilter) {
					updateCurrentFilter({
						title: titleFilter,
						filters: [
							{
								type: FiltersType.checkBox,
								data: [...updatedFilters.data],
							},
						],
					});
				}
			}
		}
		if (updatedFilters.type === FiltersType.range) {
			if (updateCurrentFilter) {
				updateCurrentFilter({ title: titleFilter, filters: [updatedFilters] });
			}
		}
	};

	return { handleUpdateFilters };
};
