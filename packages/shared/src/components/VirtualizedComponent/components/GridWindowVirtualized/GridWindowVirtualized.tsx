import { AutoSizer, Grid, WindowScroller } from "react-virtualized";

import { GridWindowVirtuzliedParams } from "./types";

export const GridWindowVirtuzlied = ({
	ComponentForRender,
	columnCount,
	columnWidth,
	rowCount,
	rowHeight,
	items,
	customProps,
	nameWrapperForData,
	stylesContentContainer,
}: GridWindowVirtuzliedParams) => {
	return (
		<WindowScroller>
			{({ height, scrollTop }) => (
				<AutoSizer disableHeight>
					{({ width }) => (
						<Grid
							autoHeight
							height={height}
							width={width}
							columnCount={columnCount}
							columnWidth={columnWidth}
							rowCount={rowCount}
							rowHeight={rowHeight}
							cellRenderer={({ columnIndex, style, rowIndex, key }) => {
								const itemIndex = rowIndex * columnCount + columnIndex;

								const newProps = customProps?.(itemIndex);
								const currentProps = nameWrapperForData
									? { [nameWrapperForData]: items[itemIndex] }
									: { ...items[itemIndex] };
								const props = newProps ? { ...currentProps, ...newProps } : currentProps;
								return (
									<div style={{ ...style, padding: "5px" }} key={key}>
										<ComponentForRender {...props} />
									</div>
								);
							}}
							scrollTop={scrollTop}
							containerStyle={stylesContentContainer}
						/>
					)}
				</AutoSizer>
			)}
		</WindowScroller>
	);
};
