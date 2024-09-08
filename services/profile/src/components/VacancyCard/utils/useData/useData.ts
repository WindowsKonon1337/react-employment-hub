import { useMutation } from "@tanstack/react-query";

import { VacanciesService, VacancyQueryCardData } from "@/api/services";

import { VacancyCardData } from "../../types";
import { useDataParams } from "./types";

export const useData = ({ handleDelete, handleUpdate, id }: useDataParams) => {
	const { mutate: updateModal } = useMutation({
		mutationKey: ["updatedVacancy"],
		mutationFn: async ({ id, cardData }: { id: string; cardData: VacancyQueryCardData }) =>
			VacanciesService.update(id, cardData),
		onSuccess: (data) => {
			const newData: VacancyCardData = {
				...data,
				tags: data.tags.map((tag) => ({ label: tag, value: tag })),
			};
			handleUpdate?.(id, newData);
		},
	});

	const { mutate: deleteModal } = useMutation({
		mutationFn: async (id: string) => VacanciesService.delete(id),
		onSuccess: () => {
			handleDelete?.(id);
		},
	});

	const onDelete = () => {
		deleteModal(id);
	};

	const onUpdate = (id: string, cardData: VacancyQueryCardData) => {
		updateModal({ id, cardData });
	};

	return { onDelete, onUpdate };
};
