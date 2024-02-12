import styled, { css } from "styled-components";

export const HeaderContainer = styled("div")(({ theme }) =>
	css({
		display: "flex",
		justifyContent: "space-between",
		padding: 20,
		background: theme.colors.secondary,
	}),
);
