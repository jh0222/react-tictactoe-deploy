import React  from "react";
import "./Sqaure.css"

const Square = ({onClick, value}) => {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  )
}

export default Square