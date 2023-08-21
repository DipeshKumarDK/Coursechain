'use client';

import { createSlice } from '@reduxjs/toolkit';

export interface ProfileState {
    value: any
}

const initialState: ProfileState = {
    value: {}
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        changeProfile: (state, profile) => { state.value = profile }
    }
})

export const { changeProfile } = profileSlice.actions;

export default profileSlice.reducer;