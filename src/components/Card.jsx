import React from 'react'
import "./Card.css"
import img from "./memories.png"
function Card(props) {
  return (
    <div className='card'>
        <img src={img} alt="not found" width="100" />
         <h1>{props.name}</h1>
          <p>{props.des}</p>
    </div>
  )
}

export default Card