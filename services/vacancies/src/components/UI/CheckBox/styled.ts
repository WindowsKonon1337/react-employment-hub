import styled, { css } from "styled-components";

export const Container = styled("div")({
	display: "flex",
	alignItems: "center",
	gap: 5,
});

export const Title = styled("div")(({ theme }) =>
	css({
		fontSize: 15,
		color: theme.colors.secondary,
	}),
);

export const CheckContainer = styled("div")<{ $isCheck: boolean }>(({ theme, $isCheck }) =>
	css({
		cursor: "pointer",
		width: 20,
		height: 20,
		border: `1px solid ${theme.colors.secondary}`,
		borderRadius: 8,
		background: $isCheck ? theme.colors.secondary : "transparent",
	}),
);
