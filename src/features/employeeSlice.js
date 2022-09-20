import { createSlice } from "@reduxjs/toolkit";

const empSlice = createSlice({
  name: "employee",
  initialState: {
    data: null,
    error: null,
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setData, setError } = empSlice.actions;
export default empSlice.reducer;

export const selectData = (state) => state.employeeSlice.data;
export const selectError = (state) => state.employeeSlice.error;
