import type { Draft, PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

/**
 * Default state object with initial values.
 */
const initialState: {
  routeLoading: boolean;
} = {
  routeLoading: false,
};

/**
 * Create a slice as a reducer containing actions.
 *
 * In this example actions are included in the slice. It is fine and can be
 * changed based on your needs.
 */
export const spinnerSlice = createSlice({
  name: 'spinner',
  initialState,
  reducers: {
    setRouteLoading: (
      state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState.routeLoading>
    ) => {
      // eslint-disable-next-line no-param-reassign
      state.routeLoading = action.payload;
    },
  },
});

// A small helper of user state for `useSelector` function.
// export const getUserState = (state: { user: UserState }) => state.user;

// Exports all actions
export const { setRouteLoading } = spinnerSlice.actions;

export default spinnerSlice.reducer;
