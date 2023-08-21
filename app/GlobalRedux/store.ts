'use client';

import { configureStore } from '@reduxjs/toolkit';
import userReducer from './Features/user/userSlice';
import profileReducer from './Features/profile/profileSlice';
import createCourseSlice from './Features/createCourse/createCourseSlice';
import currCategorySlice from './Features/currCategory/currCategorySlice';
import courseSlice from './Features/course/courseSlice';

export const store = configureStore({
    reducer: {
        user: userReducer,
        profile:profileReducer,
        createCourse:createCourseSlice,
        currCategory: currCategorySlice,
        course: courseSlice
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;