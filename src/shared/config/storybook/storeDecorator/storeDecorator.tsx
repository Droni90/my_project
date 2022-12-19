import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
// eslint-disable-next-line plugin-path-checker/layer-imports
import { loginReducer } from '@/features/AuthByUsername';
import { ReducerList } from '@/shared/lib/components/DinamicModuleLoader/DynamicModuleLoader';
// eslint-disable-next-line plugin-path-checker/layer-imports
import { articleDetailsReducer } from '@/entities/Article';
// eslint-disable-next-line plugin-path-checker/layer-imports
import { addCommentFormReducer } from '@/features/addCommentForm';
// eslint-disable-next-line plugin-path-checker/layer-imports
import { articleDetailsPageReducer } from '@/pages/ArticleDetailsPage';
// eslint-disable-next-line plugin-path-checker/layer-imports
import { profileReducer } from '@/features/EditableProfileCard';

const defaultReducers: ReducerList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  addCommentForm: addCommentFormReducer,
  articleDetailsPage: articleDetailsPageReducer,
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
