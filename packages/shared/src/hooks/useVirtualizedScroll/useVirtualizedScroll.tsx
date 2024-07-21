import { useCallback, useEffect, useRef, useState } from "react";
import { UseVirtualizedScrollProps } from "./types";

export const useVirtualizedScroll = <D,>({
	items,
	container = { current: window },
	itemHeight = 180,
	itemInRow = 1,
}: UseVirtualizedScrollProps<D>): { visibleItems: D[] | [] } => {
	const currentItemLength = useRef(items.length);
	const [visibleItems, setVisibleItems] = useState<D[]>(items);
	const [currentItemsInRow, setCurrentItemsInRow] = useState(itemInRow);

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

		console.log(endIndex, itemInRow);

		const currentVisibleItems = items.slice(0, endIndex + currentItemsInRow);

		console.log(currentVisibleItems);

		setVisibleItems(items);
	}, [items, currentItemsInRow]);

	useEffect(() => {
		if (items.length > currentItemLength.current) {
			currentItemLength.current = items.length;
		}
		handleVirtualizeScroll();
	}, [items]);

	useEffect(() => {
		if (itemInRow >= 1) {
			setCurrentItemsInRow(itemInRow);
		}
		handleVirtualizeScroll();
	}, [itemInRow]);

	useEffect(() => {
		container?.current?.addEventListener("scroll", handleVirtualizeScroll);

		return () => container?.current?.removeEventListener("scroll", handleVirtualizeScroll);
	}, [handleVirtualizeScroll]);

	return { visibleItems };
};
