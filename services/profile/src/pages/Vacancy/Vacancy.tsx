import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useVirtualizedScroll } from "@packages/shared/src/hooks";
import { Loader, UplaodMoreBtn } from "@packages/shared/src/components";

import { VacanciesService } from "@/api/services";
import { VacancyCard, VacancyCardData } from "@/components";

import { VacanciesContainer } from "./styled";

const Vacancy = () => {
	const [currentPage, setCurrentPage] = useState(0);

	const [currentData, setCurrentData] = useState<VacancyCardData[] | []>([]);

	const { isPending, mutate } = useMutation({
		mutationKey: ["localVacancy"],
		mutationFn: async (page: number) => VacanciesService.getAll(page),
		onSuccess: (data) => {
			setCurrentData(data);
		},
	});

	const { visibleItems } = useVirtualizedScroll<VacancyCardData>({
		items: currentData,
		itemHeight: 115,
	});

	useEffect(() => {
		mutate(currentPage);
	}, []);

	const handleChangeValue = () => {
		const newPage = currentPage + 1;
		setCurrentPage(newPage);
		mutate(newPage);
	};

	const handleDleteItem = (id: string) => {
		const newData = currentData.filter((curItemData) => curItemData.id !== id);

		setCurrentData(newData);
	};

	const handleUpdateData = (id: string, newData: VacancyCardData) => {
		const updatedData = currentData.map((currentDataItem) =>
			currentDataItem.id === id ? { ...newData } : { ...currentDataItem },
		);

		setCurrentData(updatedData);
	};

	if (!currentData.length && isPending) {
		return <Loader />;
	}

	return (
		<VacanciesContainer>
			{visibleItems?.map((vacancyItem) => (
				<VacancyCard
					data={{ ...vacancyItem }}
					handleUpdate={handleUpdateData}
					handleDelete={handleDleteItem}
				/>
			))}
			{isPending ? <Loader /> : <UplaodMoreBtn handleClick={handleChangeValue} />}
		</VacanciesContainer>
	);
};

export default Vacancy;
