import { FC } from "react";

import { TypeOfVirtualized, VirtualizedComponentProps } from "./types";
import { CustomContainerVritualized, WindowVirtualized } from "./components";

export const VirtualizedComponent: FC<VirtualizedComponentProps> = ({ settings }) => {
	const { data, type } = settings;

	switch (type) {
		case TypeOfVirtualized.customContainer:
			return <CustomContainerVritualized {...data} />;
		case TypeOfVirtualized.window:
		default:
			return <WindowVirtualized {...data} />;
	}
};
