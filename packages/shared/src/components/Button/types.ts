import { HTMLAttributes } from "react";

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
	clickFuntcion?: () => void;
	isDisabled?: boolean;
	isDleteBtn?: boolean;
	className?: string;
}
