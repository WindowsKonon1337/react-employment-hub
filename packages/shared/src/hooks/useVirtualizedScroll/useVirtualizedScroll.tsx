import { useCallback, useEffect, useRef, useState } from "react";

import { UseVirtualizedScrollProps } from "./types";

export const useVirtualizedScroll = <D,>({
	items,
	container = { current: window },
	itemHeight = 180,
	itemsInRow = 1,
}: UseVirtualizedScrollProps<D>): { visibleItems: D[] | [] } => {
	const currentItemLength = useRef(items.length);
	const [visibleItems, setVisibleItems] = useState<D[]>(items);
	const [currentItemsInRow, setCurrentItemsInRow] = useState(itemsInRow);

	const handleVirtualizeScroll = useCallback(() => {
		const currentItemHeight = Math.floor(itemHeight / currentItemsInRow);

		const containerHeight =
			container.current instanceof HTMLElement
				? container.current.clientHeight
				: container.current?.innerHeight ?? 0;

		const containerScroll =
			container.current instanceof HTMLElement
				? container.current.scrollTop
				: container.current?.scrollY ?? 0;

		const startIndex = Math.ceil(containerScroll / currentItemHeight);

		const endIndex = startIndex + Math.floor(containerHeight / currentItemHeight);

		const currentVisibleItems = items.slice(0, endIndex + currentItemsInRow);

		setVisibleItems(currentVisibleItems);
	}, [items.length, currentItemsInRow]);

	useEffect(() => {
		if (items.length > currentItemLength.current) {
			currentItemLength.current = items.length;
		}
		handleVirtualizeScroll();
	}, [items.length]);

	useEffect(() => {
		if (itemsInRow >= 1) {
			setCurrentItemsInRow(itemsInRow);
		}
		handleVirtualizeScroll();
	}, [itemsInRow]);

	useEffect(() => {
		container?.current?.addEventListener("scroll", handleVirtualizeScroll);

		return () => container?.current?.removeEventListener("scroll", handleVirtualizeScroll);
	}, [handleVirtualizeScroll]);

	return { visibleItems };
};
