export interface DropDownListProps {
	title: string;
	listValues: string[];
	isOpen?: boolean;
	handleChange?: (value?: string) => void;
}
