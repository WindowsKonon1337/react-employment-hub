import styled from "styled-components";

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

export const NotificationBlock = styled(Notification)({
	position: "fixed",
	width: "100%",
	left: "0",
	bottom: "0",
});
