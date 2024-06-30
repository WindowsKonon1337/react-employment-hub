import { Dispatch, HTMLAttributes, SetStateAction } from "react";

export interface ModalContainerProps extends HTMLAttributes<HTMLDivElement> {
	isModalOpen: boolean;
	setModalClose?: Dispatch<SetStateAction<boolean>>;
}
