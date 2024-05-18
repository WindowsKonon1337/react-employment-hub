import { CheckBoxData, RangeData } from "@/components/Filters/FIltersItem";
import { FiltersData } from "@/components/Filters/types";

export enum FiltersType {
	checkBox = "checkBox",
	range = "range",
	search = "search",
	location = "location",
}

export type FiltersTypeData =
	| GenericData<FiltersType.checkBox, CheckBoxData[]>
	| GenericData<FiltersType.range, RangeData>
	| GenericData<FiltersType.search, string>
	| GenericData<FiltersType.location, string>;

export interface FiltersState {
	filters: FiltersData[];
}
