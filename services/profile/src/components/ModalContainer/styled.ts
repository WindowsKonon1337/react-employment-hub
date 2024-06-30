import styled, { css } from "styled-components";

const MODAL_MIN_WIDTH = 250;

export const ModalWrapper = styled("div")<{ $isOpen: boolean }>(({ $isOpen, theme }) =>
	css({
		border: "1px solid",
		borderColor: theme.colors.secondary,
		borderRadius: 8,
		padding: 20,
		display: $isOpen ? "flex" : "none",
		minWidth: MODAL_MIN_WIDTH,
		position: "fixed",
		top: "35%",
		left: "50%",
		transform: "translate(-50%)",
		flexDirection: "column",
	}),
);

export const ContentBlock = styled("div")({
	display: "flex",
	alignItems: "column",
});

export const CloseBtn = styled("button")({
	position: "absolute",
	border: "none",
	textDecoration: "none",
	background: "transparent",
	cursor: "pointer",
	right: 10,
	top: 5,
});
