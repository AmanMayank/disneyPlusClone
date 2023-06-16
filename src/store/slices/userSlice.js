import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: {
    name: "",
    email: "",
    photo: "",
  },
  reducers: {
    setUserLoginDetails(state, action) {
      state.name = action.payload.displayName;
      state.email = action.payload.email;
      state.photo = action.payload.photoURL;
    },

    setSignOutState(state, action) {
      state.name = null;
      state.email = null;
      state.photo = null;
    },
  },
});

export const { setUserLoginDetails, setSignOutState } = userSlice.actions;
export const usersReducer = userSlice.reducer;
