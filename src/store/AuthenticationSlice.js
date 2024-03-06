import { createSlice } from "@reduxjs/toolkit";

const AuthenticationSlice = createSlice({
  name: "details",
  initialState: [],
  reducers: {
    createUser: (state, action) => {
      return [...state, { ...action.payload }];
    },

    passwordChange: (state, action) => {
      // console.log('ppp',action.payload)
      return state.map((profile) => {
        if (profile.email == action.payload.email) {
          return {
            ...profile,
            password: action.payload.passwordInp,
          };
        }
      });
    },
  },
});

export const { createUser } = AuthenticationSlice.actions;
export const { passwordChange } = AuthenticationSlice.actions;
export default AuthenticationSlice.reducer;
