import styled, { css } from "styled-components";

import { Notification } from "../../components/Notification";

export const FormBlock = styled("form")({
	paddingTop: 20,
	display: "flex",
	gap: 30,
	flexDirection: "column",
});

export const RowContainer = styled("div")({
	display: "flex",
	gap: 30,
});

export const ProfileImg = styled("div")(({ theme }) =>
	css({
		width: 150,
		height: 150,
		borderRadius: "100%",
		cursor: "pointer",
		background: "transparent",
		border: "1px solid",
		borderColor: theme.colors.secondary,
		transition: "all 0.2s ease",
		"&:hover": {
			backgroundColor: theme.colors.secondaryLight,
		},
	}),
);

export const NotificationBlock = styled(Notification)({
	position: "absolute",
	width: "100%",
	left: "0",
	bottom: "0",
});
