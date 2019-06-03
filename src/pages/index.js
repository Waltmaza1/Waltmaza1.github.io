import React from "react"
import Card from "../components/Card.js"
import "../assets/css/css/all.css"
import style from "../assets/css/style.module.css"

class Main extends React.Component{
    render(){
        return(
            <div className={style.body}>
                <Card />  
            </div>
           
        )
    }
}
export default Main;