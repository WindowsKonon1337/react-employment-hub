import { Dispatch, SetStateAction } from "react";

import { VacancyQueryCardData } from "@/api/services";
import { VacancyCardData } from "../../types";

export interface SalaryCardSelectData {
	currency: string;
	amount: string;
	inTime: string;
}

export interface UpdateModalProps extends VacancyCardData {
	className?: string;
	isOpen: boolean;
	handleUpdate: (id: string, data: VacancyQueryCardData) => void;
	setShowModal: Dispatch<SetStateAction<boolean>>;
}
