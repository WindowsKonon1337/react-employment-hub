export type SortsType = "ASC" | "DESC";

export interface SortsData {
	direction: SortsType;
	code: string;
}

export interface PageInfoProps {
	page: number;
	size: number;
	sorts?: SortsData[];
}

export interface PageInfoState {
	pageInfo: PageInfoProps;
}
