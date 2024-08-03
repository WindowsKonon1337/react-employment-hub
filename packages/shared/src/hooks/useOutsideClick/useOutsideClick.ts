import { useRef, useEffect, useState } from "react";

import { UseOutsideClickParams } from "./types";

export const useOutsideClick = <T>({ isOpenValue, onClick }: UseOutsideClickParams) => {
	const [isOpen, setIsOpen] = useState(isOpenValue);
	const refContainer = useRef<T extends HTMLElement ? T : HTMLElement>(null);

	useEffect(() => {
		const handleOpenAdditionalVarint = (event: any) => {
			if (refContainer.current && event && !refContainer.current.contains(event.target)) {
				setIsOpen(false);
				onClick?.();
			}
		};

		document.addEventListener("mousedown", handleOpenAdditionalVarint);

		return () => document.removeEventListener("mousedown", handleOpenAdditionalVarint);
	}, [refContainer]);

	return { isOpen, refContainer, setIsOpen };
};
