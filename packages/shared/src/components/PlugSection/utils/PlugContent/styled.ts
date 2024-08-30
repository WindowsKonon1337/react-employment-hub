import styled from "styled-components";

import { Text } from "../../../Text";

export const PlugContentBlock = styled("div")({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	gap: 20,
});

export const TextPlug = styled(Text)({
	fontSize: 20,
});
