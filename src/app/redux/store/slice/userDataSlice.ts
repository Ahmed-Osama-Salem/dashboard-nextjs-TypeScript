import type { Draft, PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export interface IUserData {
  email: string;
  name: string;
  job: string;
  phone: string;
  image: string;
  role?: string;
}

/**
 * Default state object with initial values.
 */
const initialState: { userData: IUserData } = {
  userData: {
    name: 'ahmed',
    email: 'sulhadin@gmail.com',
    job: 'dev',
    phone: '01112',
    image: 'fs',
    role: 'problem',
  },
} as const;

/**
 * Create a slice as a reducer containing actions.
 *
 * In this example actions are included in the slice. It is fine and can be
 * changed based on your needs.
 */
export const userDataSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    setUserData: (
      state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState.userData>
    ) => {
      // eslint-disable-next-line no-param-reassign
      state.userData = action.payload;
    },
  },
});

// A small helper of user state for `useSelector` function.
// export const getUserState = (state: { user: UserState }) => state.user;

// Exports all actionsAC
export const { setUserData } = userDataSlice.actions;

export default userDataSlice.reducer;
