import React from 'react'
// import Edit from '../img/edit.png'
// import Delete from '../img/delete.png'
import { Link } from 'react-router-dom'
import Menu from "../components/Menu";
import Toyko from '../img/tokyo.png';



const Tokyo = () => {

  return (
    <div className='single'>
      <div className="content">
        <img src={Toyko} alt="" />
        <div className="user">
          <div className="info">
            <span>Zahraa</span>
            <p>Posted 1 days ago</p>
          </div>
          {/* <div className="edit">
            <Link to={`/write?edit=2`}>
            <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div> */}
        </div>
        <h1>Explore Tokyo</h1>
       <p>Tokyo is the capital city of Japan and a bustling metropolis offering a plethora of activities, attractions, and cultural experiences. If you're a woman planning to travel to Tokyo, here is some essential information to help you prepare for your trip.<br></br>
        
        <br></br>

          Tokyo is generally considered a safe city, but it's always wise to take basic safety precautions while traveling. Keep a watchful eye on your personal belongings, especially in crowded places and on public transportation. Avoid isolated or dimly lit areas at night and stay aware of your surroundings.<br></br>

          <br></br>

          The city provides a wide range of accommodation options, from luxurious hotels to budget-friendly hostels and Airbnb rentals. It's advisable to select accommodation in a safe and well-connected neighborhood for easy access to major attractions and activities.<br></br>

          Tokyo boasts an extensive public transportation network, including subways, trams, and buses. It's a convenient and secure way to navigate the city. Be sure to purchase a ticket before boarding, as ticket inspections are routinely conducted.<br></br>

          <br></br>

          Tokyo offers a rich array of cultural activities and attractions. Explore the historic Asakusa district with its ancient temples and traditional shops. Take in the panoramic views from the Tokyo Skytree or Tokyo Tower. Don't miss the vibrant neighborhoods of Shinjuku and Shibuya, each with its unique charm.<br></br>

          The city is also renowned for its shopping opportunities, from the upscale stores in Ginza to the quirky boutiques in Harajuku. You'll find plenty of souvenir shops and stores showcasing local art and crafts.<br></br>

          <br></br>

          Indulge in the local cuisine and savor traditional Japanese dishes such as sushi, ramen, and tempura. Tokyo also offers a diverse range of international restaurants with various culinary delights.<br></br>

    <br></br>

      Respect cultural differences and be considerate of local customs. Tokyo is a multicultural city, and its residents are generally welcoming and polite.<br></br>
      </p>
      </div>
      <Menu />
    </div>
  );
};

export default Tokyo;