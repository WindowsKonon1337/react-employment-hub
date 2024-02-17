import React, { FC } from "react";

import { ButtonProps } from "./types";
import { ButtonWrapper } from "./styled";

export const Button: FC<ButtonProps> = ({ className, isDisabled, clickFuntcion, children }) => {
	return (
		<ButtonWrapper disabled={isDisabled} className={className} onClick={clickFuntcion}>
			{children}
		</ButtonWrapper>
	);
};
