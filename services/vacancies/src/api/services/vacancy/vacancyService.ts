import { instance } from "@/api/axiosConfig";
import { FiltersProps } from "@/components/Filters/types";
import { VacnacyCardProps } from "@/components/VacancyCard/types";

export const VacancyService = {
	getVacancies: async (filters: FiltersProps[] | []): Promise<VacnacyCardProps[] | []> =>
		instance.post("/vacancies", { filters }),
	liked: async (id: string): Promise<boolean> => instance.post("/vacancy/liked", { id }),
};
