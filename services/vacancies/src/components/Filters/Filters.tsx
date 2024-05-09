import { FC, useEffect, useState } from "react";

import { FiltersComponents, FiltersTitle, FiltersWrapper } from "./styled";
import { FiltersProps, FiltersType, FiltersTypeData } from "./types";
import { FiltersItem } from "./FIltersItem";
import { useFiltersContext } from "@/state";

export const Filters: FC<FiltersProps> = ({ filters, title }) => {
	const [currentFilters, setCurrentfitlers] = useState<FiltersTypeData[] | []>([]);
	const { updateCurrentFilter } = useFiltersContext();

	useEffect(() => {
		filters.forEach((filter) => {
			if (filter.type === FiltersType.checkBox) {
				const filtersCheck: any = [];
				filter.data.forEach((fl) => {
					if (fl.isCheck) {
						// @ts-ignore
						filtersCheck.push(fl);
					}
				});
				setCurrentfitlers([
					{
						type: FiltersType.checkBox,
						data: filtersCheck,
					},
				]);
				console.log(filtersCheck);
			}
			switch (filter.type) {
				// case FiltersType.checkBox:
				// 	filter.data.forEach((fl, index) => {
				// 		if (fl.isCheck) {
				// 			// @ts-ignore
				// 			setCurrentfitlers((prev: any) => [
				// 				{
				// 					type: FiltersType.checkBox,
				// 					data:
				// 						prev && prev.data !== undefined
				// 							? [...prev.data, filter.data[index]]
				// 							: [filter.data[index]],
				// 				},
				// 			]);
				// 		}
				// 	});
				// 	break;
				case FiltersType.range:
					break;
			}
		});
	}, []);

	useEffect(() => {
		console.log("FILTERS", currentFilters);
	}, [currentFilters]);

	const handleUpdateFilters = (updatedFilters: FiltersTypeData) => {
		console.log(updatedFilters);
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

				console.log("упал сюда", currenFiltersIdx);
				if (currenFiltersIdx > -1 && updateCurrentFilter) {
					if (!updatedFilters.data[0].isCheck) {
						if (currentFilters.length >= 1) {
							console.log(filtersData, "моя дата", currenFiltersIdx);
							filtersData.splice(currenFiltersIdx, 1);
							setCurrentfitlers([
								{
									type: FiltersType.checkBox,
									// @ts-ignore
									data: [...filtersData],
								},
							]);
							updateCurrentFilter({
								title,
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
							updateCurrentFilter({ filters: [], title });
						}
					}
				} else {
					filtersData.push(updatedFilters.data[0]);
					if (updateCurrentFilter) {
						updateCurrentFilter({
							title,
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
						title,
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
