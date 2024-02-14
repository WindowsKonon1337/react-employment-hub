export interface TextInputProps {
	value: string;
	label: string;
	placeholder?: string;
	errorText?: string;
	onChange?: () => void;
	isNotValid?: boolean;
}
