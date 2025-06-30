import { createSlice } from "@reduxjs/toolkit";

createSlice({
name:"userSlice",   // u room vanakoo jastoo voo room ko nam deko
initialState:{
    name:null,
    address:null;

},
     reducers :{

        // state-->  mathi jo intial state
        setName(sate,action){
           
            state.name="biabsh"
        },
      
        setAdress(){
       state.name="bahaktapur"
        },
     }

})

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