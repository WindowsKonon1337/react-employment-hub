import React, { FC } from "react";

import { TextContainer } from "./styled";
import { TextProps } from "./types";

export const Text: FC<TextProps> = ({ className, children }) => (
	<TextContainer className={className}>{children}</TextContainer>
);
