import styled, { css } from "styled-components";

export const TagWrapper = styled("div")(({ theme }) =>
	css({
		fontSize: 15,
		height: 25,
		borderRadius: 15,
		padding: "2px 8px",
		background: theme.colors.blue,
		color: theme.colors.main,
	}),
);
