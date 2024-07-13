import { RefObject } from "react";

export interface UseVirtualizedScrollProps<D> {
	items: D[];
	itemHeight?: number;
	container?: RefObject<HTMLElement | Window>;
}
