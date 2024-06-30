import { FC, useEffect, useState } from "react";
import { createPortal } from "react-dom";

// @ts-ignore
import CloseIcon from "@packages/shared/src/assets/delete/close.svg";

import { CloseBtn, ContentBlock, ModalWrapper } from "./styled";
import { ModalContainerProps } from "./types";

export const ModalContainer: FC<ModalContainerProps> = ({
	setModalClose,
	isModalOpen,
	children,
}) => {
	const [isOpen, setIsOpen] = useState(isModalOpen);

	useEffect(() => {
		setIsOpen(isModalOpen);
	}, [isModalOpen]);

	return (
		<>
			{createPortal(
				<ModalWrapper $isOpen={isOpen}>
					<CloseBtn onClick={() => setModalClose?.(false)}>
						<CloseIcon />
					</CloseBtn>
					<ContentBlock>{children}</ContentBlock>
				</ModalWrapper>,
				document.body,
			)}
		</>
	);
};
