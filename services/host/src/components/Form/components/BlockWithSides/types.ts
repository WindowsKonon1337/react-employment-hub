import { HTMLAttributes, ReactElement } from "react";

export interface BlockWithSidesProps extends HTMLAttributes<HTMLDivElement> {
	leftSide?: ReactElement;
}
