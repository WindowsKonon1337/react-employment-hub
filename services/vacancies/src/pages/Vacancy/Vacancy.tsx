import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { Loader, Text } from "@packages/shared/src/components";

import ErrorImg from "public/img/error/error.png";
import { VacancyService } from "@/api/services";

import { EmptyBlock, VacancyContainer } from "./styled";
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
				// TODO: заглушки вынести в отедльный компонент и преиспользовать
				<EmptyBlock>
					<img src={ErrorImg} alt="errorImage" width="350px" />
					<Text>Something went wrong when uploading the data</Text>
				</EmptyBlock>
			)}
		</VacancyContainer>
	);
};

export default Vacancy;
