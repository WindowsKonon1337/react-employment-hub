import { FC, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";

import { VacancyService } from "@/api/services";
import Heart from "../../../public/img/VacancyCard/heart.svg";
import HeartLiked from "../../../public/img/VacancyCard/heart-liked.svg";

import { Tag } from "../UI";
import {
	BottomContent,
	Container,
	TitleBlock,
	Subtitle,
	Title,
	VacnacyCardWrapper,
	LikedBtn,
	Amount,
	TagsWrapper,
} from "./styled";
import { VacancyCardProps } from "./types";
import { getSalaryCurrency } from "./utils";

export const VacancyCard: FC<VacancyCardProps> = ({ data, className }) => {
	const {
		companyTitle,
		countCandidates,
		description,
		id,
		isLiked,
		postedTime,
		salary,
		tags,
		vacancyTitle,
	} = data || {};
	const [hasLiked, setHasLiked] = useState(isLiked);
	const { amount, currency, inTime } = salary;

	const { mutate } = useMutation({
		mutationFn: async () => VacancyService.liked(),
		onError: () => {
			toast.error("что-то пошло не так");
		},
	});

	const handleLiked = (e: any) => {
		e.preventDefault();
		setHasLiked((prev) => !prev);
		mutate();
	};
	return (
		<VacnacyCardWrapper to={`/vacancy/${id}`} className={className}>
			<Container>
				<TitleBlock>
					<Title>{vacancyTitle}</Title>
					<Subtitle>
						{companyTitle} • <span>{countCandidates} applications</span>
					</Subtitle>
				</TitleBlock>
				<LikedBtn onClick={handleLiked}>{hasLiked ? <HeartLiked /> : <Heart />}</LikedBtn>
			</Container>
			{tags[0] !== null && (
				<TagsWrapper>
					{tags.map((tag, idx) => (
						<Tag key={`Tag_${idx}`} data={tag} />
					))}
				</TagsWrapper>
			)}

			<Container>{description}</Container>
			<BottomContent>
				<Title>
					<Amount>
						{getSalaryCurrency(currency)}
						{amount}
					</Amount>{" "}
					/ {inTime}
				</Title>
				<Subtitle>Posted {postedTime} days ago</Subtitle>
			</BottomContent>
			<Toaster />
		</VacnacyCardWrapper>
	);
};
