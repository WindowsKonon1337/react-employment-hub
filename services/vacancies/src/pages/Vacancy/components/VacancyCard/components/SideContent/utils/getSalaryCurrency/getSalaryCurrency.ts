import { SalaryCurrency } from "@/components/VacancyCard";

export const getSalaryCurrency = (salaryType: SalaryCurrency) => {
	switch (salaryType) {
		case "dollars":
			return "$";
		case "rubles":
			return "₽";
		case "euros":
			return "€";
		default:
			return "";
	}
};
