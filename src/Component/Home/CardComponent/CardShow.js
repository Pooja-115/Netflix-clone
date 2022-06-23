import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'
import CardStyle from './cardStyle.scss'
import 'font-awesome/css/font-awesome.min.css'

export default function CardShow () {
  const [data, SetData] = useState('')

  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/discover/tv?api_key=6dc6c49bbf2472d2ed11bbff69a28ad1'
    )
      .then(response => response.json())
      .then(data => SetData(data.results), [])
  }, [])

  return (
    <div className={`Filter_wrapper row ${CardStyle.card} mt-5 `}>
      {Array.from(data).map(({ poster_path, name }) => {
        return (
          poster_path && (
            <Card className='  border-0 pCard col-md-3 col-sm-3 '>
              <Card.Img
                variant='top'
                src={`http://image.tmdb.org/t/p/original/${poster_path}`}
              />

              <a href='#' className='card-play-btn btn'>
                <i class='fa fa-play ' aria-hidden='true'></i>
              </a>
              <div className='card-detao'>
                <i className='fa fa-star'></i>
              </div>
            </Card>
          )
        )
      })}
    </div>
  )
}
