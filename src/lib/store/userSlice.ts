import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserInitialState } from "./type";
import axios from "axios";
import API from "../../../http";

const userInitialState: IUserInitialState = {
    name: null,
    address: null,
}


const userSlice = createSlice({
    name: "userSlice",   // u room vanakoo jastoo voo room ko nam deko
    initialState: userInitialState,

    reducers: {

        // state-->  mathi jo intial state
        //action--. trigger garda pathuney data aunne kura 
        setName(state: IUserInitialState, action: PayloadAction<string>) {

            state.name = action.payload  //bibash
        },

        setAddress(state: IUserInitialState, action: PayloadAction<string>) {
            state.address = action.payload
        },
        sethaha(state, action) {

        }
    }
})


//action
const { setName, setAddress, sethaha } = userSlice.actions
export default userSlice.reducer
export { setName, setAddress, sethaha }
/*
const [name,setName] = useState(null)
const [age,setAge]
const [address,setAddress]= useState()

reducers --> kunai function jasko through bata hami kehi programmed 

/*

example 

ECOMMERCE
userSlice.ts
payementSlice.ts



 Reducer mah hami naming convention follow garxam 
 setNam(){
 
 } kei kura lai set garnu xa vaney agaadi set lakney ani K LAI SET GARNEY THYOU LEKNEY setName 
  reducer function mah jahiley diwuta kura ayunxa ayeuta  action rah state sadhaii reducer vanudha u dieuta ayunxa ayunxa  
*/





//register user

function registerUser() {
    return async function registerUserThunk() {

        try {const response = await axios API.post("user/register")
        if (response.status == 200) {
        }
        else {

        }

    }


} catc (error) {
    console.log(error)
}
      

}



//login user 
function loginUser() {
    return async function loginUserThunk() {
        try {
            const response = await axios.post("user/login")
            if (response.status == 200) {
            }
            else {

            }

        }
}catch (error) {
        console.log(error)
    }


}


// forget password
function forgetPassword() {

    try {
        return async function forgetPasswordThunk() {
            const response = await axios.post("user/forget-password")
            if (response.status == 200) {
                dispatch(setName(response.data.dataname))
            }
            else {

            }

        }
    } catch (error) {
        console.log(error)
    }

}

