import { FiltersData } from "@/components/Filters/types";

type GenericPayload = {
	title: string;
};

export enum FiltersActionType {
	ADD = "ADD",
	DELETE = "DELETE",
	DELETE_ALL = "DELETE_ALL",
	UPDATE_CURRENT_FILTERS = "UPDATE_CURRENT_FILTERS",
}

export type FiltersAction =
	| GenericAction<FiltersActionType.ADD, FiltersData[]>
	| GenericAction<FiltersActionType.UPDATE_CURRENT_FILTERS, FiltersData>
	| GenericAction<FiltersActionType.DELETE, GenericPayload>
	| GenericAction<FiltersActionType.DELETE_ALL>;
