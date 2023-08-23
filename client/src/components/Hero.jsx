import React from 'react'
import BannerFoto from "../img/Download_Teenager_traveler_cartoon_character_vector_for_free-removebg-preview.png"


const Hero = () => {
  return (
    <div className="home-container">
      <div className="home-text-section">
        <h1 className="primary-heading"> 
          Travel Fearlessly, Journey Solo.
        </h1>
        <p className="primary-text">
        Embark on empowering adventures, as TravelHer takes you on a remarkable journey to destinations near and far.
        Unleash the wanderlust within, and experience the world through the eyes of a solo woman traveler.
        </p>
      </div>
      <div className="home-banner-container">
        <img src={BannerFoto} alt="" height="400"/>
      </div>
    </div>
  )
}

export default Hero