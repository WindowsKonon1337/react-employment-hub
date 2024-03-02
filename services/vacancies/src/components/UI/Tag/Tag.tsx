import { FC } from "react";
import { TagProps } from "./types";
import { TagWrapper } from "./styled";

export const Tag: FC<TagProps> = ({ color, title }) => (
	<TagWrapper $backGround={color}>{title}</TagWrapper>
);
