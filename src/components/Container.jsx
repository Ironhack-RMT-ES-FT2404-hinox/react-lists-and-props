import React from 'react'

function Container(props) {
  console.log(props)

  const containerStyles = {
    width: "90vw",
    backgroundColor: props.bgcolor,
    color: props.color,
    height: "200px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "15px"
  }

  return (
    <div style={containerStyles}>

      {/* <p>{props.text}</p> */}

      {props.children}

    </div>
  )
}

export default Container