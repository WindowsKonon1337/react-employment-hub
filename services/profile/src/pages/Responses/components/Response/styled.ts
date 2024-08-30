import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

import { CARD_WIDTH, VacancyCard } from "@/components";

import { VacancyStatus } from "./types";
import { getResponseStatusColor } from "./utils";

export const VacancyContainer = styled(Link)({
	maxWidth: CARD_WIDTH,
	width: "100%",
	textDecoration: "none",
	outline: "none",
	display: "block",
});

export const ResponseBlock = styled(VacancyCard)<{ $status: VacancyStatus }>(({ $status, theme }) =>
	css({
		border: `1px solid ${getResponseStatusColor($status, theme)}`,
	}),
);

export const Subtitle = styled("div")<{ $status: VacancyStatus }>(({ theme, $status }) =>
	css({
		textTransform: "capitalize",
		marginBottom: 8,
		fontSize: 17,
		color: getResponseStatusColor($status, theme),
	}),
);
