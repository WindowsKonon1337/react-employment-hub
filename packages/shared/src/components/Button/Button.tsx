import React, { FC } from "react";

import { ButtonProps } from "./types";
import { ButtonWrapper } from "./styled";

export const Button: FC<ButtonProps> = ({
	className,
	isDisabled,
	clickFuntcion,
	isDleteBtn = false,
	children,
}) => {
	return (
		<ButtonWrapper
			disabled={isDisabled}
			isDelete={isDleteBtn}
			className={className}
			onClick={clickFuntcion}
		>
			{children}
		</ButtonWrapper>
	);
};
