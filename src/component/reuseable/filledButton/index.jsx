import style from "./index.module.css"

const FilledButton = ({color,textColor,text})=>{
    return (
        <button style={{backgroundColor:color,color:textColor}} className={style.filledButton}>{text}</button>
    )

}
export default FilledButton