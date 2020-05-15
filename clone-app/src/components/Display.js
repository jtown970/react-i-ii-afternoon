import React, { Component } from 'react'
// import data from '../data'

export default function Display(props)  {
  console.log(props)
  return (
    
      <div className='center-box'>
        <div className='box'>
        
          <span className='fist-name'>{props.ppl.name.first}</span> 
          <span className='last-name'>{props.ppl.name.last}</span>
          <p>{props.ppl.city}</p>
          <span>{props.ppl.country}</span>
          <p>{props.ppl.employer}</p>
          <p>{props.ppl.title}</p>
          <p>fav movies</p>
        </div>
      </div>
  
  )
}
