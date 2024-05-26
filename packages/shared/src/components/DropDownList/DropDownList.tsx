import React, { FC, useState, useRef, useEffect } from "react";

import { DropDownListProps } from "./types";
import { DropDownContainer, DropDownItem, DropDownLists, DropDownTitle } from "./styled";

export const DropDownList: FC<DropDownListProps> = ({
	title,
	listValues,
	handleChange,
	isOpen,
}) => {
	const [currentTitle, setCurrentTitle] = useState(title);
	const dropDownContainer = useRef<HTMLDivElement>(null);
	const [isDropDownOpen, setIsDropDownOpen] = useState(isOpen);

	const handleOpenDropDown = (event: any) => {
		if (dropDownContainer.current && !dropDownContainer.current.contains(event.target)) {
			console.log("упал сюда");
			setIsDropDownOpen(false);
		} else {
			setIsDropDownOpen(true);
		}
	};

	const handleCompleteValue = (item: { value: string; title: string }) => {
		setCurrentTitle(item.title);
		if (handleChange) {
			handleChange(item.value);
		}
		setIsDropDownOpen(false);
	};

	useEffect(() => {
		document.addEventListener("mousedown", handleOpenDropDown);

		return () => document.removeEventListener("mousedown", handleOpenDropDown);
	}, []);

	return (
		<DropDownContainer ref={dropDownContainer}>
			<DropDownTitle>{currentTitle}</DropDownTitle>
			{isDropDownOpen && (
				<DropDownLists>
					{listValues.map((item) => (
						<DropDownItem
							key={`DropDownItem_${item.title}`}
							onClick={() => handleCompleteValue(item)}
							$isChecked={item.title === currentTitle}
						>
							{item.title}
						</DropDownItem>
					))}
				</DropDownLists>
			)}
		</DropDownContainer>
	);
};
