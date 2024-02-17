import { HTMLAttributes } from "react";

import { ColorsProps } from "../../theme";

export interface TitleProps extends HTMLAttributes<HTMLDivElement> {
	size?: "s" | "m" | "l";
	className?: string;
	currentColor?: ColorsProps;
}
