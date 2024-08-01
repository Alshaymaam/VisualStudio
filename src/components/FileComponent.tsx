import { useState } from "react"
import { Ifile } from "../interfaces"
import RightArrow from "./SVG/RightArrow"
import ButtomArrow from "./SVG/ButtomArrow"
import RenderFileIcon from "./RenderFileIcon"
import { useDispatch, useSelector } from "react-redux"
import { setCilckedFile, setOpenedFile } from "../app/features/FileTreeSlice"
import { RootState } from "../app/store"
import { doesFileObjectExist } from "../utils/functions"

interface Iprops{filetree:Ifile}
const FileComponent = ({filetree}:Iprops) => {
  const {id,name,isFolder,children,content}=filetree;
  const dispatch=useDispatch()
  const {openedFile}=useSelector((state:RootState)=>state.tree)
  const [isOpen,setIsOpen]=useState<boolean>(false)
  const toggle=()=>setIsOpen(prev=>!prev)

  const onFileClicked=()=>{
    const exist=doesFileObjectExist(openedFile,id)
    dispatch(setCilckedFile({filename:name,fileContent:content,activeTapId:id}))
    if(exist) return;
    dispatch(setOpenedFile([...openedFile,filetree]))}
  return (
    <div className="mb-2 ml-2 cursor-pointer">
        <div className="flex items-center mb-1">
        
        {isFolder?
        <div onClick={toggle} className="flex items-center">
          {isOpen?
          <ButtomArrow/>
          :<RightArrow/>}
        <RenderFileIcon filename={name} isFolder={isFolder} isOpen={isOpen}/>
        <span>{name}</span>
        </div>
        :(
        <div className="mr-2 flex items-center" onClick={onFileClicked}>
          <RenderFileIcon filename={name}/>
         <span className="ml-2">{name}</span>
         </div>)}
        </div>
        {isOpen && children && children.map((file,idx)=>
        <FileComponent filetree={file} key={idx}/>  )}
    </div>
  );
};

export default FileComponent