import styled, { css } from "styled-components";
import { TextInput } from "@packages/shared/src/components";

export const FormBlock = styled("div")({
	display: "flex",
	flexDirection: "column",
	gap: 15,
});

export const BtnBlcok = styled("div")({
	display: "flex",
	gap: 10,
});

export const TitleInput = styled(TextInput)(() =>
	css({
		"& > input": {
			fontSize: 18,
			fontWeight: "bold",
		},
	}),
);

export const InputBlock = styled("div")(({ theme }) =>
	css({
		display: "flex",
		gap: 20,
		[`${theme.media.medium}`]: {
			flexWrap: "wrap",
		},
	}),
);
