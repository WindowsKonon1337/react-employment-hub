import { FC, useEffect, useState } from "react";

import { FiltersType } from "../../../types";
import { RangeProps } from "./types";
import { Description, RangeContainer, RangeWrapper } from "./styled";

export const Range: FC<RangeProps> = ({ data, handleChangeValue, description }) => {
	const { from, to } = data;
	const [fromValue, setFromValue] = useState(from);
	const [toValue, setToValue] = useState(to);
	const [isTyping, setIsTyping] = useState(false);

	const handleChange = (type: "from" | "to", value: string) => {
		setIsTyping(true);
		if (type === "from") {
			setFromValue(value);
		} else {
			setToValue(value);
		}
	};

	useEffect(() => {
		if (handleChangeValue && isTyping) {
			const timerId = setTimeout(() => {
				setIsTyping(true);
				handleChangeValue({
					data: { type: FiltersType.range, data: { from: fromValue, to: toValue } },
				});
			}, 500);
			return () => clearTimeout(timerId);
		}
	}, [fromValue, toValue, setToValue, setFromValue]);

	return (
		<RangeWrapper>
			<Description>{description?.from ? description?.from : "from"}</Description>
			<RangeContainer
				value={fromValue}
				onChange={(e) => (/^\d*$/.test(e.target.value) ? handleChange("from", e.target.value) : null)}
			/>
			<Description>{description?.to ? description?.to : "to"}</Description>
			<RangeContainer
				value={toValue}
				onChange={(e) => (/^\d*$/.test(e.target.value) ? handleChange("to", e.target.value) : null)}
			/>
		</RangeWrapper>
	);
};
