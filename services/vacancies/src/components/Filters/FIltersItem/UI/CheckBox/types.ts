import { FiltersTypeData } from "@/components/Filters/types";

export interface CheckBoxData {
	title: string;
	isCheck?: boolean;
}

export interface CheckBoxProps {
	data: CheckBoxData;
	handleCheck?: (data: FiltersTypeData) => void;
	className?: string;
}
