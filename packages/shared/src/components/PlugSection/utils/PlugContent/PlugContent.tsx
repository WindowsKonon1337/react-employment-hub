import React, { FC } from "react";

// @ts-ignore
import EmptyData from "../../../../assets/plugSection/emptyData.svg";
// @ts-ignore
import Error from "../../../../assets/plugSection/error.svg";

import { PlugContentProps } from "./types";
import { PlugContentBlock, TextPlug } from "./styled";

export const PlugContent: FC<PlugContentProps> = ({ plugType, plugText }) => {
	switch (plugType) {
		case "error":
			return (
				<PlugContentBlock>
					<Error />
					<TextPlug>{plugText}</TextPlug>
				</PlugContentBlock>
			);

		case "emptyData":
		default:
			return (
				<PlugContentBlock>
					<EmptyData />
					<TextPlug>{plugText}</TextPlug>
				</PlugContentBlock>
			);
	}
};
