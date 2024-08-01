export interface Ifile{
    id:string
    name:string,
    isFolder:boolean,
    children?:Ifile[],
    content?:string
}

export interface IClickedFile{ 
    filename:string, 
    fileContent:string|undefined,
     activeTapId:string|null
}
export interface IinitialState{ 
    openedFile:Ifile[],
    clickedFile:IClickedFile,
   
}