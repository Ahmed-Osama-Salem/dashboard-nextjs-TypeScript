import type { Draft, PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

/**
 * Default state object with initial values.
 */
const initialState: { theme: string } = {
  theme: typeof window !== 'undefined' ? localStorage.theme : 'light',
  // theme: '',
};

/**
 * Create a slice as a reducer containing actions.
 *
 * In this example actions are included in the slice. It is fine and can be
 * changed based on your needs.
 */
export const darkThemeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (
      state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState.theme>
    ) => {
      // eslint-disable-next-line no-param-reassign
      state.theme = action.payload;
    },
  },
});

// A small helper of user state for `useSelector` function.
// export const getUserState = (state: { user: UserState }) => state.user;

// Exports all actions
export const { setTheme } = darkThemeSlice.actions;

export default darkThemeSlice.reducer;
