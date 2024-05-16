import React from 'react'
import Title from './Title'
import { serviceArticle } from '../data'

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="our" subtitle="services" />
      <div className="section-center services-center">
        {serviceArticle.map((article) => {
          return (
            <article className="service" id={article.id}>
              <span className="service-icon">
                <i className={article.icon}></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">{article.title}</h4>
                <p className="service-text">{article.text}</p>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Services
