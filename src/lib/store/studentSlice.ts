import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IIncommingStudentsData, IncommingUserPayload } from "./type";

const initialStudentData:IIncommingStudentsData={
    data:"",
}


const studentSlice = createSlice({
    name: "studentSlice",
    initialState:initialStudentData,

    reducers: {

        setData(state, action:PayloadAction<string|number>)
         {
            state.data = "bib"
            //{
            // name:"bibash"
            //address:"itahari"
        //}
        },
    }
    //reducer--action
    
    


})
 //reducer--action
    const {setData} = studentSlice.actions
    // dispatch(setData({
    //     name:"bibash",
    //     address:"bhaktapure",
    //     age:45
    // }))
    
      export {setData}
    export default studentSlice.reducer
    


//   initaila sate mah  datastucture chaii obejct rakney object  passs agrya caa baney mutiple kura store garn milyou