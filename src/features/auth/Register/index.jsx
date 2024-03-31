import style from "./index.module.css"
import star from "../../../asset/register/Star 8.svg"
import FilledButton from "../../../component/reuseable/filledButton";
import {Link} from "react-router-dom";

const Register = () => {
    return (
        <div className={style.mains}>
            <div className={style.main}>
                <div className={style.image}>
                    <img src={star} alt={"star"} width={"45px"}/>
                </div>

                <p className={style.create}> Create account</p>

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
                <FilledButton text={"Register"} textColor={"white"} color={"black"}/>
                </div>

                <div className={style.login}>
                    <p style={{margin:0}}>Already have an account?</p>
                    <Link to={"/log-in"}>Login</Link>
                </div>
            </div>
        </div>


    )
}

export default Register;