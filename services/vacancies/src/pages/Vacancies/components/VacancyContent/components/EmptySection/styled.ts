import styled from "styled-components";
import { Text } from "@packages/shared/src/components";

export const EmptyDataPlug = styled("div")({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
});

export const PlugText = styled(Text)({
	fontSize: 22,
	textAlign: "center",
});
