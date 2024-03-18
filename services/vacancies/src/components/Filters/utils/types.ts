import { FiltersType } from "../types";
import { CheckBoxData, RangeData } from "../FIltersItem";

export type FiltersData =
	| GenericData<FiltersType.checkBox, CheckBoxData>
	| GenericData<FiltersType.range, RangeData>;

export interface GetFiltersValueProps {
	data: FiltersData;
}
