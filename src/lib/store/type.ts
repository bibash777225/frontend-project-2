 export interface IUserInitialState{
  name:string| null,
  address:string |null
}


export interface IIncommingStudentsData{
  data:string;
}
 
 
 
  export interface IncommingUserPayload{
    name:string,
    address:string,
    age:number;
  }