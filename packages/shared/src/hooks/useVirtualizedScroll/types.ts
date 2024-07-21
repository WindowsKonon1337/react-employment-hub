import { RefObject } from "react";

export interface UseVirtualizedScrollProps<D> {
	items: D[];
	itemHeight?: number;
	// позволяет правильно рассчитывать кол-во показываемых элементов(рассчитываем по формуле itemHeight / itemInRow)
	itemsInRow?: number;
	container?: RefObject<HTMLElement | Window>;
}
