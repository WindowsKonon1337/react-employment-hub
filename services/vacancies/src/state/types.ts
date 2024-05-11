import { CheckBoxData, RangeData } from "@/components/Filters/FIltersItem";
import { FiltersData } from "@/components/Filters/types";

export enum FiltersType {
	checkBox = "checkBox",
	range = "range",
}

export type FiltersTypeData =
	| GenericData<FiltersType.checkBox, CheckBoxData[]>
	| GenericData<FiltersType.range, RangeData>;

export interface FiltersState {
	filters: FiltersData[];
}
