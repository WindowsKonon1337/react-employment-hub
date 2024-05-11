import { FiltersTypeData } from "@/state";

export interface ComponentsProps {
	data: FiltersTypeData;
	handleCheck?: (filters: FiltersTypeData) => void;
}
