import { FC, useEffect } from "react";

import { FiltersComponents, FiltersTitle, FiltersWrapper } from "./styled";
import { FiltersProps } from "./types";
import { useGetFilterValue } from "./utils";
import { FiltersItem } from "./FIltersItem";

export const Filters: FC<FiltersProps> = ({ filters, title, onClick }) => {
	const { currentFilters, handleGetValue } = useGetFilterValue();

	useEffect(() => {
		filters.length &&
			filters.forEach((item) => {
				handleGetValue({ data: item });
			});
	}, [filters.length]);

	useEffect(() => {
		if (onClick) {
			onClick({ title, filters: currentFilters });
		}
	}, [currentFilters]);

	return (
		<FiltersWrapper>
			<FiltersTitle>{title}</FiltersTitle>
			<FiltersComponents>
				{filters.length &&
					filters.map((filter, idx) => (
						<FiltersItem data={filter} key={`FiltersItem_${idx}`} handleCheck={handleGetValue} />
					))}
			</FiltersComponents>
		</FiltersWrapper>
	);
};
