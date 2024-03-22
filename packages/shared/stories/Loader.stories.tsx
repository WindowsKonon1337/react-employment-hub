import type { Meta, StoryObj } from "@storybook/react";

import { Loader } from "../src/components";

const meta: Meta<unknown> = {
	component: Loader,
};

export default meta;
type Story = StoryObj<unknown>;

export const Spinner: Story = {};
