import { createContext, useContext } from "react";

import { FiltersData } from "@/components/Filters/types";

import { FiltersState } from "./types";

interface FiltersContextProps {
	filters: FiltersState;
	addFilters?: (filters: FiltersData[]) => void;
	deleteFilter?: (title: string) => void;
	deleteAllFilters?: () => void;
	updateCurrentFilter?: (filter: FiltersData) => void;
}

export const FiltersContext = createContext<FiltersContextProps>({
	filters: { filters: [] },
});

export const useFiltersContext = () => useContext(FiltersContext);
