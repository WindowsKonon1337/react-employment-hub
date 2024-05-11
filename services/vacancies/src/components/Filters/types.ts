import { FiltersTypeData } from "@/state/types";

export interface ClickData {
	title: string;
	filters: any;
}

export interface FiltersData {
	title: string;
	filters: FiltersTypeData[];
}

export interface FiltersProps extends FiltersData {
	onClick?: (data: ClickData) => void;
}
