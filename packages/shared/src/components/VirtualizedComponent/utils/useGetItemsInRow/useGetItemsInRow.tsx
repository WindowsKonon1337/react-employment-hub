import { useCallback, useState } from "react";

import { UseGetItemsInRowParams } from "./types";

export const useGetItemsInRow = <D extends HTMLDivElement>({
	gapNumber,
	itemWidth,
	columnWidth,
}: UseGetItemsInRowParams) => {
	const [currentItemInRow, setCurrentItemInRow] = useState(4);

	const [currentColumnWidth, setCurrentColumnWidth] = useState(columnWidth);

	const containerRef = useCallback(
		(node: D) => {
			const observer = new ResizeObserver((entries) => {
				const width = entries[0].contentRect.width;
				const newItemCountInRow = Math.max(Math.floor(width / (gapNumber + itemWidth)), 1);
				setCurrentItemInRow(newItemCountInRow);
				if (width < columnWidth && width > 0) {
					setCurrentColumnWidth(width);
				}
			});
			if (node !== null) {
				observer.observe(node);
			}
		},
		[gapNumber, itemWidth, itemWidth],
	);

	return { containerRef, currentItemInRow, currentColumnWidth };
};
