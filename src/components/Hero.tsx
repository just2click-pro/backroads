import { FC } from 'react'

const Hero: FC = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-banner">
        <h1>backraods app</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
          explicabo debitis est autem dicta.
        </p>
        <a href="#tours" className="btn hero-btn">
          explore tours
        </a>
      </div>
    </section>
  )
}

export default Hero
