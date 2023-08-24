import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  photo: "",
};
const userSlice = createSlice({
  //name of the slice
  name: "user",
  //initial state
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  // The following functions are the actions which are to be exported
  //reducers which update the state - this object consists of methods to perform actions on the store
  reducers: {
    // when users have signed in , then remember all the details stored
    //the state here is referring the initialState object and it enables to store information coming from the components as payload via action object
    setUserLoginDetails: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.photo = action.payload.photo;
    },
    // when users have signed out , then forget all the details stored
    setSignOutState: (state) => {
      state.name = null;
      state.email = null;
      state.photo = null;
    },
  },
});
// Each functions inside the reducers is to be exported as actions.
export const { setUserLoginDetails, setSignOutState } = userSlice.actions;
export const selectUserName = (state) => state.user.name;
export const selectUserEmail = (state) => state.user.email;
export const selectUserPhoto = (state) => state.user.photo;

export default userSlice.reducer;
