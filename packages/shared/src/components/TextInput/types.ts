import { HTMLAttributes } from "react";

export interface TextInputProps extends HTMLAttributes<HTMLInputElement> {
	value?: string;
	label?: string;
	type?: "text" | "password";
	placeholder?: string;
	errorText?: string;
	isNotValid?: boolean;
}
