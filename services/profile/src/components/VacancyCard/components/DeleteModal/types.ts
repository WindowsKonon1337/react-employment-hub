import { Dispatch, SetStateAction } from "react";

export interface DeleteModalValues {
	deleteValue: string;
}

export interface DeleteModalProps {
	title: string;
	id: string;
	isOpen: boolean;
	setShowModal: Dispatch<SetStateAction<boolean>>;
}
