import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const MenuLinkItem = styled(Link)(({ theme }) =>
	css({
		color: theme.colors.secondary,
		fontSize: 16,
		textDecoration: "none",
		outline: "none",
		padding: 8,
		transition: "all 0.2s ease",
		"&:hover": {
			transition: "all 0.2s ease",
			borderRadius: 8,
			color: theme.colors.main,
			background: theme.colors.blue,
		},
	}),
);
