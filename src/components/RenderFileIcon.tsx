import Folder from './SVG/Folder'
import { extentionFileIcon } from "../constant"
import IconImg from "./IconImg"
import File from "./SVG/File"
interface Iprops{
filename:string,
isOpen?:boolean,
isFolder?:boolean
}

const RenderFileIcon = ({filename,isFolder,isOpen}:Iprops) => {
    const extention=filename.split('.').pop()
    if(extention && Object.prototype.hasOwnProperty.call(extentionFileIcon,extention)){
      const iconPath=isFolder?isOpen?`${extentionFileIcon[extention]}-open.svg`
      :`${extentionFileIcon[extention]}.svg`:
      `${extentionFileIcon[extention]}.svg`
      return <IconImg src={iconPath}/>
    }

  if(isOpen &&isFolder) return <IconImg src='/icons/folder-api-open.svg'/>
  if(!isOpen && isFolder)return <Folder/>

  return <File/>;
}

export default RenderFileIcon