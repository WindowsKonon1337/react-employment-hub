import React, { FC } from "react";

import { PlugSectionWrapper } from "./styled";
import { PlugSectionProps } from "./types";
import { PlugContent } from "./utils";

export const PlugSection: FC<PlugSectionProps> = ({
	typePlug,
	plugText = "Something went wrong",
	className,
}) => {
	return (
		<PlugSectionWrapper className={className}>
			<PlugContent plugText={plugText} plugType={typePlug} />
		</PlugSectionWrapper>
	);
};
