import React, { useState, useMemo } from 'react'
// Import css files
import Slider from 'react-slick'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../Navbar/Navbar.scss'
import Classes from '../Home/banner.scss'

export default function Banner () {
  const [data, SetData] = useState('')

  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/discover/tv?api_key=6dc6c49bbf2472d2ed11bbff69a28ad1'
    )
      .then(response => response.json())
      .then(data => SetData(data.results), [])
  }, [])

  var settings = {
    dots: false,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 2000,
    autoplayspeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1
  }
  return (
    <div style={{ height: '757px' }}>
      <div className='sliderWrapper'>
        <Slider {...settings}>
          {Array.from(data).map(
            (
              { backdrop_path, vote_average, first_air_date, name, overview },
              id
            ) =>
              backdrop_path && (
                <div key={id}>
                  <div className='banner-wrapper '>
                    <div
                      style={{
                        background: `url(http://image.tmdb.org/t/p/original/${backdrop_path}) rgb(0 0 0 / 50%) no-repeat`,
                        minHeight: '760px',
                        backgroundBlendMode: 'multiply',
                        backgroundPosition: 'top center',
                        display: 'flex',
                        backgroundSize: '100% 760px',
                        alignItems: 'center'
                      }}
                    >
                      <div className='container '>
                        <div className='row'>
                          <Link to='/'>
                            <div className='overlay-detail col-lg-9'>
                              <div className='movie-detail'>
                                <ul>
                                  <li>
                                    <span className='star'>
                                      <i
                                        className='fa fa-star text-danger'
                                        style={{ marginRight: '10px' }}
                                      ></i>
                                      {vote_average}
                                    </span>
                                  </li>
                                  <li>
                                    <span className='release_date'>
                                      {new Date(first_air_date).getFullYear()}
                                    </span>
                                  </li>
                                  <li>
                                    <span className='season'>2 Seasons</span>
                                  </li>
                                </ul>
                              </div>
                              <div className='movie-title'>
                                <div className='movie-name'>
                                  {name.toUpperCase()}
                                </div>
                                <div className='movie-overview'>
                                  {overview.substring(0, 200)}
                                </div>
                              </div>
                              <div className='banner_buttons'>
                                <a className='btn btn-watch' href=''>
                                  <i
                                    class='fa fa-play mr-3'
                                    aria-hidden='true'
                                  ></i>
                                  <span> WATCH</span>
                                </a>
                                <a className='btn btn-addList' href=''>
                                  <i
                                    className='fa fa-plus-square-o mr-3'
                                    aria-hidden='true'
                                  ></i>
                                  <span> ADD TO LIST</span>
                                </a>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
          )}
        </Slider>
      </div>
    </div>
  )
}
