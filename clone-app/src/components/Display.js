import React from 'react'
// import data from '../data'

export default function Display(props)  {
  // console.log(props.ppl)
  return (
    
      <div className='center-box'>
        <div className='box'>
            <div className='page-count'>
              <p className='counter'>{props.ppl.id}/25</p> 
            </div>
          <div className='info-box'>

          <div className='name'>
              <span className='first-name'>{props.ppl.name.first}</span> 
              <span className='last-name'>{props.ppl.name.last}</span>
            </div>

         <div className='location title'>   
          <div className='title'>
            <p className='bold '>From:</p>
            <p className='info'>{props.ppl.city},</p>
          </div>
          <span className='info'>{props.ppl.country}</span>
          </div>

          <div className=' title'>
          <p className='bold'>Job Title:</p>
            <p className='info'> {props.ppl.title}</p>
          </div>

          <div className=' title'>
          <p className='bold'>Employer:</p>
            <p className='info'>{props.ppl.employer}</p>
          </div>

          <p className='bold title'>Favorite Movies:</p>
          <ol className='fav-movies info'>1. {props.ppl.favoriteMovies[0]} </ol>
          <ol className='fav-movies info'>2. {props.ppl.favoriteMovies[1]}</ol>
          <ol className='fav-movies info'>3. {props.ppl.favoriteMovies[2]}</ol>
          </div>
        </div>
      </div>
  
  )
}
