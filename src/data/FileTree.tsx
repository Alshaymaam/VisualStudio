import { Ifile } from "../interfaces";
import {v4 as uuid } from "uuid";

export const FileTree :Ifile = {
    name:'VS Code Clone',
    id:uuid(),
    isFolder:true,
    children:[
        {
            name:'node_modules',
            id:uuid(),
            isFolder:true,
            children:[
                {name:'.vite',id:uuid(),isFolder:true,
                     children:[{name:'react.js',id:uuid(),isFolder:false,content:`
                        import {
                        require_react
                        } from "./chunk-4HAMFFQC.js";
                        import "./chunk-EQCVQC35.js";
                        export default require_react();
                        //# sourceMappingURL=react.js.map
`}]}
            ]
        },
        {name:'public',id:uuid(),isFolder:true},
        {name:'src',id:uuid(),isFolder:true, 
         children:[{name:'components',id:uuid(),isFolder:true,
            children:[{name:'SVG',id:uuid(),isFolder:true,
                children:[{name:'File.tsx',id:uuid(),isFolder:false,content:`
                    import { svgStyles } from "../../styles"
                    function File() {
                    return (
                    <svg aria-hidden='true' {...svgStyles} focusable='false' role="img" viewBox='0 0 16 16' fill="#7d8590" width={20} height={20} >
                        <path d="M270.825,70.55L212.17,3.66C210.13,1.334,207.187,0,204.093,0H55.941C49.076,0,43.51,5.566,
                        43.51,12.431V304.57 c0,6.866,5.566,12.431,12.431,12.431h205.118c6.866,0,12.432-5.566,12.432-12.432V77.633
                    C273.491,75.027,272.544,72.51,270.825,70.55z M55.941,305.073V12.432H199.94v63.601c0,3.431,2.78,6.216,6.216,
                    6.216h54.903 l0.006,222.824H55.941z"/>
                    </svg>
                    )
                    }

                    export default File`}]}]}]
        },
        {
            name:'index.html',
            id:uuid(),
            isFolder:false,
            content:`<!doctype html>
                        <html lang="en">
                        <head>
                            <meta charset="UTF-8" />
                            <link rel="icon" type="image/svg+xml" href="/vite.svg" />
                            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                            <title>Vite + React + TS</title>
                        </head>
                        <body>
                            <div id="root"></div>
                            <script type="module" src="/src/main.tsx"></script>
                        </body>
                        </html>
`
        },
        {
            name:'App.tsx',
            id:uuid(),
            isFolder:false,
            content:`import FileComponent from './components/FileComponent'
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
`
        }
    ]
}