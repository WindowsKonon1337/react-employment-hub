import { FC, useEffect, useRef, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useVirtualizedScroll } from "@packages/shared/src/hooks";
import { Loader, UplaodMoreBtn } from "@packages/shared/src/components";
import toast, { Toaster } from "react-hot-toast";

import { VacanciesService } from "@/api/services";
import { VacancyCard, VacancyCardData } from "@/components";
import { Error } from "@/global";

import { VacanciesContainer } from "./styled";
import { VacancyProps } from "./types";
import { CARD_WIDTH, GAP } from "@/components/VacancyCard/constants";

export const Vacancy: FC<VacancyProps> = ({ companyId, className }) => {
	const [currentPage, setCurrentPage] = useState(0);

	const [currentData, setCurrentData] = useState<VacancyCardData[] | []>([]);
	const containerRef = useRef(null);
	const [currentItemInRow, setCurrentItemInRow] = useState(1);

	useEffect(() => {
		const observer = new ResizeObserver((entries) => {
			const width = entries[0].contentRect.width;
			const newItemCountInRow = Math.floor(width / (CARD_WIDTH + GAP));
			setCurrentItemInRow(newItemCountInRow);
		});

		if (containerRef.current) {
			observer.observe(containerRef.current);
		}

		return () => {
			if (containerRef.current) {
				observer.unobserve(containerRef.current);
			}
		};
	}, [containerRef.current, window]);

	const { isPending, mutate } = useMutation({
		mutationKey: ["localVacancy"],
		mutationFn: async (page: number) => VacanciesService.getVacancyiesForCompany(companyId, page),
		onSuccess: (data) => {
			if (currentData.length) {
				setCurrentData((prev) => (data.length ? [...prev, ...data] : [...prev]));
			} else {
				setCurrentData(data);
			}
		},
		onError: (error: Error) => {
			toast.error(error.response?.data.message ?? "Something went wrong");
		},
	});

	const { visibleItems } = useVirtualizedScroll<VacancyCardData>({
		items: currentData,
		itemHeight: 115,
		itemsInRow: currentItemInRow,
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
		<>
			<VacanciesContainer className={className} ref={containerRef} $itemsInRow={currentItemInRow}>
				{visibleItems?.map((vacancyItem, idx) => (
					<VacancyCard
						key={idx}
						data={{ ...vacancyItem }}
						handleUpdate={handleUpdateData}
						handleDelete={handleDleteItem}
					/>
				))}
				<Toaster />
			</VacanciesContainer>
			{isPending ? <Loader /> : <UplaodMoreBtn handleClick={handleChangeValue} />}
		</>
	);
};
