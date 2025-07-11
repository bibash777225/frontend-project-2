import { Status } from "@/lib/types/type"

interface ITeacher{
  teacherName: string,
    teacherPhoneNumber: string,
    teacherEmail: string,
  
}

 export interface IInitalTeacherData{

    teacher:ITeacher
    status: Status
}