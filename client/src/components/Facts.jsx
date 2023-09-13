import React from 'react'
import JoinUsFoto from "../img/join_us.jpeg";
import Strand from '../img/Strand.jpg';
import Wald from '../img/Wald.jpg';
import Wasser from '../img/Wasser.jpg';


const Facts = () => {
  return (
    <div className='facts'>
        <div class="dot-container">
            <span class="dot">
                <h2 className='incircle'>76%</h2>
            </span>
            <span class="dot"><h2 className='incircle'>85%</h2></span>
            <span class="dot"><h2 className='incircle'>12%</h2></span>
            <span class="dot"><h2 className='incircle'>88%</h2></span>
            <span class="dot"><h2 className='incircle'>97%</h2></span>
        </div>
        <div className='description'>
            <ul class="horizontal-list">
            <li>people want to travel alone</li>
            <li>solo traveler are women</li>
            <li>women have been physically attacked/threaten</li>
            <li>women felt unsafe while travelling alone</li>
            <li>women felt they have no physical skills to define themselves</li>
            </ul>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
          <div>
            <div class="bild-container">
          <img src={Strand} alt="Strand" id="Strand" className="polaroid" />
          <br></br>
          <img src={Wald} alt="Wald" id="Wald" className="polaroid"/>
          <br></br>
          <img src={Wasser} alt="Wasser" id="Wasser" className="polaroid"/>
          <br></br>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
            <h3>Welcome to TravelHer:<br></br> 
                Stories from Adventurous Women</h3>
                <br></br>  
                <span>
                Traveling is not just about exploring the world; it's also a journey to discover oneself.<br></br>Our website is the safe haven for all the fearless women out there who love to venture out into the world on their own. <br></br><br></br>Here, we aim to collect stories from women who have embarked on solo journeys to experience adventures, explore cultures, and empower themselves.<br></br>
              </span>
          </div>
          <br></br> <br></br>
            <div class="container">
                <div class="element">
                    <p class="initial-text">Why travel alone?</p>
                    <p class="additional-text">Traveling alone is a transformative experience that can expand your horizons and strengthen your independence.<br></br> It allows you to make your own decisions, forge new friendships, and experience moments of self-reflection that are only possible on such journeys</p>
                </div>
                <div class="element">
                    <p class="initial-text">Our Diversity</p>
                    <p class="additional-text">Whether you're an experienced adventurer or just starting to explore the world – there's a place for you here. <br></br>We welcome women of all ages, ethnic backgrounds, and experience levels. <br></br>Our community is diverse, just like the places we explore</p>
                </div>
                <div class="element">
                    <p class="initial-text">What We're Looking For</p>
                    <p class="additional-text">We encourage women to share their stories and experiences on our pages. <br></br>This could be a travel diary from your recent adventure, a guide to safe solo travel, or a deep dive into the cultural experiences you've had.<br></br>We believe that every story is inspiring and can encourage other women to embark on their own journeys.</p>
                </div>
            </div>
        <br></br>
            <div class="container">
                <div class="element">
                    <p class="initial-text">Share Your Contribution</p>
                    <p class="additional-text">Would you like to share your travel story?<br></br> It's easy! Click on "Submit a Post" and upload your article.<br></br>Our editorial team will review it and provide feedback before it's published. We want to ensure that every story gets the attention it deserves.</p>
                </div> 
                <div class="element">
                    <p class="initial-text">Our Vision</p>
                    <p class="additional-text">Our vision is to empower women to explore the world, building confidence, tolerance, and cultural understanding along the way.<br></br>Traveling alone can be a life-changing experience, and we're here to support women on that journey.</p>
                </div> 
                <div class="element">
                    <p class="initial-text">Come, Join Us</p>
                    <p class="additional-text">We invite you to become a part of our community and be inspired by the stories and adventures shared here. <br></br>Whether you're just starting out or you're already an experienced solo traveler, you're welcome here.</p>
                </div> 
        
    </div>
    
    <div className="home-container-flip">
        <div className="home-banner-container-flip">
        <img src={JoinUsFoto} alt="" height="350"/>
        </div>

        <div className="home-text-section-flip">
            <h1 className="primary-heading"> 
                Join Us
            </h1>
            <p className="primary-text">
            Come aboard this exhilarating journey as we celebrate the world,  <br></br>
            embrace our own selves,and discover the empowering essence of solo travel!</p>
        </div>
    </div>

    </div>
        );
    };
    


export default Facts