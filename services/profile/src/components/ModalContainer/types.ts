import { Dispatch, HTMLAttributes, SetStateAction } from "react";

export interface ModalContainerProps extends HTMLAttributes<HTMLDivElement> {
	isModalOpen: boolean;
	setCloseModal?: Dispatch<SetStateAction<boolean>>;
}
