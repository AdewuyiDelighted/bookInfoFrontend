import style from "./index.module.css"
import star from "../../../asset/login/Img.png";
import FilledButton from "../../../component/reuseable/filledButton";
import {Link} from "react-router-dom";

const Login = () => {
    return (
        <div className={style.mains}>
            <div className={style.main}>
                <div className={style.image}>
                    <img src={star} alt={"star"} width={"150"}/>
                </div>

                <p className={style.create}>Log in</p>

                <form className={style.forms}>

                    <div className={style.form}>
                        <label>Username</label>
                        <input type={"text"} placeholder={"Your username"} className={style.inputs}/>
                    </div>

                    <div className={style.form}>
                        <label style={{margin: "0px"}}>Email</label>
                        <input type={"text"} placeholder={"Your email"} className={style.inputs}/>
                    </div>

                    <div className={style.form}>
                        <label>Password</label>
                        <input type={"password"} className={style.inputs}/>
                    </div>

                </form>

                <div className={style.checkBox}>
                    <input type={"checkbox"}/>
                    <p>I accept the terms and privacy policy</p>
                </div>

                <div className={style.button}>
                    <Link to={"/register"}> <FilledButton text={"Login"} textColor={"white"} color={"black"}/> </Link>
                </div>

                {/*<div className={style.login}>*/}
                {/*    <p style={{margin: 0}}>Already have an account?</p>*/}
                {/*    <Link to={"/log-in"}>Login</Link>*/}
                {/*</div>*/}
            </div>
        </div>


    )
}

export default Login;