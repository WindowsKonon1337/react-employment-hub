export const getStylesForTemplateColums = (itemInRow: number): string => {
	const itemsInRow = new Array(itemInRow).fill("1fr").join(",").replaceAll(",", " ");

	console.log(itemsInRow);

	return itemsInRow;
};
