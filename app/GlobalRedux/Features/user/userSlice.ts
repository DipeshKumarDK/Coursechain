'use client';

import { createSlice } from '@reduxjs/toolkit';

export interface UserState {
    value: any
}

const initialState: UserState = {
    value: {}
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        changeUser: (state, user) => { state.value = user }
    }
})

export const { changeUser } = userSlice.actions;

export default userSlice.reducer;