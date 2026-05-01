import { configureStore } from '@reduxjs/toolkit';
import { authSliceReducer } from './auth-store'
import { modalSliceReducer } from './modal-store';

const store =  configureStore({
    reducer: {
        auth: authSliceReducer,
        modal: modalSliceReducer,
    }
})

export default store;