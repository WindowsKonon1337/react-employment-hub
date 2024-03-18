import { FiltersTypeData } from "../types";

export interface ComponentsProps {
	data: FiltersTypeData;
	handleCheck?: (...data: any) => void;
}
