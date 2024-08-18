import { Dispatch, SetStateAction } from "react";
import { VirtualizedData } from "../../types";

export interface CustomContainerVirtualizedProps extends VirtualizedData {
	containerHeight: number;
	scrollTop: number;
	setScrollTop: Dispatch<SetStateAction<number>>;
}
