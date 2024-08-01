import { useDispatch, useSelector } from "react-redux"
import { Ifile } from "../interfaces"
import RenderFileIcon from "./RenderFileIcon"
import ColseIcon from "./SVG/ColseIcon"
import {setCilckedFile, setOpenedFile } from "../app/features/FileTreeSlice"
import { RootState } from "../app/store"

interface Iprops{file:Ifile}
const OpenedBarTap = ({file}:Iprops) => {
  const dispatch=useDispatch();
  const{openedFile,clickedFile:{activeTapId}}=useSelector((state:RootState)=>state.tree);
  const{id,name,content}=file;
  const onRemove=(selectedId:string)=>{
    
    const filtered=openedFile.filter(file=>file.id!==selectedId)
    const {id,name,content}=filtered[filtered.length-1]
    dispatch(setOpenedFile(filtered))
    dispatch(setCilckedFile({activeTapId:id,fileContent:content,filename:name}))
    console.log(filtered)
  }
  
  const onClick=()=>{  dispatch(setCilckedFile({filename:name,fileContent:content,activeTapId:id})) }
  return (
    <div className={`flex items-center p-2 border-t-2 ${file.id===activeTapId?"border-[#cf6ccf]":"border-transparent"}`} 
    onClick={onClick}>
     <RenderFileIcon filename={file.name}/>
    <span className="cursor-pointer duration-300 flex justify-center items-center w-fit mx-2 p-1 rounded-md">
        {file.name}</span>
    <span className="cursor-pointer hover:bg-[#64646473] duration-300 flex justify-center items-center w-fit
     mx-2 p-1 rounded-md" onClick={e=>{e.stopPropagation(); onRemove(file.id)}}><ColseIcon/></span>
    </div>
  )
}

export default OpenedBarTap