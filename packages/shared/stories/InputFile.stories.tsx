import { Meta, StoryObj } from "@storybook/react";

import { InputImageFile, InputImageFileProps } from "../src/components/InputImageFile";

const meta: Meta<InputImageFileProps> = {
	component: InputImageFile,
};

export default meta;
type Story = StoryObj<InputImageFileProps>;

export const WithoutImgPath: Story = {
	args: {
		imgPath: "test",
	},
};

export const WithImgPath: Story = {
	args: {
		imgPath:
			"https://images.unsplash.com/photo-1472791108553-c9405341e398?q=80&w=2137&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
};
