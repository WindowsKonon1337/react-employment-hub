import styled, { css } from "styled-components";

export const RangeWrapper = styled("div")({
	display: "flex",
	gap: 10,
});

export const RangeContainer = styled("input")(({ theme }) =>
	css({
		width: 60,
		outline: "none",
		fontSize: 16,
		border: `1px solid ${theme.colors.secondary}`,
		color: theme.colors.secondary,
	}),
);

export const Description = styled("div")(({ theme }) => ({
	fontSize: 15,
	color: theme.colors.secondary,
}));
