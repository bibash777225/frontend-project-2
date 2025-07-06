 //j tati slice xaaa jamaii slice laii collect 

import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice"
import teacherSlice from "./teacherSlice"
import studentSlice from "./studentSlice"

//  collect all slices and store 
  
const store = configureStore({


    reducer:{
        user:userSlice,
        student:studentSlice, //slice vakeoo room voo so yeslai samatera garna milyou
        teacher:teacherSlice

    }
})


export default store 
// dispacth ko type--. paxi kam lagxa
// dispatch
  export type AppDispacth=typeof store.dispatch//useDispatch laii type dina chayenxa
export type Rootstate=ReturnType<typeof store.getState>

// let name =bibash
//type of name   u garda yesley string dinxa type 

//react -redux--package