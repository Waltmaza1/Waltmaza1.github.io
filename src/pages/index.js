import React from "react"
import "../assets/css/css/all.css"
import style from "../assets/css/style.module.css"

class Main extends React.Component{
    render(){
        return(
            <div className={style.body}>
                <div className={style.card}>
                    <p className={style.name}>Walter D. Mazariego</p>
                    <p className={style.title}>Web Developer</p>
                    <br />
                    <a className={style.link} href="mailto:walterdmazariego@gmail.com"><i className="fa fa-envelope"></i></a> | <a className={style.link} href="https://www.linkedin.com/in/walterdmazariego"><i className="fab fa-linkedin"></i></a> 
                </div>   
            </div>
           
        )
    }
}
export default Main;