import { FC } from "react";

import { BlockWithSidesProps } from "./types";
import { BlockWithSidesWrapper, LeftSide } from "./styled";

export const BlockWithSides: FC<BlockWithSidesProps> = ({ leftSide, children }) => {
	return (
		<BlockWithSidesWrapper>
			{leftSide && <LeftSide>{leftSide}</LeftSide>}
			<div>{children}</div>
		</BlockWithSidesWrapper>
	);
};
