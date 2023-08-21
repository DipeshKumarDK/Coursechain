'use client';

import { createSlice } from '@reduxjs/toolkit';

export interface currCategoryState {
    value: any
}

const initialState: currCategoryState = {
    value: {}
}

export const currCategorySlice = createSlice({
    name: 'currCategory',
    initialState,
    reducers: {
        changeCurrCategory: (state, currCategory) => { state.value = currCategory }
    }
})

export const { changeCurrCategory } = currCategorySlice.actions;

export default currCategorySlice.reducer;