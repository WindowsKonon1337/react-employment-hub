import { FC } from "react";

import { ContainerProps } from "./types";
import { ContainerBlock } from "./styled";

export const Container: FC<ContainerProps> = ({ children, className }) => (
	<ContainerBlock className={className}>{children}</ContainerBlock>
);
