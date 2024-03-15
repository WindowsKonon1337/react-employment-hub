import { FC, useState } from "react";
import { CheckBoxProps } from "./types";
import { CheckContainer, Container, Title } from "./styled";

export const CheckBox: FC<CheckBoxProps> = ({ handleCheck, isCheck = false, title, className }) => {
	const [hasCheck, setHasCheck] = useState(isCheck);

	const onCheck = () => {
		setHasCheck((prev) => !prev);
		if (handleCheck) {
			handleCheck();
		}
	};

	return (
		<Container className={className}>
			<CheckContainer $isCheck={hasCheck} onClick={onCheck} />
			<Title>{title}</Title>
		</Container>
	);
};
