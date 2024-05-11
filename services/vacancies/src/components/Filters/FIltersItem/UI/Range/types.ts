// import { GetFiltersValueProps } from "../../../utils";

import { FiltersTypeData } from "@/state";

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
	// handleChangeValue?: (data: GetFiltersValueProps) => void;
	handleChangeValue?: (data: FiltersTypeData) => void;
}
