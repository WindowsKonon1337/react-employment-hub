import { useState } from "react";
import { FiltersType } from "../types";
import { GetFiltersValueProps } from "./types";

export const useGetFilterValue = () => {
	const [currentFilters, setCurrentFilters] = useState({});

	const handleGetValue = ({ data }: GetFiltersValueProps) => {
		switch (data.type) {
			case FiltersType.checkBox:
				setCurrentFilters((prev: any) => {
					const updateCheckBox = { ...prev };
					if (data.data.isCheck) {
						return {
							...prev,
							[data.data.title]: data.data.isCheck,
						};
					} else {
						delete updateCheckBox[data.data.title];
						return {
							...updateCheckBox,
						};
					}
				});
				break;
			case FiltersType.range:
				setCurrentFilters({ from: data.data.from, to: data.data.to });
				break;
			default: {
				return {};
			}
		}
	};

	return { currentFilters, handleGetValue };
};
