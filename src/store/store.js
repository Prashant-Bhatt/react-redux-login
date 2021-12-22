import {configureStore} from '@reduxjs/toolkit'
import {counterSlice} from './counterSlice';
import {authSlice} from './authenticate';

const Store = configureStore({
    reducer:{
        counter:counterSlice.reducer,
        auth:authSlice.reducer
    }
})

export default Store;