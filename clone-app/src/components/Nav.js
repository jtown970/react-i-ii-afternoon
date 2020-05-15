import React from 'react'

export default function Nav() {
  return (
    <div className='nav-list'>
      <p className='back-btn'>Previous</p>
      <button className='edit-btn'>Edit</button>
      <button className='delete-btn'>Delete</button>
      <button className='new-btn'>New</button>
      <p className='next-btn'>Next</p>
    </div>
  )
}
