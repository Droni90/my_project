import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticleInfiniteList } from './ArticleInfiniteList';

export default {
  title: 'pages/ArticlesPage/ArticleInfiniteList',
  component: ArticleInfiniteList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof ArticleInfiniteList>;

const Template: ComponentStory<typeof ArticleInfiniteList> = (args) => (
  <ArticleInfiniteList {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
