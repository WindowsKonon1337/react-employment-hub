import { HTMLAttributes } from "react";

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
	className: string;
	isDisabled: boolean;
	onClick: () => void;
}
