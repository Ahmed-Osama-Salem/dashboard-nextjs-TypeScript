import { configureStore } from '@reduxjs/toolkit';
import {
  useDispatch as useDispatchBase,
  useSelector as useSelectorBase,
} from 'react-redux';

// eslint-disable-next-line import/no-named-as-default
import modalSlice from './slice/modalSlice';
// eslint-disable-next-line import/no-named-as-default
import sidebarSlice from './slice/sidebarSlice';
// eslint-disable-next-line import/no-named-as-default
import tableDataSlice from './slice/tableDataSlice';

/**
 * Creates a store and includes all the slices as reducers.
 */
export const store = configureStore({
  reducer: {
    sidebar: sidebarSlice,
    tableData: tableDataSlice,
    modal: modalSlice,
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
