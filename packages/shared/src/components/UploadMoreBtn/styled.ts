import styled, { css } from "styled-components";

export const UpalodBtn = styled("button")(({ theme: { colors } }) =>
	css({
		textAlign: "center",
		width: "100%",
		border: "none",
		textDecoration: "none",
		borderRadius: 8,
		color: colors.secondary,
		cursor: "pointer",
		background: colors.main,
		fontSize: 15,
		padding: 5,
		transition: "all 0.5s ease",
		"&:hover": {
			transition: "all 0.5s ease",
			color: colors.main,
			background: colors.activeHover,
		},
	}),
);
