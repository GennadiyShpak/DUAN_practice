import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isModalOpened: false
}

const modalReducer = {
    openModal(state) {
        console.log(state.isModalOpened);
        
        state.isModalOpened = true    
    },
    closeModal(state) {
        state.isModalOpened = false    
    },
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: modalReducer
});

export const modalActions = modalSlice.actions;
export const modalSliceReducer = modalSlice.reducer;
