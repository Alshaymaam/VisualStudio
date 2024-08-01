import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
interface Iprops{

content:string|undefined
}
const FileSyntexHighlighter = ({content}:Iprops) => {
  return (
    <SyntaxHighlighter language="javascript" style={atomDark}
     customStyle={{backgroundColor:'transparent', width:'100%', maxHeight:'100vh',overflow:'auto',
         fontSize:'1.5rem' }} showLineNumbers>
      {String(content)}
    </SyntaxHighlighter>
  )
}

export default FileSyntexHighlighter