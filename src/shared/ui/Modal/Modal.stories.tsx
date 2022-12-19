import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/themeDecorator/themeDecorator';

import { Modal } from './Modal';
import { Theme } from '@/shared/const/theme';

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Light = Template.bind({});
Light.args = {
  children: 'TEXT',
  isOpen: true,
};

export const Dark = Template.bind({});
Dark.args = {
  children: 'TEXT',
  isOpen: true,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
