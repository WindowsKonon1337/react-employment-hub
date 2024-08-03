import { Dispatch, SetStateAction } from "react";

export interface UseChangeValueParams {
	currentValue: string;
	setIsMoreVariantsOpen: Dispatch<SetStateAction<boolean>>;
	handleGetAdditionalVarinats: (value: string) => void;
	handleChangeCurrentValue?: (value: string) => void;
}
