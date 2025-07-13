import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IInitalState, IUserData } from "./authSlice.type";
import { Status } from "../types/type";
import API from "../../../http";
import { ILoginData } from "@/app/auth/login/login.type";

const initalState: IInitalState = {
    user: {
        username: "",
        password: ""
    },
    status: Status.LOADING
}


const authSlice = createSlice({
    name: "auth",
    initialState: initalState,
    reducers: {
        setUser(state: IInitalState, action: PayloadAction<IUserData>) {
            state.user = action.payload
        },
        setStatus(state: IInitalState, action: PayloadAction<Status>)
       state.status=action.paylod
    }
})
const { setUser, setStatus } = authSlice.actions
export default authSlice.reducer


export function registerUser(data: IRegisterData) {
    return async function registerUserThunk() {
        try {
            const response = await API.post("auth/register", data)
            if (response.status == 200) {
                /// k garney tah success hudha 
           dispatch(setStatus(Status.SUCCESS))
            }
            else {

            }
        } catch (error) {
            console.log(error)
            dispatch(setStatus(Status.ERROR))

        }
    }
}


export function loginUser(data: ILoginData) {
    return async function loginUserThunk() {
        try {
            const response = await API.post("auth/register", data)
            if (response.status == 200) {
                /// k garney tah success hudha 
           dispatch(setStatus(Status.SUCCESS))
            }
            else {

            }
        } catch (error) {
            console.log(error)
            dispatch(setStatus(Status.ERROR))

        }
    }
}