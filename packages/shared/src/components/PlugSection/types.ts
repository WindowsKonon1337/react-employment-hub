export type PlugType = "emptyData" | "error";

export interface PlugSectionProps {
	typePlug: PlugType;
	plugText?: string;
	className?: string;
}
