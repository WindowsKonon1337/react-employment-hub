import { FC, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import toast, { Toaster } from "react-hot-toast";
import { Title } from "@packages/shared/src/components";
// @ts-ignore
import TrashCan from "@packages/shared/src/assets/delete/trash.svg";

import { Error } from "@/global";
import { VacanciesService, VacancyQueryCardData } from "@/api/services";

import { Container, ContentBlock, DeleteBtn, Text, UpdatedBtn } from "./styled";
import { VacancyCardData, VacancyCardProps } from "./types";
import { DeleteModal, PeopleResponseModal, UpdateModal } from "./components";

export const VacancyCard: FC<VacancyCardProps> = ({
	data,
	className,
	handleDelete,
	handleUpdate,
	isOnlyRead = false,
}) => {
	const { description, id, title, countOfResponse } = data;
	const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
	const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
	const [isPeopleResponseModalOpen, setIsPeopleResponseModalOpen] = useState(false);

	const { mutate: updateModal } = useMutation({
		mutationKey: ["updatedVacancy"],
		mutationFn: async ({ id, cardData }: { id: string; cardData: VacancyQueryCardData }) =>
			VacanciesService.update(id, cardData),
		onSuccess: (data) => {
			toast.success("Your vacancy succes updated");
			const newData: VacancyCardData = {
				...data,
				tags: data.tags.map((tag) => ({ label: tag, value: tag })),
			};
			handleUpdate?.(id, newData);
		},
		onError: (error: Error) => {
			toast.error(error.response?.data.message ?? "Something went wrong");
		},
	});

	const { mutate: deleteModal } = useMutation({
		mutationFn: async (id: string) => VacanciesService.delete(id),
		onSuccess: () => {
			toast.success("Your vacancy succes delete");
			handleDelete?.(id);
		},
		onError: (error: Error) => {
			toast.error(error.response?.data.message ?? "Something went wrong");
		},
	});

	const onDelete = () => {
		deleteModal(id);
	};

	const onUpdate = (id: string, cardData: VacancyQueryCardData) => {
		updateModal({ id, cardData });
	};

	const isIDsabledBtn = (countOfResponse && countOfResponse < 1) || !countOfResponse;

	return (
		<Container className={className}>
			<ContentBlock>
				<Title size="m">{title}</Title>
				{!isOnlyRead && (
					<DeleteBtn onClick={() => setIsDeleteModalOpen(true)}>
						<TrashCan />
					</DeleteBtn>
				)}
			</ContentBlock>
			<Text>{description}</Text>
			{!isOnlyRead && (
				<ContentBlock>
					<UpdatedBtn clickFuntcion={() => setIsUpdateModalOpen(true)}>update</UpdatedBtn>
					<UpdatedBtn
						clickFuntcion={() => setIsPeopleResponseModalOpen(true)}
						isDisabled={isIDsabledBtn}
					>
						responses {countOfResponse}
					</UpdatedBtn>
				</ContentBlock>
			)}

			{!isOnlyRead && isDeleteModalOpen && (
				<DeleteModal
					title={title}
					isOpen={isDeleteModalOpen}
					setShowModal={setIsDeleteModalOpen}
					handleDlete={onDelete}
				/>
			)}
			{!isOnlyRead && isUpdateModalOpen && (
				<UpdateModal
					isOpen={isUpdateModalOpen}
					setShowModal={setIsUpdateModalOpen}
					handleUpdate={onUpdate}
					{...data}
				/>
			)}
			{!isOnlyRead && isPeopleResponseModalOpen && (
				<PeopleResponseModal vacancyId={id} setCloseModal={setIsPeopleResponseModalOpen} />
			)}
			<Toaster />
		</Container>
	);
};
