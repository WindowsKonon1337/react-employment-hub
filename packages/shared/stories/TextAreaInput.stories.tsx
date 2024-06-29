import { Meta, StoryObj } from "@storybook/react";

import { TextAreaInputProps, TexAreaInput } from "../src/components";

const meta: Meta<TextAreaInputProps> = {
	component: TexAreaInput,
};

export default meta;
type Story = StoryObj<typeof TexAreaInput>;

export const TexAreaInputDefault: Story = {
	args: {
		placeholder: "Test",
		label: "test",
	},
};

export const TexAreaInputError: Story = {
	args: {
		placeholder: "Test",
		label: "test",
		errorText: "Is error",
	},
};
