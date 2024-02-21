import styled, { css } from "styled-components";

export const InputWrapper = styled("div")({
	position: "relative",
});

export const Input = styled("input")<{ $isError?: boolean }>(({ theme, $isError }) =>
	css({
		position: "relative",
		padding: "10px 8px",
		fontSize: 18,
		borderRadius: 10,
		border: "1px solid",
		outline: "none",
		borderColor: $isError ? theme.colors.error : theme.colors.secondary,
		color: theme.colors.secondary,
		background: "transparent",
		"&::placeholder": {
			fontSize: 15,
			color: theme.colors.secondaryLight,
		},
		"&:focus-visible": {
			borderColor: theme.colors.active,
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
