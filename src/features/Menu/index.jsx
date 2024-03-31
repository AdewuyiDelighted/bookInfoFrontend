import style from "./index.module.css"

const Menu = () => {
    return (
        <div className={style.main}>
            <div className={style.miniMain}>
                <form className={style.form}>
                    <label className={style.text}>Search for a book</label>
                    <input type={"text"} placeholder={"ENTER TITLE"} className={style.inputs}/>
                    <input type={"text"} placeholder={"ENTER AUTHOR'S NAME"} className={style.inputs}/>
                    <button type={"submit"} className={style.submit}>Submit</button>
                </form>
                <p className={style.text} >Get Reading List</p>

            </div>

        </div>
    )
}

export default Menu;