import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/storeDecorator/storeDecorator';
import { Normal } from 'features/ArticleRecommendationsList/ui/ArticleRecommendationsList/ArticleRecommendationsList.stories';
import { ArticleDetailsComments } from './ArticleDetailsComments';

export default {
  title: 'pages/ArticleDetailsPage/ArticleDetailsComments',
  component: ArticleDetailsComments,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof ArticleDetailsComments>;

const Template: ComponentStory<typeof ArticleDetailsComments> = (args) => (
  <ArticleDetailsComments {...args} />
);

export const Primary = Template.bind({});
Primary.args = { id: '1' };
Primary.decorators = [StoreDecorator({})];
