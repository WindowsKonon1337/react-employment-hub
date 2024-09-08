import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const AVATAR_WIDTH = 80;
const AVATAR_HEIGHT = 80;
const COMPANY_CONTAINER_WIDTH = 580;

// базово вынести в либу
export const CompanyContainer = styled(Link)(({ theme }) =>
	css({
		textDecoration: "none",
		width: "100%",
		maxWidth: COMPANY_CONTAINER_WIDTH,
		display: "flex",
		flexDirection: "column",
		gap: 20,
		border: "1px solid",
		borderColor: theme.colors.secondary,
		padding: 20,
		cursor: "pointer",
		transition: "all 0.5s ease",
		"&:hover": {
			transition: "all 0.5s ease",
			borderColor: theme.colors.blue,
			boxShadow: "0 0 10px 5px rgba(221, 221, 221, 1)",
		},
	}),
);

export const CompanyAvatar = styled("img")({
	width: AVATAR_WIDTH,
	height: AVATAR_HEIGHT,
	borderRadius: "100%",
});

export const TopContent = styled("div")({
	display: "grid",
	gridTemplateColumns: `${AVATAR_WIDTH}px 1fr 25px`,
	alignItems: "flex-start",
	gap: 10,
});

export const RightSideContent = styled("div")({
	display: "flex",
	gap: 8,
	flexDirection: "column",
});

export const ContentRow = styled("div")({
	display: "flex",
	flexWrap: "wrap",
	gap: 20,
});

// вынести в либу
export const Tag = styled("div")(({ theme }) =>
	css({
		padding: 5,
		border: "1px solid",
		fontSize: 16,
		color: theme.colors.violet,
	}),
);

// вынести в либу
export const Text = styled("div")(({ theme }) =>
	css({
		fontSize: 16,
		color: theme.colors.secondary,
	}),
);

// вынести в либу как IconBtn
export const DeleteBtn = styled("button")({
	width: 25,
	height: 25,
	zIndex: 10,
	cursor: "pointer",
	border: "none",
	background: "transparent",
});
