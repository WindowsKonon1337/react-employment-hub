import React, { FC } from "react";
import { AutoSizer, List, WindowScroller } from "react-virtualized";

import { VirtualizedData } from "../../types";

export const WindowVirtualized: FC<VirtualizedData> = ({
	ComponentForRender,
	elementhsHeight,
	elemntsLenght,
	items,
	nameWrapperForData,
	customProps,
}) => (
	<WindowScroller>
		{({ height, scrollTop }) => (
			<AutoSizer disableHeight>
				{({ width }) => (
					<List
						autoHeight
						height={height}
						width={width}
						rowCount={elemntsLenght}
						rowHeight={elementhsHeight}
						rowRenderer={({ style, index, key }) => {
							const newProps = customProps?.(index);
							const currentProps = nameWrapperForData
								? { [nameWrapperForData]: items[index] }
								: { ...items[index] };
							const props = newProps ? { ...currentProps, ...newProps } : currentProps;
							return (
								<div style={{ ...style, padding: "5px" }} key={key}>
									<ComponentForRender {...props} />
								</div>
							);
						}}
						scrollTop={scrollTop}
					/>
				)}
			</AutoSizer>
		)}
	</WindowScroller>
);
