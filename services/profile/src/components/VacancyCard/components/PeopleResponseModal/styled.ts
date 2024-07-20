import styled from "styled-components";
import { Button } from "@packages/shared/src/components";

import { ModalContainer } from "@/components/ModalContainer";

const HEIGHT_CONTENT_BLOCK = 450;
const MAX_WIDTH_CONTENT_BLOCK = 550;

export const ModalWrapper = styled(ModalContainer)({
	width: "100%",
	display: "flex",
	flexDirection: "column",
	maxWidth: MAX_WIDTH_CONTENT_BLOCK,
});

export const ContentBlock = styled("div")({
	marginTop: 20,
	display: "flex",
	maxHeight: HEIGHT_CONTENT_BLOCK,
	overflow: "auto",
	flexDirection: "column",
});

export const ContainerBlock = styled("div")({
	display: "flex",
	gap: 15,
	justifyContent: "space-between",
});

export const Btn = styled(Button)({
	width: 60,
	height: 40,
	"&:not(:last-child)": {
		marginRight: 10,
	},
});
