import { FC, useState } from "react";

import { FiltersType } from "@/state";

import { CheckBoxProps } from "./types";
import { CheckContainer, Container, Title } from "./styled";

export const CheckBox: FC<CheckBoxProps> = ({ handleCheck, data, className }) => {
	const { title, isCheck } = data;
	const [hasCheck, setHasCheck] = useState(Boolean(isCheck));

	const onCheck = () => {
		const currentCheck = !hasCheck;
		setHasCheck(currentCheck);
		if (handleCheck) {
			handleCheck({
				type: FiltersType.checkBox,
				data: [
					{
						title,
						isCheck: currentCheck,
					},
				],
			});
		}
	};

	return (
		<Container className={className}>
			<CheckContainer $isCheck={hasCheck} onClick={onCheck} />
			<Title>{title}</Title>
		</Container>
	);
};
