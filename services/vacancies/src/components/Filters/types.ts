import { CheckBoxData, RangeData } from "./FIltersItem";

export enum FiltersType {
	checkBox = "checkBox",
	range = "range",
}

export type FiltersTypeData =
	| GenericData<FiltersType.checkBox, CheckBoxData[]>
	| GenericData<FiltersType.range, RangeData>;

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
