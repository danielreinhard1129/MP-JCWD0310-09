import { User } from '@/types/user.type';
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState: User = {
  id: 0,
  email: '',
  firstName: '',
  lastName: '',
  role: '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginAction: (state, action: PayloadAction<User>) => {
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.role = action.payload.role;

    },
    logoutAction: (state) => {
      state.id = 0;
      state.email = '';
      state.firstName = '';
      state.lastName = '';
      state.role = '';
    }
  }
});

export const { loginAction, logoutAction } = userSlice.actions;
export default userSlice.reducer;