import type { Draft, PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { ITableApiData } from '@/app/interface/tableApiData';

/**
 * Default state object with initial values.
 */
const initialState: ITableApiData[] | any = {
  table: [
    {
      __v: 0,
      _id: '',
      time: '',
      allText: {
        dateNow: '',
        time: '',
        rkmElw7da: '',
        elbnd: '',
        topics: '',
        contractType: '',
        techNumber: '',
        mosadNumber: '',
        from: '',
        to: '',
        noteAdd: '',
        kmiatMon: '',
        tnfizState: '',
        angaz: '',
        notes: '',
        twqi3: '',
      },
      text: [
        {
          text1: '',
          text2: '',
        },
      ],
      textMosad: [
        {
          mosadName: '',
          mosadJob: '',
        },
      ],
    },
  ],
  cellID: [],
};

/**
 * Create a slice as a reducer containing actions.
 *
 * In this example actions are included in the slice. It is fine and can be
 * changed based on your needs.
 */
export const tableDataSlice = createSlice({
  name: 'tableData',
  initialState,
  reducers: {
    setTableData: (
      state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState.table>
    ) => {
      // eslint-disable-next-line no-param-reassign
      state.table = action.payload;
    },
    removeCellTable: (
      state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState.table>
    ) => {
      // eslint-disable-next-line no-param-reassign
      state.table = state.table.filter(
        // eslint-disable-next-line no-underscore-dangle
        (table: { _id: string }) => table._id !== action.payload
      );
    },
    setCellID: (
      state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState.table>
    ) => {
      // eslint-disable-next-line no-param-reassign
      state.cellID = action.payload;
    },
    pushTableData: (
      state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState.table>
    ) => {
      // eslint-disable-next-line no-param-reassign
      // state.table = state.table.push(...state.table, action.payload);
      return {
        ...state,
        table: [...state.table, action.payload],
      };
    },
  },
});

// A small helper of user state for `useSelector` function.
// export const getUserState = (state: { user: UserState }) => state.user;

// Exports all actions
export const { setTableData, removeCellTable, setCellID, pushTableData } =
  tableDataSlice.actions;

export default tableDataSlice.reducer;
