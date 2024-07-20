import { Dispatch, SetStateAction } from "react";

import { VacnacyCardFormValues } from "@/components";

export interface CreateVacancyModalFormProps {
	setCloseModal: Dispatch<SetStateAction<boolean>>;
}

export interface CreateVacancyParams extends Omit<VacnacyCardFormValues, "id"> {}
