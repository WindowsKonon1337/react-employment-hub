import { VacancyCardData } from "../../types";

export interface useDataParams {
	id: string;
	handleUpdate?: (id: string, newData: VacancyCardData) => void;
	handleDelete?: (id: string) => void;
}
