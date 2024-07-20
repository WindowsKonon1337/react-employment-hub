import { FC } from "react";

import { Loader, Title } from "@packages/shared/src/components";

import { Text } from "../../styled";
import { Btn, ContainerBlock, ContentBlock, ModalWrapper } from "./styled";
import { useData } from "./utils";
import { PeoplesResposneModalProps } from "./types";

export const PeopleResponseModal: FC<PeoplesResposneModalProps> = ({
	vacancyId,
	setCloseModal,
}) => {
	const { handleApplyPeople, handleRejectPeople, peoplesOfResponse, isLoadingPeoples } = useData({
		vacancyId,
	});

	if (!isLoadingPeoples && !peoplesOfResponse) {
		return null;
	}

	return (
		<ModalWrapper isModalOpen={true} setCloseModal={setCloseModal}>
			{isLoadingPeoples ? (
				<Loader />
			) : (
				<ContentBlock>
					<Title size="m">People who responded to the vacancy</Title>
					<ContentBlock>
						{peoplesOfResponse?.map((peopleItem) => (
							<ContainerBlock key={peopleItem.userId}>
								<Text>{peopleItem.userName}</Text>
								<div>
									<Btn clickFuntcion={() => handleApplyPeople(peopleItem.userId)}>apply</Btn>
									<Btn isDleteBtn clickFuntcion={() => handleRejectPeople(peopleItem.userId)}>
										reject
									</Btn>
								</div>
							</ContainerBlock>
						))}
					</ContentBlock>
				</ContentBlock>
			)}
		</ModalWrapper>
	);
};
