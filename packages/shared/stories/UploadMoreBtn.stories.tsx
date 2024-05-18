import type { Meta, StoryObj } from "@storybook/react";

import { UplaodMoreBtn, UploadMoreBtnProps } from "../src/components";

const meta: Meta<UploadMoreBtnProps> = {
	component: UplaodMoreBtn,
};

export default meta;
type Story = StoryObj<UploadMoreBtnProps>;

export const Default: Story = {
	args: {
		handleClick: () => null,
	},
};

export const WithTitle: Story = {
	args: {
		handleClick: () => null,
		title: "Test title",
	},
};
