import { CheckBoxProps } from "../UI/CheckBox";
import { RangeProps } from "../UI/Range";

export enum FiltersType {
	checkBox = "checkBox",
	range = "range",
}

export type FiltersTypeData =
	| GenericData<FiltersType.checkBox, CheckBoxProps>
	| GenericData<FiltersType.range, RangeProps>;

export interface FiltersProps {
	title: string;
	filters: FiltersTypeData[];
}
