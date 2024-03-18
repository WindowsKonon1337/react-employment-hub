import { GetFiltersValueProps } from "@/components/Filters/utils/types";

export interface CheckBoxData {
	title: string;
	isCheck?: boolean;
}

export interface CheckBoxProps {
	data: CheckBoxData;
	handleCheck?: (data: GetFiltersValueProps) => void;
	className?: string;
}
