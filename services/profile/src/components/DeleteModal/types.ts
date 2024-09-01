import { Dispatch, SetStateAction } from "react";

export interface DeleteModalValues {
	deleteValue: string;
}

export interface DeleteModalProps {
	title: string;
	isOpen: boolean;
	handleDlete?: () => void;
	setShowModal: Dispatch<SetStateAction<boolean>>;
}
