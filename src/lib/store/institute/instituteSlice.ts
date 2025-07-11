import { Status } from "@/lib/types/type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IInstitue, IInstituteInitialData } from "./institute.type";

const initalState:IInstituteInitialData={
    institute:{
        instituteAddress:"",
        instituteName:"",
        institutePhone:"",
        instituteEmail:""
    },
    status:Status.LOADING
}

 const instituteSlice=createSlice({
    name:"institute",
    initialState:initalState,
    reducers:{
        setInstitute(state:IInstituteInitialData,action:PayloadAction<IInstitue>){
            state.institute=action.payload
        },
        setStatus(state:IInstituteInitialData,action:PayloadAction<Status>){
           
        }
        

    }
})
const {setInstitute,setStatus}=instituteSlice.actions
export default instituteSlice.reducer
