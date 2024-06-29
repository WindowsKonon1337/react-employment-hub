import styled, { css } from "styled-components";

import { getInputStyles } from "./utils";

export const InputWrapper = styled("div")({
	position: "relative",
	width: "100%",
});

export const Input = styled("input")<{ $isError?: boolean }>(({ theme, $isError }) =>
	css({
		...getInputStyles({ theme, isError: $isError }),
	}),
);

export const Label = styled("div")(({ theme }) =>
	css({
		fontSize: 15,
		marginBottom: 8,
		color: theme.colors.secondary,
	}),
);

export const ErrorWrapper = styled("div")({
	position: "absolute",
	bottom: "-20px",
});

export const ErrorText = styled("div")(({ theme }) =>
	css({
		fontSize: 16,
		color: theme.colors.error,
	}),
);

export const VisibleTextBtn = styled("div")({
	position: "absolute",
	cursor: "pointer",
	right: 5,
	top: "50%",
	transform: "translateY(25%)",
});
