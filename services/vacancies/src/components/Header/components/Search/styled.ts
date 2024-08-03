import styled, { css } from "styled-components";

import { Button } from "@packages/shared/src/components";

export const SearchWrapper = styled("div")(({ theme }) =>
	css({
		display: "grid",
		gridTemplateColumns: "1fr 1fr 120px",
		padding: 10,
		gap: 30,
		background: theme.colors.main,
		borderRadius: 30,
		[`${theme.media.medium}`]: {
			gridTemplateColumns: "1fr",
		},
	}),
);

export const InputWrapper = styled("div")(({ theme }) =>
	css({
		position: "relative",
		display: "flex",
		gap: 10,
		alignItems: "center",
		"&:nth-child(1)": {
			"&:after": {
				position: "absolute",
				content: "''",
				right: 0,
				background: theme.colors.secondaryLight,
				width: 1,
				height: "100%",
			},
		},
		[`${theme.media.medium}`]: {
			"&:nth-child(1)": {
				"&:after": {
					width: "100%",
					height: 1,
					bottom: -15,
				},
			},
		},
	}),
);

export const Input = styled("input")(({ theme }) =>
	css({
		height: 30,
		width: "100%",
		outline: "none",
		border: "none",
		fontSize: 18,
		"&:placeholder": {
			color: theme.colors.secondaryLight,
		},
	}),
);

export const SearchBtn = styled(Button)({
	borderRadius: 20,
});
