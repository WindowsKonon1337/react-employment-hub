import { CheckBoxData, RangeData } from "./FIltersItem";

export enum FiltersType {
	checkBox = "checkBox",
	range = "range",
}

export type FiltersTypeData =
	| GenericData<FiltersType.checkBox, CheckBoxData>
	| GenericData<FiltersType.range, RangeData>;

export interface ClickData {
	title: string;
	filters: any;
}

export interface FiltersProps {
	title: string;
	filters: FiltersTypeData[];
	onClick?: (data: ClickData) => void;
}
