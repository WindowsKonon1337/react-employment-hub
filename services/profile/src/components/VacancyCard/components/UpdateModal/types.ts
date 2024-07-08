import { Dispatch, SetStateAction } from "react";
import { VacancyCardData } from "../../types";

export interface SalaryCardSelectData {
	currency: string;
	amount: string;
	inTime: string;
}

export interface UpdateModalProps extends VacancyCardData {
	className?: string;
	isOpen: boolean;
	setShowModal: Dispatch<SetStateAction<boolean>>;
}
