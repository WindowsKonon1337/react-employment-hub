import { useState, UIEvent } from "react";

export const useGetScrollElement = <D extends HTMLDivElement>() => {
	const [scrollTop, setScrollTop] = useState(0);

	const handleOnScroll = (e: UIEvent<D>) => {
		setScrollTop(e.currentTarget.scrollTop);
	};

	return { scrollTop, setScrollTop, handleOnScroll };
};
