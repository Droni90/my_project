/* eslint-disable indent */
import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { profileReducer } from 'entities/Profile';
import { loginReducer } from 'features/AuthByUsername/model/slice/LoginSlice';
import { ReducerList } from 'shared/lib/components/DinamicModuleLoader/DinamicModuleLoader';

const defaultReducers: ReducerList = {
  loginForm: loginReducer,
  profile: profileReducer,
};

export const StoreDecorator =
  (state: DeepPartial<StateSchema>, asyncReducers?: ReducerList) =>
  (StoryComponent: Story) =>
    (
      <StoreProvider
        initialState={state}
        asyncReducers={{ ...defaultReducers, ...asyncReducers }}
      >
        <StoryComponent />
      </StoreProvider>
    );
