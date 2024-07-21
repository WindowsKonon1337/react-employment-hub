import styled from "styled-components";

import { Button } from "@packages/shared/src/components";

export const FormWrapper = styled("form")({
	display: "flex",
	flexDirection: "column",
	gap: 25,
});

export const SubmitButton = styled(Button)({
	width: "100%",
});
