import {createSlice} from '@reduxjs/toolkit'

const counterState = {counter:0,myname:"Prashant"};

export const counterSlice = createSlice({
    name:'counter',
    initialState:counterState,
    reducers:{
        increment(state,action){
            console.log("hello");
            state.counter++;
            state.myname = action.payload.name;
        },
        decrement(state,action){
            state.counter--;
            state.myname = action.payload.name;
        }
    }
});

export const counterActions = counterSlice.actions

