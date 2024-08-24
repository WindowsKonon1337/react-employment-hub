import { FC } from "react";
import { AutoSizer, List, WindowScroller } from "react-virtualized";

import { VirtualizedData } from "../../types";

export const WindowVirtualized: FC<VirtualizedData> = ({
	ComponentForRender,
	elementhsHeight,
	elemntsLenght,
	items,
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
						rowRenderer={({ style, index }) => {
							const newProps = customProps?.(index);
							const props = newProps ? { ...items[index], ...newProps } : { ...items[index] };
							return (
								<div style={{ ...style, padding: "5px" }}>
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
