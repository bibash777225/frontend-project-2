 import { createSlice } from "@reduxjs/toolkit";  
   
   
   createSlice({
      name:"teacherrSlice",
    initialState:{
        teacherName:"",
        teacherPassword:"",

    },
    reducers:{

        setTeacherName(sate,action){
           state.teacherName ="bibash"
        },

        setTeacherPassword(state,action){
            state.teacherPassword="HELLO"
        }
    }
   
    })
// const setTeacherName = teacherSlice.actions.setTeacherName
// const setTeacherPasssword  = teacherSlice.actions.setTeacherPasswor
    const{ setTeacherName,setTeacherPassword}=teacherSlice.action
setTeacherName()
    /* 

 } 
const teacherSlice ={

createslice function always return an object jaha vitra action haru automatic generate vayera ahirako hunca 

}


 note:   reducer ko name j xa , action ko name same tahi 




// const teacherSlice = {
// createSlice functions always returns an object jaha vitra actions haru automatic generate vayerw aairako huncha 
// note : reducer ko name j xa , actions ko name pani smae tehi nahi huncha action invoke garne bitikai vitra reducer automatic call huncha 



/* 
FLOW 

reducers ---> action 

reducer --> communication --> action lai call garnu parxa 
jaile pani action call huncha, reducer hune hainw 


*/
    /*