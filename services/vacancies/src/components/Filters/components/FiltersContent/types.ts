import { FiltersTypeData } from "@/state";

export interface ClickData {
	title: string;
	filters: any;
}

export interface FiltersData {
	title: string;
	filters: FiltersTypeData[];
}

export interface FiltersContentProps extends FiltersData {
	onClick?: (data: ClickData) => void;
}
