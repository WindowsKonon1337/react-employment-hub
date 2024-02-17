import type { Meta, StoryObj } from "@storybook/react";

import { Title, TitleProps } from "../src/components";

const meta: Meta<TitleProps> = {
	component: Title,
};

export default meta;
type Story = StoryObj<TitleProps>;

export const Primary: Story = {
	args: {
		children: "test",
		size: "m",
	},
};

export const SmallSize: Story = {
	args: {
		children: "test",
		size: "s",
	},
};

export const LargeSize: Story = {
	args: {
		children: "test",
		size: "l",
	},
};
