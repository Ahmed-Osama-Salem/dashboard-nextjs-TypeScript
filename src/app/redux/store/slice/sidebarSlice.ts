import type { Draft, PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { UserState } from './userSlice';

export interface ISidebarState {
  isOpen: boolean;
}

/**
 * Default state object with initial values.
 */
const initialState: ISidebarState = {
  isOpen: false,
} as const;

/**
 * Create a slice as a reducer containing actions.
 *
 * In this example actions are included in the slice. It is fine and can be
 * changed based on your needs.
 */
export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    setIsOpen: (
      state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState.isOpen>
    ) => {
      // eslint-disable-next-line no-param-reassign
      state.isOpen = action.payload;
    },
  },
});

// A small helper of user state for `useSelector` function.
export const getUserState = (state: { user: UserState }) => state.user;

// Exports all actions
export const { setIsOpen } = sidebarSlice.actions;

export default sidebarSlice.reducer;
