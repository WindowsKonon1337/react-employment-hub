export interface DropDownListProps {
	title: string;
	listValues: { value: string; title: string }[];
	isOpen?: boolean;
	handleChange?: (value?: any) => void;
}
