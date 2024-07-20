import { FC, useState } from "react";
import { Title } from "@packages/shared/src/components";
import { useMutation } from "@tanstack/react-query";
import toast, { Toaster } from "react-hot-toast";

// @ts-ignore
import TrashCan from "@packages/shared/src/assets/delete/trash.svg";

import { Error } from "@/global";
import { CompanyService } from "@/api/services";

// вынести модалки повторяющиеся на верхний уровень
import { DeleteModal } from "../VacancyCard/components";
import { CompanyCardProps } from "./types";
import {
	CompanyAvatar,
	CompanyContainer,
	ContentRow,
	DeleteBtn,
	RightSideContent,
	Tag,
	Text,
	TopContent,
} from "./styled";

export const CompanyCard: FC<CompanyCardProps> = ({ data, className }) => {
	const { companyTitle, location, tags, companyImg, companyDescription, id } = data;

	const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

	const { mutate } = useMutation({
		mutationKey: ["deleteCompany"],
		mutationFn: async (id: string) => CompanyService.deleteCompany(id),
		onSuccess: () => {
			toast.success("Your company succes delete");
		},
		onError: (error) => {
			const currentError = error as Error;
			toast.error(`${currentError.response?.data.message ?? "Something went wrong"}`);
		},
	});

	const handleDelete = () => {
		mutate(id);
	};

	return (
		<>
			<CompanyContainer className={className} to={`${id}`}>
				<TopContent>
					{companyImg && <CompanyAvatar src={companyImg} />}
					<RightSideContent>
						<ContentRow>
							<Title size="m">{companyTitle}</Title>
						</ContentRow>
						<ContentRow>
							{tags.map((tag, idx) => (
								<Tag key={`Tag_${idx}`}>{tag.value}</Tag>
							))}
						</ContentRow>
						<ContentRow>
							<Text>{location}</Text>
						</ContentRow>
					</RightSideContent>
					<DeleteBtn
						onClick={(e) => {
							e.preventDefault();
							setIsDeleteModalOpen(true);
						}}
					>
						<TrashCan />
					</DeleteBtn>
				</TopContent>
				<ContentRow>
					<Text>{companyDescription}</Text>
				</ContentRow>
				<Toaster />
			</CompanyContainer>
			{isDeleteModalOpen && (
				<DeleteModal
					setShowModal={setIsDeleteModalOpen}
					title={companyTitle}
					isOpen={isDeleteModalOpen}
					handleDlete={handleDelete}
				/>
			)}
		</>
	);
};
