import { createSlice } from "@reduxjs/toolkit";

const initialUserState = null;

const userSlice = createSlice({
    name: "user",
    initialState: initialUserState,
    reducers: {
        addUser: (state, action) => state = action.payload,
        removeUser: (state) => state = initialUserState,
    }
})

export const {addUser, removeUser} = userSlice.actions;
export default userSlice.reducer;