import { HTMLAttributes } from "react";

export interface TextInputProps extends HTMLAttributes<HTMLInputElement> {
	value: string;
	label: string;
	placeholder?: string;
	errorText?: string;
	isNotValid?: boolean;
}
