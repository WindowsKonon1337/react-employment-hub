import { GetFiltersValueProps } from "../../../utils";

export interface RangeData {
	from: string;
	to: string;
}

export interface RangeProps {
	data: RangeData;
	description?: {
		from: string;
		to: string;
	};
	handleChangeValue?: (data: GetFiltersValueProps) => void;
}
