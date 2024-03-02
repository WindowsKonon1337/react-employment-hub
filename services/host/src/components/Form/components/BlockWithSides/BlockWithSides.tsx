import { FC } from "react";

import { BlockWithSidesProps } from "./types";
import { BlockWithSidesWrapper, LeftSide, RightSide } from "./styled";

export const BlockWithSides: FC<BlockWithSidesProps> = ({ leftSide, children }) => {
	return (
		<BlockWithSidesWrapper>
			{leftSide && <LeftSide>{leftSide}</LeftSide>}
			<RightSide>{children}</RightSide>
		</BlockWithSidesWrapper>
	);
};
