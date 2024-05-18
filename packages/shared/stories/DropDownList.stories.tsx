import type { Meta, StoryObj } from "@storybook/react";

import { DropDownListProps, DropDownList } from "../src/components";

const meta: Meta<DropDownListProps> = {
	component: DropDownList,
};

export default meta;
type Story = StoryObj<DropDownListProps>;

const dropDownList = ["test1", "test2", "test3"];

export const WithLists: Story = {
	args: {
		title: dropDownList[0],
		listValues: dropDownList,
	},
};
