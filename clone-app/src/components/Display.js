import React, { Component } from 'react'
// import data from '../data'

export default function Display(props)  {
  console.log(props)
  return (
    
      <div className='center-box'>
        <div className='box'>
          <div className='tag'>
              <span className='fist-name'>{props.ppl.name.first},</span> 
            </div>
            <div className='tag'>
              <span className='last-name'>{props.ppl.name.last}</span>
            </div>

         <div className='location'>   
          <div className='tag'>
            <p className='bold'>From:</p>
            <p>{props.ppl.city}</p>
          </div>
          <span>{props.ppl.country}</span>
          </div>

          <div className='tag'>
          <p className='bold'>Job Title:</p>
            <p> {props.ppl.title}</p>
          </div>

          <div className='tag'>
          <p className='bold'>Employer:</p>
            <p>{props.ppl.employer}</p>
          </div>

          <p>Favorite Movies:</p>
          <ol className='fav-movies'>1. {props.ppl.favoriteMovies[0]} </ol>
          <ol className='fav-movies'>2. {props.ppl.favoriteMovies[1]}</ol>
          <ol className='fav-movies'>3. {props.ppl.favoriteMovies[2]}</ol>

        </div>
      </div>
  
  )
}
