import { createSlice } from "@reduxjs/toolkit";
// import type { RootState } from '../store'
import { fetchList } from "../thunk/communication";

// Define a type for the slice state
interface CounterState {
  data: Array<any>;
  loading: string;
}

// Define the initial state using that type
const initialState: CounterState = {
  data: [],
  loading: "idle",
};

export const communicationSlice = createSlice({
  name: "communicationSentences",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,

  reducers: {
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(fetchList.pending, (state) => {
        state.loading = "loading";
      })
      .addCase(fetchList.fulfilled, (state, action) => {
        state.loading = "idle";
        state.data = action.payload.rows;
      });
  },
});

export const actions = communicationSlice.actions


export default communicationSlice.reducer;
