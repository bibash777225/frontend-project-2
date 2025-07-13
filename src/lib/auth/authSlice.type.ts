import { Status } from "../types/type";

  export interface IUserData{
    username:string,
    password:string,
 }
 
  export interface IRegisterData extends IUserData{
  
    email:string;
   
 }
 
 export interface IInitalState{

    user:IUserData,
    status:Status
}