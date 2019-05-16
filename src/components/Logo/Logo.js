import React from 'react'
import Aroma from "../../assets/img/logo.png";

const Logo = (props) => {
  return (
    <div onClick={props.click}>
      <img src={Aroma} alt="logo"/>
    </div>
  )
}

export default Logo
