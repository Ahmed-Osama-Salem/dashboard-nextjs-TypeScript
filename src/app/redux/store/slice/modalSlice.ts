import type { Draft, PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

/**
 * Default state object with initial values.
 */
const initialState: { isTouched: boolean; isUpdateModal: boolean } = {
  isTouched: false,
  isUpdateModal: false,
};

/**
 * Create a slice as a reducer containing actions.
 *
 * In this example actions are included in the slice. It is fine and can be
 * changed based on your needs.
 */
export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setIsTouched: (
      state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState.isTouched>
    ) => {
      // eslint-disable-next-line no-param-reassign
      state.isTouched = action.payload;
    },
    setIsUpdateModal: (
      state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState.isUpdateModal>
    ) => {
      // eslint-disable-next-line no-param-reassign
      state.isUpdateModal = action.payload;
    },
  },
});

// A small helper of user state for `useSelector` function.
// export const getUserState = (state: { user: UserState }) => state.user;

// Exports all actions
export const { setIsTouched, setIsUpdateModal } = modalSlice.actions;

export default modalSlice.reducer;
