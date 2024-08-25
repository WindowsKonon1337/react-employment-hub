import { FC } from "react";

import { TagProps } from "./types";
import { TagWrapper } from "./styled";

export const Tag: FC<TagProps> = ({ data: { title } }) => <TagWrapper>{title}</TagWrapper>;
