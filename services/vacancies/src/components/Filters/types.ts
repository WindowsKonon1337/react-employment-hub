import { FiltersTypeData } from "@/state";

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
