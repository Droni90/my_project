import { Reducer } from '@reduxjs/toolkit';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { FC, useEffect } from 'react';
import { useStore } from 'react-redux';

export type ReducerList = {
  [name in StateSchemaKey]?: Reducer;
};

type ReducerListEntry = [StateSchemaKey, Reducer];

interface DynamicModuleLoaderProps {
  reducers: ReducerList;
  removeAfterUnmount?: boolean;
}
export const DinamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
  const { children, reducers, removeAfterUnmount } = props;
  const store = useStore() as ReduxStoreWithManager;

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]: ReducerListEntry) => {
      store.reducerManager.add(name, reducer);
    });
    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name]: ReducerListEntry) => {
          store.reducerManager.remove(name);
        });
      }
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
};
