import { FC } from "react";

import { FiltersProps } from "./types";
import { FiltersComponents, FiltersTitle, FiltersWrapper } from "./styled";
import { FiltersItem } from "./FIltersItem";

export const Filters: FC<FiltersProps> = ({ filters, title }) => {
	return (
		<FiltersWrapper>
			<FiltersTitle>{title}</FiltersTitle>
			<FiltersComponents>
				{filters.map((filter, idx) => (
					<FiltersItem data={filter} key={`FiltersItem_${idx}`} />
				))}
			</FiltersComponents>
		</FiltersWrapper>
	);
};
