import React from 'react'
import Title from './Title'
import { TourData } from '../data'

const Tour = () => {
  return (
    <section className="section" id="tours">
      <Title title="featured" subtitle="tours" />

      <div className="section-center featured-center">
        {TourData.map((data) => {
          return (
            <article className="tour-card" id={data.id}>
              <div className="tour-img-container">
                <img src={data.img} className="tour-img" alt="" />
                <p className="tour-date">{data.tourDate}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{data.tourTitle}</h4>
                </div>
                <p>{data.desc}</p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className="fas fa-map"></i>
                    </span>{' '}
                    {data.country}
                  </p>
                  <p>{data.time}</p>
                  <p>{data.amt}</p>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Tour
