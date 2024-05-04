import { FiltersData } from "@/components/Filters/types";
import { createContext, useContext } from "react";
import { FiltersState } from "./types";

interface FiltersContextProps {
	filters: FiltersState;
	addFilters?: (filters: FiltersData[]) => void;
	deleteFilter?: (filterId: string) => void;
	deleteAllFilters?: () => void;
	updateCurrentFilter?: (filter: FiltersData) => void;
}

export const FiltersContext = createContext<FiltersContextProps>({
	filters: { filters: [] },
});

export const useFiltersContext = () => useContext(FiltersContext);
