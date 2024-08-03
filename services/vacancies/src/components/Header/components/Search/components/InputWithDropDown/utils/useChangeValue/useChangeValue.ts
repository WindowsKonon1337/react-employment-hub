import { useEffect, useState } from "react";
import { UseChangeValueParams } from "./types";

export const useChangeValue = ({
	currentValue,
	handleChangeCurrentValue,
	handleGetAdditionalVarinats,
	setIsMoreVariantsOpen,
}: UseChangeValueParams) => {
	const [isTyping, setIsTyping] = useState(false);

	const handleChangeValue = (value: string) => {
		setIsTyping(true);
		handleChangeCurrentValue?.(value);
		if (value) {
			setIsMoreVariantsOpen(true);
		} else {
			setIsMoreVariantsOpen(false);
		}
	};

	useEffect(() => {
		if (isTyping) {
			const timerId = setTimeout(() => {
				setIsTyping(true);
				handleGetAdditionalVarinats(currentValue);
			}, 500);
			return () => clearTimeout(timerId);
		}
	}, [isTyping, handleChangeCurrentValue, currentValue]);

	return { handleChangeValue };
};
