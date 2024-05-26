import { SortsData } from "../types";

export enum PageInfoActionType {
	UPDATE_CURRENT_PAGE = "UPDATE_CURRENT_PAGE",
	CHANGE_CURRENT_SORTS = "CHANGE_CURRENT_SORTS",
}

export type PageInfoAction =
	| GenericAction<PageInfoActionType.CHANGE_CURRENT_SORTS, SortsData[]>
	| GenericAction<PageInfoActionType.UPDATE_CURRENT_PAGE, number>;
