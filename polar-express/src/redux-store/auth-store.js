import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuth: false
}

const authReducer = {
    login(state) {
        state.isAuth = true    
    },
    logOut(state) {
        state.isAuth = false    
    },
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: authReducer
});

export const authActions = authSlice.actions;
export const authSliceReducer = authSlice.reducer;