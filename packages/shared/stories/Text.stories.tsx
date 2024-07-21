import type { Meta, StoryObj } from "@storybook/react";

import { Text, TextProps } from "../src/components";

const meta: Meta<TextProps> = {
	component: Text,
};

export default meta;
type Story = StoryObj<TextProps>;

export const Primary: Story = {
	args: {
		children: "test",
	},
};
