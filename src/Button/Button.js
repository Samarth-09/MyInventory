import React from 'react'
import './Button.css';
export default function Button(props) {
  return (
    <div>
        <button className='bttn'>{props.name}</button>
    </div>
  )
}
