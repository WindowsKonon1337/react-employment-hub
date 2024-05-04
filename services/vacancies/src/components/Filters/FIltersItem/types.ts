import { FiltersTypeData } from "../types";

export interface ComponentsProps {
	data: FiltersTypeData;
	handleCheck?: (filters: FiltersTypeData) => void;
}
