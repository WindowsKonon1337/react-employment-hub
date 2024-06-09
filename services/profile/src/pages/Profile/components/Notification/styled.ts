import styled, { css } from "styled-components";

import { Title } from "@packages/shared/src/components";

export const NotificationBlock = styled("div")(({ theme }) =>
	css({
		display: "flex",
		padding: 10,
		justifyContent: "space-between",
		backgroundColor: theme.colors.secondaryLight,
	}),
);

export const TitleBlock = styled(Title)(({ theme }) =>
	css({
		color: theme.colors.main,
	}),
);

export const BtnBlock = styled("div")({
	display: "flex",
	gap: 15,
});
