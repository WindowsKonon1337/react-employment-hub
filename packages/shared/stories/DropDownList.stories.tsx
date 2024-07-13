import type { Meta, StoryObj } from "@storybook/react";

import { DropDownListProps, DropDownList } from "../src/components";

const meta: Meta<DropDownListProps> = {
	component: DropDownList,
};

export default meta;
type Story = StoryObj<DropDownListProps>;

const dropDownList = [
	{ title: "test1", value: "test1" },
	{ title: "test1", value: "test1" },
	{ title: "test1", value: "test1" },
];

export const WithLists: Story = {
	args: {
		title: dropDownList[0].title,
		listValues: dropDownList,
	},
};
