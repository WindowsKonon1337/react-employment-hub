import React, { FC } from "react";
import { AutoSizer, List } from "react-virtualized";

import { CustomContainerVirtualizedProps } from "./types";

export const CustomContainerVritualized: FC<CustomContainerVirtualizedProps> = ({
	ComponentForRender,
	elementhsHeight,
	elemntsLenght,
	items,
	customProps,
	containerHeight,
	scrollTop,
	setScrollTop,
	nameWrapperForData,
}) => (
	<AutoSizer disableHeight>
		{({ width }) => (
			<List
				autoHeight
				height={containerHeight}
				width={width}
				rowCount={elemntsLenght}
				rowHeight={elementhsHeight}
				scrollTop={scrollTop}
				onScroll={({ scrollTop }) => setScrollTop(scrollTop)}
				rowRenderer={({ style, index, key }) => {
					const newProps = customProps?.(index);
					const currentProps = nameWrapperForData
						? { [nameWrapperForData]: items[index] }
						: { ...items[index] };
					const props = newProps ? { ...currentProps, ...newProps } : currentProps;
					return (
						<div style={{ ...style, padding: "10px" }} key={key}>
							<ComponentForRender {...props} />
						</div>
					);
				}}
			/>
		)}
	</AutoSizer>
);
