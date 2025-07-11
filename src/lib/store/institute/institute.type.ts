import { Status } from "@/lib/types/type";

 export interface IInstitue {
    instituteName: string,
    institutePhone: string,
    instituteEmail: string,
    instituteAddress: string,
}



export interface IInstituteInitialData {
    institute: IInstitue,
    status: Status
}