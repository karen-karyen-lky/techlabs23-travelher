import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { places } from "../data"; 

const TopRatedPlaces = () => {
  /* 
  //ausgelagert in Datei data.js
  const places = [
    {
      id: 1,
      title: "Düsseldorf is the safest city",
      desc: "Discover the safest city for solo travelers...",
      img: "https://images.squarespace-cdn.com/content/v1/568045695a5668eee10c9eb2/1529527937674-6Q995P30DGB22AVCF4HA/mexico-city-horizontal.jpg?format=1500w",
    },
    {
      id: 2,
      title: "Germany is the safest country",
      desc: "Explore the safest country with solo travel options...",
      img: "https://getgoldenvisa.com/wp-content/uploads/2021/12/safest-countries-for-women-to-travel.jpg",
    },
    // Add more place objects here...
  ]; */

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };

  return (


    <div className="top-rated-places">

        <div className="header-container">
        <h1 className="huge-header">Best rated places based on users' recommendations</h1>
        </div>
        <div className="places">
        {places.map((place) => (
          <div className="place" key={place.id}>
            <div className="img">
              <img src={place.img} alt="" />
            </div>
            <div className="content">
              <h1>{place.title}</h1>
              <p>{getText(place.desc)}</p>
              <Link to={`/${place.tag}`} className="read-more-button">
                <button>Read More</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRatedPlaces;
