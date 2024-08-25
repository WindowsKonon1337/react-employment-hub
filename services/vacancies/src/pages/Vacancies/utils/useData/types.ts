import { FiltersResponseData } from "@/api/services";
import { PageInfoState } from "@/reducer/types";

export interface UseDataParams {
	filters: FiltersResponseData;
	pageInfo: PageInfoState;
}
