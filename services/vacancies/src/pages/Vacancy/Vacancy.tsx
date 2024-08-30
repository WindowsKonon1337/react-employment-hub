import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { Loader, PlugSection } from "@packages/shared/src/components";

import { VacancyService } from "@/api/services";

import { VacancyContainer } from "./styled";
import { VacanciesContents, VacancyCard } from "./components";

const Vacancy = () => {
	const location = useLocation();
	const id = location.pathname.split("/")[2];

	const {
		data: vacancyData,
		isPending,
		mutate,
	} = useMutation({
		mutationFn: (id: string) => VacancyService.getVacancy(id),
	});

	useEffect(() => {
		if (id) {
			mutate(id);
		}
	}, [id]);

	return (
		<VacancyContainer>
			<VacanciesContents id={id} />
			{isPending ? (
				<Loader />
			) : vacancyData ? (
				<VacancyCard {...vacancyData} />
			) : (
				<PlugSection typePlug="error" plugText="Something went wrong when uploading the data" />
			)}
		</VacancyContainer>
	);
};

export default Vacancy;
