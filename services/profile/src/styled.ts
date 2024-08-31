import styled, { css } from "styled-components";

import BarsMenu from "public/burger-menu/bars.svg";
import CloseIcon from "public/burger-menu/close.svg";

export const ProfileWrapper = styled("div")(({ theme }) =>
	css({
		position: "relative",
		paddingTop: 50,
		height: "100vh",
		display: "grid",
		gridTemplateColumns: "320px 1fr",
		[`${theme.media.medium}`]: {
			gridTemplateColumns: "1fr",
		},
	}),
);

export const SideMenuWrapper = styled("div")<{ $isOpen: boolean }>(({ theme, $isOpen }) =>
	css({
		[`${theme.media.medium}`]: {
			zIndex: 100,
			height: "100vh",
			position: "fixed",
			width: 320,
			top: 0,
			background: theme.colors.main,
			transform: `translateX(${$isOpen ? 0 : -1000}px)`,
			transition: "all 0.3s ease",
		},
	}),
);

export const BarsMenuBlock = styled(BarsMenu)(({ theme }) =>
	css({
		cursor: "pointer",
		display: "none",
		position: "absolute",
		zIndex: 100,
		left: 10,
		top: 80,
		[`${theme.media.medium}`]: {
			display: "block",
		},
	}),
);

export const CloseBuregerMenuBtn = styled(CloseIcon)(({ theme }) =>
	css({
		cursor: "pointer",
		display: "none",
		[`${theme.media.medium}`]: {
			display: "block",
			position: "absolute",
			right: 10,
			top: 10,
		},
	}),
);
