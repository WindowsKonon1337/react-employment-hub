import { FC } from "react";
import { Loader } from "@packages/shared/src/components";
import { useOutsideClick } from "@packages/shared/src/hooks";

import Map from "public/img/Search/map.svg";

import { Input } from "../../styled";
import { AdditionalVarintsContainer, Container, InputContainer, ValueBlock } from "./styled";
import { InputWithDropDownProps } from "./types";
import { useChangeValue, useData } from "./utils";

export const InputWithDropDown: FC<InputWithDropDownProps> = ({
	currentValue,
	handleChangeCurrentValue,
}) => {
	const {
		isOpen: isMoreVariantsOpen,
		refContainer,
		setIsOpen: setIsMoreVariantsOpen,
	} = useOutsideClick<HTMLDivElement>({ isOpenValue: false });

	const { data, handleGetAdditionalVarinats, isPending } = useData();

	const handleApplyValue = (value: string) => {
		handleChangeCurrentValue && handleChangeCurrentValue(value);
		setIsMoreVariantsOpen(false);
	};

	const { handleChangeValue } = useChangeValue({
		currentValue,
		handleChangeCurrentValue,
		handleGetAdditionalVarinats,
		setIsMoreVariantsOpen,
	});

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
