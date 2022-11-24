import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ListBox } from './ListBox';

export default {
  title: 'shared/ListBox',
  component: ListBox,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: 100 }}>
        <Story />
      </div>
    ),
  ],
  args: {
    to: '/',
  },
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => (
  <ListBox {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  value: '123',
  items: [
    { content: '32423432432', value: '123' },
    { content: '32423432432', value: '123' },
    { content: '32423432432', value: '123' },
  ],
};

export const TopLeft = Template.bind({});
TopLeft.args = {
  direction: 'top left',
  value: '123',
  items: [
    { content: '32423432432', value: '123' },
    { content: '32423432432', value: '123' },
    { content: '32423432432', value: '123' },
  ],
};

export const TopRight = Template.bind({});
TopRight.args = {
  direction: 'top right',
  value: '123',
  items: [
    { content: '32423432432', value: '123' },
    { content: '32423432432', value: '123' },
    { content: '32423432432', value: '123' },
  ],
};

export const BottomLeft = Template.bind({});
BottomLeft.args = {
  direction: 'bottom left',
  value: '123',
  items: [
    { content: '32423432432', value: '123' },
    { content: '32423432432', value: '123' },
    { content: '32423432432', value: '123' },
  ],
};

export const BottomRight = Template.bind({});
BottomRight.args = {
  direction: 'bottom right',
  value: '123',
  items: [
    { content: '32423432432', value: '123' },
    { content: '32423432432', value: '123' },
    { content: '32423432432', value: '123' },
  ],
};
