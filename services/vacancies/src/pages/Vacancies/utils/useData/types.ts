import { FiltersResponseData } from "@/api/services";
import { PageInfoState } from "@/reducer";

export interface UseDataParams {
	filters: FiltersResponseData;
	pageInfo: PageInfoState;
}
