import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Theme } from "app/providers/ThemeProvider";
import { PageError } from "./PageError";
import { ThemeDecorator } from "shared/config/storybook/themeDecorator/themeDecorator";

export default {
  title: "widget/PageError",
  component: PageError,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof PageError>;

const Template: ComponentStory<typeof PageError> = (args) => (
  <PageError {...args} />
);

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];