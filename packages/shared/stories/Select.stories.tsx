import type { Meta, StoryObj } from "@storybook/react";

import { Select, SelectProps } from "../src/components";

const meta: Meta<SelectProps> = {
	component: Select,
};

export default meta;
type Story = StoryObj<typeof Select>;

export const SingleSelect: Story = {
	args: {
		label: "Its label",
		data: [
			{ label: "test", value: "test" },
			{ label: "test2", value: "test2" },
		],
	},
};
