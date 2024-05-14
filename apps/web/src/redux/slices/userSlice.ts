import { User } from "@/types/user.type";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";


const initialState: User = {
    id: 0,
    firstName: "",
    lastName: "",
    email: "",
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        //action untuk ngisi state 
        loginAction: (state, action: PayloadAction<User>) => {
            state.id = action.payload.id;
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.email = action.payload.email;
        },
        //action untuk logout
        logoutAction: (state) => {
            state.id = 0;
            state.firstName = "";
            state.lastName = "";
            state.email = "";
        },
    },
});


export const { loginAction, logoutAction } = userSlice.actions;
export default userSlice.reducer;