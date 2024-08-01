import { useSelector } from "react-redux"
import { RootState } from "../app/store"
import OpenedBarTap from "./OpenedBarTap"
import FileSyntexHighlighter from "./FileSyntexHighlighter"

const OpenedFileBar = () => {
    const {openedFile,clickedFile}=useSelector((state:RootState)=>state.tree)
  return (
    <div>
        <div className="flex items-center">
            {openedFile.map((file)=><OpenedBarTap key={file.id} file={file}/>)}
        </div>
        <FileSyntexHighlighter content={clickedFile.fileContent}/>
    </div>
  )
}

export default OpenedFileBar