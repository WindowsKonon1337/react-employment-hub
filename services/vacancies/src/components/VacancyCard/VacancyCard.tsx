import { FC, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";

import { VacancyService } from "@/api/services";
import Heart from "../../../public/img/VacancyCard/heart.svg";
import HeartLiked from "../../../public/img/VacancyCard/heart-liked.svg";

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
import { VacnacyCardProps } from "./types";
import { Tag } from "../UI";

export const VacancyCard: FC<VacnacyCardProps> = ({
	companyTitle,
	countCandidates,
	description,
	salary,
	isLiked,
	postedTime,
	tags,
	id,
	vacancyTitle,
}) => {
	const [hasLiked, setHasLiked] = useState(isLiked);
	const { amount, currency, inTime } = salary;

	const { mutate } = useMutation({
		mutationFn: async (id: string) => VacancyService.liked(id),
		onError: () => {
			toast.error("что-то пошло не так");
		},
	});

	const handleLiked = () => {
		setHasLiked((prev) => !prev);
		mutate(id);
	};
	return (
		<VacnacyCardWrapper>
			<Container>
				<TitleBlock>
					<Title>{vacancyTitle}</Title>
					<Subtitle>
						{companyTitle} • <span>{countCandidates} applications</span>
					</Subtitle>
				</TitleBlock>
				<LikedBtn onClick={handleLiked}>{hasLiked ? <HeartLiked /> : <Heart />}</LikedBtn>
			</Container>
			<TagsWrapper>
				{tags.map((tag, idx) => (
					<Tag key={`Tag_${idx}`} color={tag.color} title={tag.title} />
				))}
			</TagsWrapper>
			<Container>{description}</Container>
			<BottomContent>
				<Title>
					<Amount>
						{currency === "rubles" ? "₽" : currency === "dollars" ? "$" : "€"}
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
