import styled, { css } from "styled-components";
import { getStylesForTemplateColums } from "./utils/getStylesForTemplateColums";

export const VacanciesContainer = styled("div")<{ $itemsInRow: number }>(({ $itemsInRow }) =>
	css({
		display: "grid",
		gridTemplateColumns: getStylesForTemplateColums($itemsInRow),
		flexDirection: "column",
		alignItems: "center",
		gap: 20,
		marginBottom: 20,
	}),
);
