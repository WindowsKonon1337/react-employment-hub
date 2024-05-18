import { useCallback, useEffect, useRef, useState } from "react";
import { UseVirtualizedScrollProps } from "./types";

export const useVirtualizedScroll = ({
	items,
	container = { current: window },
	itemHeight = 180,
}: UseVirtualizedScrollProps) => {
	const currentItemLength = useRef(items.length);
	const [visibleItems, setVisibleItems] = useState(items);

	console.log(visibleItems);

	const handleVirtualizeScroll = useCallback(() => {
		const containerHeight =
			container.current instanceof HTMLElement
				? container.current.clientHeight
				: container.current?.innerHeight ?? 0;

		const containerScroll =
			container.current instanceof HTMLElement
				? container.current.scrollTop
				: container.current?.scrollY ?? 0;

		const startIndex = Math.ceil(containerScroll / itemHeight);

		const endIndex = startIndex + Math.ceil(containerHeight / itemHeight);

		const currentVisibleItems = items.slice(0, endIndex + 1);

		setVisibleItems(currentVisibleItems);
	}, [items]);

	useEffect(() => {
		if (items.length > currentItemLength.current) {
			currentItemLength.current = items.length;
		}
		handleVirtualizeScroll();
	}, [items]);

	useEffect(() => {
		window.addEventListener("scroll", handleVirtualizeScroll);

		return () => window.removeEventListener("scroll", handleVirtualizeScroll);
	}, [handleVirtualizeScroll]);

	return { visibleItems };
};
