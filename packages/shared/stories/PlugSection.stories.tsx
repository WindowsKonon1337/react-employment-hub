import type { Meta, StoryObj } from "@storybook/react";

import { PlugSection, PlugSectionProps } from "../src/components";

const meta: Meta<PlugSectionProps> = {
	component: PlugSection,
};

export default meta;
type Story = StoryObj<PlugSectionProps>;

export const Default: Story = {
	args: {
		typePlug: "emptyData",
	},
};

export const Error: Story = {
	args: {
		typePlug: "error",
	},
};

export const PlugWithCustomText: Story = {
	args: {
		typePlug: "emptyData",
		plugText: "custom text",
	},
};
