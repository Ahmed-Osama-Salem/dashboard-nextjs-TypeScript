import type { Draft, PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

/**
 * Default state object with initial values.
 */
const initialState: { initialDateValue: string; selectedDateValue: string } = {
  initialDateValue: '',
  selectedDateValue: '',
};

/**
 * Create a slice as a reducer containing actions.
 *
 * In this example actions are included in the slice. It is fine and can be
 * changed based on your needs.
 */
export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setInitialDateValue: (
      state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState.initialDateValue>
    ) => {
      // eslint-disable-next-line no-param-reassign
      state.initialDateValue = action.payload;
    },
    SetSelectedDate: (
      state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState.selectedDateValue>
    ) => {
      // eslint-disable-next-line no-param-reassign
      state.selectedDateValue = action.payload;
    },
  },
});

// A small helper of user state for `useSelector` function.
// export const getUserState = (state: { user: UserState }) => state.user;

// Exports all actions
export const { setInitialDateValue, SetSelectedDate } = filterSlice.actions;

export default filterSlice.reducer;
