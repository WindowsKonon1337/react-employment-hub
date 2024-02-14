import styled, { css } from "styled-components";

export const InputWrapper = styled("div")({
	position: "relative",
});

export const Input = styled("input")<{ isError?: boolean }>(({ theme, isError }) =>
	css({
		fontSize: 18,
		paddingBottom: 4,
		border: "none",
		outline: "none",
		borderBottom: "1px solid",
		borderBottomColor: isError ? theme.colors.error : theme.colors.secondary,
		color: theme.colors.secondary,
		background: "transparent",
		"&::placeholder": {
			fontSize: 15,
			color: theme.colors.secondaryLight,
		},
		"&:focus-visible": {
			borderBottomColor: theme.colors.active,
		},
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
	bottom: "-17px",
});

export const ErrorText = styled("div")(({ theme }) =>
	css({
		fontSize: 16,
		color: theme.colors.error,
	}),
);
