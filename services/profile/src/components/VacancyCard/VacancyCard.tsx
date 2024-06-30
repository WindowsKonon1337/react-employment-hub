import { FC, useState } from "react";

import { Title } from "@packages/shared/src/components";
// @ts-ignore
import TrashCacnon from "@packages/shared/src/assets/delete/trash.svg";

import { Container, ContentBlock, DeleteBtn, Text, UpdatedBtn } from "./styled";
import { VacancyCardProps } from "./types";
import { DeleteModal } from "./components";

export const VacancyCard: FC<VacancyCardProps> = ({ description, id, tags, title, className }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<Container className={className}>
			<ContentBlock>
				<Title size="m">{title}</Title>
				<DeleteBtn onClick={() => setIsModalOpen(() => true)}>
					<TrashCacnon />
				</DeleteBtn>
			</ContentBlock>
			<Text>{description}</Text>
			<UpdatedBtn>update</UpdatedBtn>
			<DeleteModal />
		</Container>
	);
};
