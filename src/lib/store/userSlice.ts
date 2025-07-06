import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserInitialState } from "./type";

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
            state. address = action.payload
        },
        sethaha(state, action) {

        }
    }
})


//action
const { setName, setAddress, sethaha }=userSlice.actions
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