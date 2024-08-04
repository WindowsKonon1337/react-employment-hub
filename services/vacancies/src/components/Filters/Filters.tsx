import { FC } from "react";
import { useOutsideClick } from "@packages/shared/src/hooks";

import FiltersIcon from "public/img/filters/filters.svg";
import CloseIcon from "public/img/filters/close.svg";

import {
	FiltersCloseWrapper,
	FiltersContentWrapper,
	FiltersIconWrapper,
	FiltersWrapper,
} from "./styled";
import { FiltersProps } from "./types";
import { FiltersContent } from "./components";

export const Filters: FC<FiltersProps> = ({ data }) => {
	const { isOpen, refContainer, setIsOpen } = useOutsideClick<HTMLDivElement>({
		isOpenValue: false,
	});

	return (
		<FiltersWrapper $isOpen={isOpen}>
			<FiltersContentWrapper $isOpen={isOpen} ref={refContainer}>
				{data.map((filter, idx) => (
					<FiltersContent filters={filter.filters} title={filter.title} key={idx} />
				))}
				<FiltersCloseWrapper onClick={() => setIsOpen(false)}>
					<CloseIcon />
				</FiltersCloseWrapper>
			</FiltersContentWrapper>
			<FiltersIconWrapper onClick={() => setIsOpen(true)}>
				<FiltersIcon />
			</FiltersIconWrapper>
		</FiltersWrapper>
	);
};
