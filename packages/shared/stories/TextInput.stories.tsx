import type { Meta, StoryObj } from "@storybook/react";

import { TextInput, TextInputProps } from "../src/components";

const meta: Meta<TextInputProps> = {
	component: TextInput,
};

export default meta;
type Story = StoryObj<TextInputProps>;

export const Primary: Story = {
	args: {
		value: "test",
		label: "Label",
	},
};

export const WithError: Story = {
	args: {
		value: "test",
		label: "Label",
		isNotValid: true,
		errorText: "text error",
	},
};
