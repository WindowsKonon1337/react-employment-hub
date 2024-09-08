import { FC, useEffect } from "react";
import { createPortal } from "react-dom";
import { useOutsideClick } from "@packages/shared/src/hooks";

// @ts-ignore
import CloseIcon from "@packages/shared/src/assets/delete/close.svg";

import { CloseBtn, ContentBlock, ModalWrapper } from "./styled";
import { ModalContainerProps } from "./types";

export const ModalContainer: FC<ModalContainerProps> = ({
	isModalOpen,
	setCloseModal,
	children,
	className,
}) => {
	const { isOpen, refContainer, setIsOpen } = useOutsideClick<HTMLDivElement>({
		isOpenValue: isModalOpen,
	});

	useEffect(() => {
		setCloseModal?.(isOpen);
	}, [isOpen]);

	return (
		<>
			{createPortal(
				<ModalWrapper $isOpen={isOpen} ref={refContainer} className={className}>
					<CloseBtn onClick={() => setIsOpen?.(false)}>
						<CloseIcon />
					</CloseBtn>
					<ContentBlock>{children}</ContentBlock>
				</ModalWrapper>,
				document.body,
			)}
		</>
	);
};
