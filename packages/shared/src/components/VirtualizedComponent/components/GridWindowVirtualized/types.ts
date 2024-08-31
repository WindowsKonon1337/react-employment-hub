import { VirtualizedData } from "../../types";

export interface GridWindowVirtuzliedParams
	extends Omit<VirtualizedData, "elemntsLenght" | "elementhsHeight"> {
	columnWidth: number;
	columnCount: number;
	rowCount: number;
	rowHeight: number;
}
