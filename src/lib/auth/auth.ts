import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IInitalState, IUserData } from "./authSlice.type";
import { Status } from "../types/type";

const initalState:IInitalState={
    user:{
        username:"",
        password:""
    },
    status:Status.LOADING
}


   const authSlice= createSlice({
    name:"auth",
    initialState:initalState,
    reducers:{
        setUser(state:IInitalState,action:PayloadAction<IUserData>){
            state.user=action.payload
        },
        setStatus(state:IInitalState,action:PayloadAction<Status>)

    }
})
const {setUser,setStatus}=authSlice.actions
export  default authSlice.reducer