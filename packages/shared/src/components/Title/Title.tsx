import React, { FC } from "react";
import { TitleProps } from "./types";
import { TitleWrapper } from "./styled";

export const Title: FC<TitleProps> = ({ size = "m", children, className }) => {
	return (
		<TitleWrapper size={size} className={className}>
			{children}
		</TitleWrapper>
	);
};
