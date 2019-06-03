import React from "react"
import "../assets/css/css/all.css"
import style from "../assets/css/style.module.css"

function Card (props) {
    return <div className={style.card}>
            <p className={style.name}>Walter D. Mazariego</p>
            <p className={style.title}>Web Developer</p>
            <br />
            <a className={style.link} href="mailto:walterdmazariego@gmail.com"><i className="fa fa-envelope"></i></a> | <a className={style.link} href="https://www.linkedin.com/in/walterdmazariego"><i className="fab fa-linkedin"></i></a> 
        </div> ;
  }
  export default Card;