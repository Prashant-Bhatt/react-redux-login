import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import { getToken, getUser, removeUserSession,setUserSession } from '../utils/common';

export const login = createAsyncThunk(
    'users/login',
    async (args, thunkAPI) => {
        const response = await axios.post("http://localhost:8080/login", {
            username: args.username,
            password: args.password
        })

        return response.data;
    }
)

const authState = {isLoggedIn:0,username:null,userrole:null,token:null}
export const authSlice = createSlice({
    'name':'auth',
    initialState:authState,
    reducers:{
        logout(state){
            state.isLoggedIn = 0;
            state.username = null;
            state.userrole = null;
            state.token = null;
            removeUserSession();
        },
        loginStateReferesh(state){ //to preserve loginstate on refersh 
            console.log("login state referesh");
            state.isLoggedIn = 1;
            state.token = getToken();
            let user = JSON.parse(getUser());
            state.username = user.username;
            state.userrole = user.userrole;
            setUserSession(getToken(),btoa(getUser()));
        }
    },
    extraReducers:{
        [login.fulfilled]: (state, action) => {
            console.log("login fulfilled");
            state.isLoggedIn = 1;
            state.token = action.payload.token;
            let user = JSON.parse(atob(action.payload.user));
            state.username = user.username;
            state.userrole = user.userrole;
            setUserSession(action.payload.token,action.payload.user);
        },
        [login.rejected]: (state, action) => {
            console.log("login rejected");
            state.isLoggedIn = 0;
            state.token = null;
            state.username = null;
            state.userrole = null;
            removeUserSession();
        },
        
    }
});

export const authActions = authSlice.actions;