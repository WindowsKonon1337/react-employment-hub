import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const HeaderLinkWrapper = styled(Link)<{ isChoise?: boolean }>(({ theme, isChoise }) =>
	css({
		position: "relative",
		textDecoration: "none",
		color: isChoise ? theme.colors.active : theme.colors.main,
		fontSize: 18,
		transition: "all 0.3s ease",
		"&:before": {
			position: "absolute",
			width: "0",
			height: 2,
			top: -20,
			content: "''",
		},
		"&:hover": {
			color: theme.colors.active,
			transition: "all 0.3s ease",
			"&:before": {
				width: "100%",
				transition: "all 0.3s ease",
				background: theme.colors.active,
			},
		},
	}),
);
