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
                {name:'.vite',id:uuid(),isFolder:true, children:[{name:'react.ts',id:uuid(),isFolder:false}]}
            ]
        },
        {name:'public',id:uuid(),isFolder:true},
        {name:'src',id:uuid(),isFolder:true, 
         children:[{name:'components',id:uuid(),isFolder:true,
            children:[{name:'File.tsx',id:uuid(),isFolder:false}]}]
        },
        {
            name:'index.html',
            id:uuid(),
            isFolder:false
        },
        {
            name:'App.tsx',
            id:uuid(),
            isFolder:false
        }
    ]
}