import React from 'react'

import { carouselData } from './carouselData'

const Carousel = () => {
  return (
    <div className='carousel'>
      <h2 className='carousel-title'>Featured Products</h2>

      <div className='carousel-slider'>
        {carouselData.map(c => {
          return (
            <div
              key={c.id}
              className='carousel-item'
              style={{ backgroundImage: `url(${c.bgImg})` }}
            >
              <h2 className='carousel-heading'>{c.heading}</h2>
              <p className='carousel-text'>{c.text}</p>

              <button className='btn carousel-item-btn'>{c.btnText}</button>
            </div>
          )
        })}

        <div className='carousel-btn left-btn'>
          <i className='fa-solid fa-chevron-left'></i>
        </div>
        <div className='carousel-btn right-btn'>
          <i className='fa-solid fa-chevron-right'></i>
        </div>
      </div>
    </div>
  )
}

export default Carousel
