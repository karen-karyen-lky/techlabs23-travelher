import React from 'react'
// import Edit from '../img/edit.png'
// import Delete from '../img/delete.png'
import { Link } from 'react-router-dom'
import Menu from "../components/Menu";
import Ddorf from '../img/Ddorf.jpg.webp';



const Duesseldorf = () => {

  return (
    <div className='single'>
      <div className="content">
        <img src={Ddorf} alt="" />
        <div className="user">
          <div className="info">
            <span>Tatjana</span>
            <p>Posted 8 days ago</p>
          </div>
          {/* <div className="edit">
            <Link to={`/write?edit=2`}>
            <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div> */}
        </div>
        <h1>Must do Düsseldorf</h1>
        <p>Düsseldorf is the capital of the German state of North Rhine-Westphalia and a vibrant city with a variety of activities, attractions, and cultural events. As a woman planning to travel to Düsseldorf, there is some important information that can assist you in your travel preparations.<br></br>
          <br></br>

          Düsseldorf is a relatively safe city, but as with any travel, it's still advisable to take basic safety precautions. Keep an eye on your personal belongings, especially in crowded areas and public transportation. Avoid being alone in remote or poorly lit areas at night and remain aware of your surroundings.<br></br>

          <br></br>

          The City offers a wide range of accommodation options, from luxury hotels to hostels and Airbnb rentals. It's recommended to choose accommodation in a safe and well-connected neighborhood for convenient access to major attractions and activities.<br></br>

          Düsseldorf boasts a well-developed public transportation system consisting of subways, trams, and buses. It's a convenient and secure way to get around the city. Make sure to purchase a ticket before boarding the transportation, as inspections are conducted.<br></br>

          <br></br>
          Düsseldorf offers a variety of cultural activities and attractions. Visit the Old Town ("the longest bar in the world") with its cozy restaurants, bars, and breweries. Explore the Rhine riverfront promenade, perfect for a stroll or relaxation. The K20 and K21 art museums, as well as the Media Harbor architecture, are other highlights you shouldn't miss.<br></br>

          The City is also renowned for its shopping opportunities, especially the Königsallee ("Kö") with its exclusive boutiques and stores. In the Old Town, you'll find numerous souvenir shops and stores featuring local art and crafts.<br></br>
          <br></br>

          Indulge in the regional cuisine and savor typical German dishes such as Rheinischer Sauerbraten, Himmel und Äd (mashed potatoes with blood sausage), or Rheinischer Döppekooche (potato casserole). The Old Town also hosts international restaurants with a variety of culinary offerings.<br></br>

          <br></br>
          Pay attention to cultural differences and be respectful towards the locals and their traditions. Düsseldorf is a multicultural city, and its people are generally open and friendly.<br></br>
      </p>
      </div>
      <Menu />
    </div>
  );
};

/* Bildquelle: https://a.cdn-hotels.com/gdcs/production61/d1121/6dfd3cfe-d31b-4514-b3af-aee8536223d1.jpg */

export default Duesseldorf;