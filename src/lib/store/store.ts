 //j tati slice xaaa jamaii slice laii collect 

import { configureStore } from "@reduxjs/toolkit";
import {userSlice,teacherSlice,studentSlice}

//  collect all slices and store 
  
const store=configureStore({


    reducer:{
        user:userSlice,
        student:studentSlice, //slice vakeoo room voo so yeslai samatera garna milyou
        teacher:teacherSlice

    }
})


export default store 
// dispacth ko type--. paxi kam lagxa
// dispatch
  export type AppDispacth=typeof store.dispatch


// let name =bibash
//type of name   u garda yesley string dinxa type 

//react -redux--package