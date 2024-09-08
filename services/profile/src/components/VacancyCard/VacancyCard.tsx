import { FC, useState } from "react";
import { Title } from "@packages/shared/src/components";
// @ts-ignore
import TrashCan from "@packages/shared/src/assets/delete/trash.svg";

import { DeleteModal } from "@/components";

import { Container, ContentBlock, DeleteBtn, Text, UpdatedBtn } from "./styled";
import { VacancyCardProps } from "./types";
import { PeopleResponseModal, UpdateModal } from "./components";
import { useData } from "./utils";

export const VacancyCard: FC<VacancyCardProps> = ({
	data,
	className,
	handleDelete,
	handleUpdate,
	isOnlyRead = false,
}) => {
	const { description, id, title, countOfResponse } = data || {};
	const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
	const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
	const [isPeopleResponseModalOpen, setIsPeopleResponseModalOpen] = useState(false);

	const { onDelete, onUpdate } = useData({ id, handleDelete, handleUpdate });

	const isIDsabledBtn = !countOfResponse || !countOfResponse;

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
		</Container>
	);
};
