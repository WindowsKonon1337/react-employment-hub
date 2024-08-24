import { FC, PropsWithChildren } from "react";
import { useOutsideClick } from "@packages/shared/src/hooks";

import VacanciesImg from "public/img/VacancyCard/vacancies.svg";
import CloseImg from "public/img/filters/close.svg";

import { CloseVacancyIcon, VacanciesContentsContainer, VacanciesContentsIconBlock } from "./styled";

export const VacanciesWrapper: FC<PropsWithChildren> = ({ children }) => {
	const { isOpen, refContainer, setIsOpen } = useOutsideClick<HTMLDivElement>({
		isOpenValue: false,
	});

	return (
		<div ref={refContainer}>
			<VacanciesContentsIconBlock onClick={() => setIsOpen(true)}>
				<VacanciesImg />
			</VacanciesContentsIconBlock>
			<VacanciesContentsContainer $isOpen={isOpen}>
				{children}
				<CloseVacancyIcon onClick={() => setIsOpen(false)}>
					<CloseImg />
				</CloseVacancyIcon>
			</VacanciesContentsContainer>
		</div>
	);
};
