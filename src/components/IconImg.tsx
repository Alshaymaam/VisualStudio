import { svgStyles } from "../styles"

interface Iprops{
src:string
}
const IconImg = ({src}:Iprops) => {
  return (
    <img src={src} {...svgStyles}/>
  )
}

export default IconImg