import { HTMLAttributes } from "react";

export interface TextAreaInputProps extends HTMLAttributes<HTMLTextAreaElement> {
	value?: string;
	label?: string;
	placeholder?: string;
	errorText?: string;
	isNotValid?: boolean;
	className?: string;
}
