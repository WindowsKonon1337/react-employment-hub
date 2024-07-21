import styled, { css } from "styled-components";

export const TextContainer = styled("div")(({ theme }) =>
	css({
		fontSize: 17,
		color: theme.colors.secondary,
	}),
);
