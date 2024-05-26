import { PageInfoAction, PageInfoActionType } from "../action";
import { PageInfoState } from "../types";

export const pageInfoReducer = (state: PageInfoState, action: PageInfoAction): PageInfoState => {
	const { payload, type } = action;

	switch (type) {
		case PageInfoActionType.CHANGE_CURRENT_SORTS: {
			const currentSorts = payload;
			return {
				pageInfo: {
					...state.pageInfo,
					sorts: currentSorts,
				},
			};
		}
		case PageInfoActionType.UPDATE_CURRENT_PAGE: {
			const currentPage = payload;
			return {
				pageInfo: {
					...state.pageInfo,
					page: currentPage,
				},
			};
		}
		default: {
			return state;
		}
	}
};
