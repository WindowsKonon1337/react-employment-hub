import { FiltersData } from "@/components/Filters/types";

type SortsType = "ASC" | "DESC";

interface SortsData {
	direction: SortsType;
	code: string;
}

export interface PagePaginationData {
	page: number;
	size: number;
	allPage: number;
	sorts?: SortsData[];
}

export interface FiltersResponseData {
	filters: FiltersData[];
	pageInfo?: SortsData | null;
}
