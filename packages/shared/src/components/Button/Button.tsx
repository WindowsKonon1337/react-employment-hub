import React, { FC } from "react";

import { ButtonProps } from "./types";
import { ButtonWrapper } from "./styled";

export const Button: FC<ButtonProps> = ({ className, isDisabled, children }) => {
	return (
		<ButtonWrapper disabled={isDisabled} className={className}>
			{children}
		</ButtonWrapper>
	);
};
