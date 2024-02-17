import styled from "styled-components";

import { Button, TextInput } from "@packages/shared/src/components";

export const Input = styled(TextInput)({
	width: 334,
});

export const FormWrapper = styled("form")({
	display: "flex",
	flexDirection: "column",
	gap: 25,
});

export const SubmitButton = styled(Button)({
	width: 350,
});
