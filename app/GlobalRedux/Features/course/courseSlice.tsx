'use client';

import { createSlice } from '@reduxjs/toolkit';

export interface courseState {
    value: any
}

const initialState: courseState = {
    value: {}
}

export const courseSlice = createSlice({
    name: 'course',
    initialState,
    reducers: {
        changeCourse: (state, course) => { state.value = course }
    }
})

export const { changeCourse } = courseSlice.actions;

export default courseSlice.reducer;