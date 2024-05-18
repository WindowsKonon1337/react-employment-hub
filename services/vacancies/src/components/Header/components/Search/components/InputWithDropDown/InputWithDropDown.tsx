import { FC, useEffect, useRef, useState } from "react";
import { useMutation } from "@tanstack/react-query";

import { LocationService } from "@/api/services";
import { Loader } from "@packages/shared/src/components";
import Map from "public/img/Search/map.svg";

import { Input } from "../../styled";
import { AdditionalVarintsContainer, Container, InputContainer, ValueBlock } from "./styled";
import { InputWithDropDownProps } from "./types";

export const InputWithDropDown: FC<InputWithDropDownProps> = ({
	currentValue,
	handleChangeCurrentValue,
}) => {
	const refContainer = useRef<HTMLInputElement>(null);
	const [isTyping, setIsTyping] = useState(false);
	const [isMoreVariantsOpen, setIsMoreVariantsOpen] = useState(false);

	const { data, isPending, mutate } = useMutation({
		mutationFn: async (location: string) => LocationService.getLocation(location),
	});

	const handleOpenAdditionalVarint = (event: any) => {
		if (refContainer.current && event && !refContainer.current.contains(event.target)) {
			setIsMoreVariantsOpen(false);
		}
	};

	const handleChangeValue = (value: string) => {
		setIsTyping(true);
		handleChangeCurrentValue && handleChangeCurrentValue(value);
		if (value) {
			setIsMoreVariantsOpen(true);
		} else {
			setIsMoreVariantsOpen(false);
		}
	};

	const handleApplyValue = (value: string) => {
		handleChangeCurrentValue && handleChangeCurrentValue(value);
		setIsMoreVariantsOpen(false);
	};

	useEffect(() => {
		if (isTyping) {
			const timerId = setTimeout(() => {
				setIsTyping(true);
				mutate(currentValue);
			}, 500);
			return () => clearTimeout(timerId);
		}
	}, [isTyping, handleChangeCurrentValue, currentValue]);

	useEffect(() => {
		document.addEventListener("mousedown", handleOpenAdditionalVarint);

		return () => document.removeEventListener("mousedown", handleOpenAdditionalVarint);
	}, [refContainer]);

	return (
		<Container ref={refContainer}>
			<InputContainer>
				<Map />
				<Input
					placeholder="Add Country or City"
					value={currentValue}
					onChange={(e) => handleChangeValue(e.target.value)}
				/>
			</InputContainer>
			<AdditionalVarintsContainer $isOpen={isMoreVariantsOpen}>
				{isPending ? (
					<Loader />
				) : data && data?.length > 0 ? (
					data?.map((item) => (
						<ValueBlock key={`ValueBlock_${item}`} onClick={() => handleApplyValue(item)}>
							{item}
						</ValueBlock>
					))
				) : (
					<div>No search results</div>
				)}
			</AdditionalVarintsContainer>
		</Container>
	);
};
