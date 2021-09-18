import React from "react"

const Button = props => {
  return (
    <button href="" className="btn btn-full" onClick={props.action}>
      {props.children}
    </button>
  )
}
export default Button
