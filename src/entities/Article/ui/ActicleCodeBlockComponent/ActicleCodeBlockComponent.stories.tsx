import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ActicleCodeBlockComponent } from './ActicleCodeBlockComponent';

export default {
  title: 'shared/ActicleCodeBlockComponent',
  component: ActicleCodeBlockComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof ActicleCodeBlockComponent>;

const Template: ComponentStory<typeof ActicleCodeBlockComponent> = (args) => (
  <ActicleCodeBlockComponent {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
