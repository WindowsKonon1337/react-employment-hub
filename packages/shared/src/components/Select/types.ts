export interface SelectProps {
	data: SelectData[];
	label?: string;
	onChange?: () => void;
	placeholder?: string;
	className?: string;
}

interface SelectData {
	value: string;
	label: string;
}
