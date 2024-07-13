import { Dispatch, SetStateAction } from "react";

import { VacancyQueryCardData } from "@/api/services";

export interface SalaryCardSelectData {
	currency: string;
	amount: string;
	inTime: string;
}

export interface UpdateModalProps extends VacancyQueryCardData {
	className?: string;
	isOpen: boolean;
	handleUpdate: (id: string, data: VacancyQueryCardData) => void;
	setShowModal: Dispatch<SetStateAction<boolean>>;
}
