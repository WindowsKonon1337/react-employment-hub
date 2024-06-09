import styled, { css } from "styled-components";

export const HeaderContainer = styled("div")(({ theme }) =>
	css({
		position: "fixed",
		width: "100%",
		top: 0,
		display: "flex",
		justifyContent: "space-between",
		padding: 20,
		background: theme.colors.secondary,
	}),
);
