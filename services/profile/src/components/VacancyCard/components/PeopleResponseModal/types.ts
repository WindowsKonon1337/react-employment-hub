import { Dispatch, SetStateAction } from "react";

export interface PeoplesResposneModalProps {
	vacancyId: string;
	setCloseModal?: Dispatch<SetStateAction<boolean>>;
}
