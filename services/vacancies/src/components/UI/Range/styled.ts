import styled, { css } from "styled-components";

export const RangeWrapper = styled("div")({
	display: "flex",
});

export const RangeContainer = styled("input")(({ theme }) =>
	css({
		outline: "none",
		fontSize: 16,
		border: `1px solid ${theme.colors.secondary}`,
		color: theme.colors.secondary,
	}),
);
