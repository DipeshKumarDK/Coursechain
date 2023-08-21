'use client';

import { createSlice } from '@reduxjs/toolkit';

export interface createCourseState {
    value: any
}

const initialState: createCourseState = {
    value: {}
}

export const createCourseSlice = createSlice({
    name: 'createCourse',
    initialState,
    reducers: {
        changeCreateCourse: (state, createCourse) => { state.value = createCourse }
    }
})

export const { changeCreateCourse } = createCourseSlice.actions;

export default createCourseSlice.reducer;