import { ComponentStory, ComponentMeta } from '@storybook/react';

import ArticleRating from './ArticleRating';

export default {
  title: 'shared/ArticleRating',
  component: ArticleRating,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof ArticleRating>;

const Template: ComponentStory<typeof ArticleRating> = (args) => (
  <ArticleRating {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
