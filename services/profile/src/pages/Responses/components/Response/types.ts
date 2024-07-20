import { VacancyCardData } from "@/components";

export type VacancyStatus = "pendig" | "resolve" | "reject";

export interface ResponseParams {
	data: VacancyCardData;
	status: VacancyStatus;
}
