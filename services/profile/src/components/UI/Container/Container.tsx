import { FC } from "react";

import { ContainerProps } from "./types";
import { ContainrBlock } from "./styled";

export const Container: FC<ContainerProps> = ({ children, className }) => (
	<ContainrBlock className={className}>{children}</ContainrBlock>
);
