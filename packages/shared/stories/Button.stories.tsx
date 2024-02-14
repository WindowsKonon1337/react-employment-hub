import { Meta, StoryObj } from "@storybook/react";

import { Button, ButtonProps } from "../src/components/Button";

const meta: Meta<ButtonProps> = {
	component: Button,
};

export default meta;
type Story = StoryObj<ButtonProps>;

export const Primary: Story = {
	args: {
		children: "test",
	},
};

export const Disabled: Story = {
	args: {
		children: "test",
		isDisabled: true,
	},
};
