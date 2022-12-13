import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from '../store';

interface UserInfo {
  email: string;
  accessToken: string;
}

// Define the initial state using that type
const initialState: UserInfo = {
  email: '',
  accessToken: '',
};

export const userSlice = createSlice({
  name: 'userInfo',

  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },
  },
});

export const {setEmail, setAccessToken} = userSlice.actions;

export const selectUserInfo = (state: RootState) => state.userInfo;

export default userSlice.reducer;
