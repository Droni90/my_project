import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider';
import { StoreDecorator } from '@/shared/config/storybook/storeDecorator/storeDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/themeDecorator/themeDecorator';
import { CountryEnum } from '@/entities/Country';
import { CurrencyEnum } from '@/entities/Currency';
import ProfilePage from './ProfilePage';

export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => (
  <ProfilePage {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [
  StoreDecorator({
    profile: {
      form: {
        username: 'admin',
        age: 22,
        country: CountryEnum.RUSSIA,
        lastname: 'Azaza',
        first: 'first',
        city: 'Moscow',
        currency: CurrencyEnum.USD,
      },
    },
  }),
];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    profile: {
      form: {
        username: 'admin',
        age: 22,
        country: CountryEnum.RUSSIA,
        lastname: 'Azaza',
        first: 'first',
        city: 'Moscow',
        currency: CurrencyEnum.USD,
      },
    },
  }),
];
