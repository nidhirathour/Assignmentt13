import React from "react";

const Button =(props)=>{

    return(
        <div>
            <button style={{backgroundColor:"#00cec9",width:"100px",height:"40px"}} >{props.text}</button>
        </div>

    )
}
export default Button;