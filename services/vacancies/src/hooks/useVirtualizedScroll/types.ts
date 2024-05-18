import { RefObject } from "react";

export interface UseVirtualizedScrollProps {
	items: any[];
	itemHeight?: number;
	container?: RefObject<HTMLElement | Window>;
}
