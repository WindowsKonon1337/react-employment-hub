import { FC } from "react";
import { BlockWithSides } from "../BlockWithSides";

import { AboutForm, FormSubtitleBlock, LinkBlock, PageSubtitle, PageTitle } from "./styled";
import { FormContentProps } from "./types";

export const FormContent: FC<FormContentProps> = ({
	leftSideContentBlock,
	subtitleValue,
	titleValue,
	underFormLink,
	underFormText,
	children,
}) => {
	const { path, value } = underFormLink;

	const LeftSideBlock = <AboutForm>{leftSideContentBlock}</AboutForm>;

	return (
		<BlockWithSides leftSide={LeftSideBlock}>
			<PageTitle>{titleValue}</PageTitle>
			<PageSubtitle>{subtitleValue}</PageSubtitle>
			{children}
			<FormSubtitleBlock>
				<>{underFormText}</>
				<LinkBlock to={path}>{value}</LinkBlock>
			</FormSubtitleBlock>
		</BlockWithSides>
	);
};
