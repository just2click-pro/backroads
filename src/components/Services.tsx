import { FC } from 'react'

import { services } from '../data'

import Title from './Title'

const Services: FC = () => {
  return (
    <section id="services" className="section services">
      <Title title="our" subTitle="services" />
      <div className="section-center services-center">
        {services.map((service) => (
          <article className="service" key={service.id}>
            <span className="service-icon">
              <i className={service.icon}></i>
            </span>
            <div className="service-info">
              <h4 className="service-title">{service.title}</h4>
              <p className="service-text">{service.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Services
