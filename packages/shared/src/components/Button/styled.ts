import styled from "styled-components";

export const ButtonWrapper = styled("button")(({ theme }) => ({
	minWidth: 120,
	fontSize: 15,
	fontWeight: "bold",
	border: "none",
	cursor: "pointer",
	borderRadius: 8,
	padding: "10px 20px",
	color: theme.colors.main,
	background: theme.colors.active,
	transition: "all 0.3s ease",
	"&:hover": {
		transition: "all 0.3s ease",
		background: theme.colors.activeHover,
	},
	"&:disabled": {
		transition: "all 0.3s ease",
		cursor: "no-drop",
		background: theme.colors.secondary,
	},
}));
