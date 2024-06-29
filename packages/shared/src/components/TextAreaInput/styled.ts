import styled, { css } from "styled-components";

import { getInputStyles } from "../TextInput";

const TEXT_AREA_HEIGHT = 90;

export const TextArea = styled("textarea")<{ $isError?: boolean }>(({ theme, $isError }) =>
	css({
		...getInputStyles({ theme, isError: $isError }),
		resize: "none",
		height: TEXT_AREA_HEIGHT,
	}),
);
