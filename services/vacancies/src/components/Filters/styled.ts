import styled, { css } from "styled-components";

export const FiltersWrapper = styled("div")<{ $isOpen?: boolean }>(({ theme, $isOpen }) =>
	css({
		[`${theme.media.medium}`]: {
			position: "fixed",
			width: "100%",
			top: 0,
			zIndex: $isOpen ? 100 : 0,
			left: 0,
			height: "100%",
			background: $isOpen ? "rgba(0,0,0,0.5)" : "transparent",
		},
	}),
);

export const FiltersContentWrapper = styled("div")<{ $isOpen?: boolean }>(({ theme, $isOpen }) =>
	css({
		zIndex: 1000,
		top: 0,
		left: 0,
		height: "100%",
		transition: "all 0.3s ease",
		width: 300,
		overflow: "auto",
		background: theme.colors.main,
		[`${theme.media.medium}`]: {
			padding: 10,
			position: "fixed",
			transition: "all 0.3s ease",
			left: 0,
			transform: `translateX(${$isOpen ? "0px" : "-1000px"})`,
		},
	}),
);

export const FiltersIconWrapper = styled("div")(({ theme }) =>
	css({
		display: "none",
		[`${theme.media.medium}`]: {
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			position: "fixed",
			width: 35,
			height: 35,
			left: 0,
			top: "50%",
			background: theme.colors.secondaryLight,
			borderTopRightRadius: "100%",
			borderBottomRightRadius: "100%",
		},
	}),
);

export const FiltersCloseWrapper = styled("div")(({ theme }) =>
	css({
		display: "none",
		[`${theme.media.medium}`]: {
			display: "block",
			position: "absolute",
			right: 10,
			top: 10,
		},
	}),
);
