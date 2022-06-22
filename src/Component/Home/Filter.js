import React from 'react'
import '../Home/Filter.scss'

export default function Filter () {
  return (
    <>
      <div className='styless'>
        <div className='container'>
          <div className='filterclass'>
            <a className='active'>Trending Now</a>
            <a>Popular</a>
            <a>Netflix Original</a>
            <a>Premiers</a>
            <a>Recently Added</a>
          </div>
        </div>
      </div>
    </>
  )
}
