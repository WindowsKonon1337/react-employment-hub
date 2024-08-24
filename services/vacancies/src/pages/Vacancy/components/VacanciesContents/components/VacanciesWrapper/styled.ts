import styled, { css } from "styled-components";

export const VacanciesContentsContainer = styled("div")<{ $isOpen: boolean }>(
	({ theme, $isOpen }) =>
		css({
			postion: "relative",
			top: -50,
			padding: "0 15px",
			position: "absolute",
			transform: `translateX(${$isOpen ? "-30px" : "-1000px"})`,
			transition: "all 0.2s ease",
			width: 320,
			background: theme.colors.main,
			zIndex: 1000,
		}),
);

export const CloseVacancyIcon = styled("div")({
	display: "block",
	position: "absolute",
	right: 0,
	top: 15,
});

export const VacanciesContentsIconBlock = styled("div")(({ theme }) =>
	css({
		top: "50%",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		position: "fixed",
		width: 35,
		height: 35,
		left: 0,
		background: theme.colors.secondaryLight,
		borderTopRightRadius: "100%",
		borderBottomRightRadius: "100%",
	}),
);
