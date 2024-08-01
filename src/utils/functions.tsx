import { Ifile } from "../interfaces";

export const doesFileObjectExist=(arr:Ifile[],id:string)=>{
    return arr.some(obj=>obj.id===id)
}