import { useReducer } from "react";
import { pageInfoReducer } from "./reducer";
import { PageInfoActionType } from "./action";
import { SortsData } from "./types";

export const usePageInfo = () => {
	const [pageInfo, dispatch] = useReducer(pageInfoReducer, {
		pageInfo: {
			page: 1,
			size: 20,
		},
	});

	const handleUpdateCurrentPage = (currentPage: number) =>
		dispatch({ type: PageInfoActionType.UPDATE_CURRENT_PAGE, payload: currentPage });
	const handleChangeCurrentSorts = (sorts: SortsData[]) =>
		dispatch({ type: PageInfoActionType.CHANGE_CURRENT_SORTS, payload: sorts });

	return {
		pageInfo,
		handleChangeCurrentSorts,
		handleUpdateCurrentPage,
	};
};
