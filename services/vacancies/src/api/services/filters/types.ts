import { FiltersData } from "@/components";

type SortsType = "ASC" | "DESC";

interface SortsData {
	direction: SortsType;
	code: string;
}

export interface PagePaginationData {
	page: number;
	size: number;
	sorts?: SortsData[];
}

export interface FiltersResponseData {
	filters: FiltersData[] | [];
}
