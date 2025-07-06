"use client"

import { setAddress, setName } from "@/lib/store/userSlice"
import { useDispatch } from "react-redux"

function About(){
    let address ="biash"
    let name=" bhak"
    const dispatch=useAppDispatch()
   dispatch(setName(name) ) 
  dispatch ( setAddress(address))
    return(
        <h1>    this is about my pages </h1>
    )
}
export default About