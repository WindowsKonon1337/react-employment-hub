import { FC, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

// @ts-ignore
import CloseIcon from "@packages/shared/src/assets/delete/close.svg";

import { CloseBtn, ContentBlock, ModalWrapper } from "./styled";
import { ModalContainerProps } from "./types";

export const ModalContainer: FC<ModalContainerProps> = ({
	isModalOpen,
	setCloseModal,
	children,
}) => {
	const modalRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClickOutsie = (e: MouseEvent) => {
			if (modalRef?.current && e?.target && !modalRef.current.contains(e?.target as HTMLElement)) {
				console.log("click inside");
				setCloseModal?.(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutsie);

		return () => document.removeEventListener("mousedown", handleClickOutsie);
	}, []);

	return (
		<>
			{createPortal(
				<ModalWrapper $isOpen={isModalOpen} ref={modalRef}>
					<CloseBtn onClick={() => setCloseModal?.(false)}>
						<CloseIcon />
					</CloseBtn>
					<ContentBlock>{children}</ContentBlock>
				</ModalWrapper>,
				document.body,
			)}
		</>
	);
};
