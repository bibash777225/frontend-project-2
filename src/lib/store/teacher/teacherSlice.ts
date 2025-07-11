import { createSlice } from "@reduxjs/toolkit";


const initalState=IInitalTeacherData{
teacher:{
    teacherPhoneNumber:"",
    teacherEmail:"",
    teacherName:"",
    

},

status:Status.LOADING

},




createSlice({
    name:"teacher",
    initialState:initalState, 
})