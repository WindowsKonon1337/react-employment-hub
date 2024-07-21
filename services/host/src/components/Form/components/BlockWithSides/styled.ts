import styled, { css } from "styled-components";

export const BlockWithSidesWrapper = styled("div")(({ theme }) =>
	css({
		display: "grid",
		gridTemplateColumns: "0.3fr 1fr",
		alignItems: "center",
		background: theme.colors.main,
		[`@media ${theme.media.medium}`]: {
			gridTemplateColumns: "1fr",
			height: "100vh",
			padding: 20,
		},
	}),
);

export const LeftSide = styled("div")(({ theme }) =>
	css({
		display: "flex",
		alignItems: "center",
		width: "100%",
		height: "100vh",
		justifyContent: "center",
		background: theme.colors.active,
		[`@media ${theme.media.medium}`]: {
			display: "none",
		},
	}),
);

export const RightSide = styled("div")({
	margin: "0 auto",
});
