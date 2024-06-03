import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export enum UpdateProcessStatus {
  Idle,
  Loading,
  Success,
  Error,
}

export interface UpdateProcessState {
  status: UpdateProcessStatus;
  message: string;
}

const initialState: UpdateProcessState = {
  status: UpdateProcessStatus.Idle,
  message: "",
};

export const updateProccessSlice = createSlice({
  name: "updateProcess",
  initialState,
  reducers: (create) => ({
    setStatus: create.reducer(
      (state, action: PayloadAction<UpdateProcessStatus>) => {
        state.status = action.payload;
      },
    ),
    setMessage: create.reducer((state, action: PayloadAction<string>) => {
      state.message = action.payload;
    }),
  }),
});

// Action creators are generated for each case reducer function.
export const { setStatus, setMessage } = updateProccessSlice.actions;

export const updateProcessReducer = updateProccessSlice.reducer;
