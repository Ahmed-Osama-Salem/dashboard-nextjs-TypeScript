import { configureStore } from '@reduxjs/toolkit';
import {
  useDispatch as useDispatchBase,
  useSelector as useSelectorBase,
} from 'react-redux';

// eslint-disable-next-line import/no-named-as-default
import darkThemeSlice from './slice/darkThemeSlice';
// import darkThemeSlice from './slice/darkThemeSlice';
// eslint-disable-next-line import/no-named-as-default
import filterSlice from './slice/filterSlice';
// eslint-disable-next-line import/no-named-as-default
import modalSlice from './slice/modalSlice';
// eslint-disable-next-line import/no-named-as-default
import tableDataSlice from './slice/tableDataSlice';
// eslint-disable-next-line import/no-named-as-default
import userDataSlice from './slice/userDataSlice';

/**
 * Creates a store and includes all the slices as reducers.
 */
export const store = configureStore({
  reducer: {
    tableData: tableDataSlice,
    modal: modalSlice,
    filter: filterSlice,
    theme: darkThemeSlice,
    userData: userDataSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: { users: UsersState}
type AppDispatch = typeof store.dispatch;

// Since we use typescript, lets utilize `useDispatch`
export const useDispatch = () => useDispatchBase<AppDispatch>();

// And utilize `useSelector`
export const useSelector = <TSelected = unknown>(
  selector: (state: RootState) => TSelected
): TSelected => useSelectorBase<RootState, TSelected>(selector);
