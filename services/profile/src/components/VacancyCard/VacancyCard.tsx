import { FC, useState } from "react";

import { Title } from "@packages/shared/src/components";
// @ts-ignore
import TrashCacnon from "@packages/shared/src/assets/delete/trash.svg";

import { Container, ContentBlock, DeleteBtn, Text, UpdatedBtn } from "./styled";
import { VacancyCardProps } from "./types";
import { DeleteModal, UpdateModal } from "./components";

export const VacancyCard: FC<VacancyCardProps> = ({ data, className }) => {
	const { description, id, title } = data;
	const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
	const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

	return (
		<Container className={className}>
			<ContentBlock>
				<Title size="m">{title}</Title>
				<DeleteBtn onClick={() => setIsDeleteModalOpen(true)}>
					<TrashCacnon />
				</DeleteBtn>
			</ContentBlock>
			<Text>{description}</Text>
			<UpdatedBtn clickFuntcion={() => setIsUpdateModalOpen(true)}>update</UpdatedBtn>
			<DeleteModal
				title={title}
				isOpen={isDeleteModalOpen}
				setShowModal={setIsDeleteModalOpen}
				id={id}
			/>
			<UpdateModal isOpen={isUpdateModalOpen} setShowModal={setIsUpdateModalOpen} {...data} />
		</Container>
	);
};
