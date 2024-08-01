import FileComponent from './components/FileComponent'
import OpenedFileBar from './components/OpenedFileBar'
import { FileTree } from './data/FileTree'

function App() {
  return (
    <div>
      <div className='flex h-screen'>
        <div className=' w-64 border-r-4 border-white p-2 '>
              <FileComponent filetree={FileTree}/>
        </div>
        
            <OpenedFileBar/>
      </div>
    </div>
  )
}

export default App
