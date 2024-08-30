import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import toast, { Toaster } from "react-hot-toast";
import { Loader, UplaodMoreBtn } from "@packages/shared/src/components";

import { CompanyService } from "@/api/services";
import { Error } from "global";

import { CompanyCard, CompanyCardData } from "@/components";

import { CompaniesContainer } from "./styled";

const Companies = () => {
	const [currentPage, setCurrentPage] = useState(0);
	const [comapniesCards, setCompaniesCards] = useState<CompanyCardData[] | []>([]);

	const { mutate, isPending } = useMutation({
		mutationFn: async (page: number) => CompanyService.getAll(page),
		onSuccess: (data) => {
			if (comapniesCards.length > 0) {
				setCompaniesCards((prev) => (data.length ? [...prev, ...data] : [...prev]));
			} else {
				console.log("упал сюда");
				setCompaniesCards(data);
			}
		},
		onError: (error: Error) => {
			toast.error(error.response?.data.message ?? "Something went wrong");
		},
	});

	useEffect(() => {
		mutate(currentPage);
	}, []);

	if (isPending && !comapniesCards.length) {
		return <Loader />;
	}

	if (!isPending && !comapniesCards.length) {
		return null;
	}

	if (comapniesCards.length)
		return (
			<CompaniesContainer>
				{comapniesCards.map((cardData, idx) => (
					<CompanyCard key={`CompanyCard_${cardData.id}`} data={{ ...cardData, id: idx.toString() }} />
				))}
				{isPending ? (
					<Loader />
				) : (
					<UplaodMoreBtn handleClick={() => setCurrentPage((prev) => prev + 1)} />
				)}
				<Toaster />
			</CompaniesContainer>
		);
};

export default Companies;
