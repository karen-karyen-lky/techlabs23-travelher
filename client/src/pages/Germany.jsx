import React from 'react'
// import Edit from '../img/edit.png'
// import Delete from '../img/delete.png'
import { Link } from 'react-router-dom'
import Menu from "../components/Menu";



const Germany = () => {

  return (
    <div className='single'>
      <div className="content">
        <img src={"https://www.fitreisen.de/blog/wp-content/uploads/sites/2/2023/07/Titelbild-Sehenswuerdigkeiten-in-Deutschland-1920x1080.png"}
        alt="example" 
        style={{ width: "650px", height: "350px" }} />
        <div className="user">
          <div className="info">
            <span>Julia</span>
            <p>Posted 2 days ago</p>
          </div>
          {/* <div className="edit">
            <Link to={`/write?edit=2`}>
            <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div> */}
        </div>
        <h1>Travel Guide for Women: Discovering Germany</h1>
      <p>Germany, a land of culture, history, and breathtaking landscapes, attracts millions of travelers from around the world every year. For women planning to travel to Germany, there are some important pieces of information that can assist you in your travel preparations.</p>

      <p>Germany is a relatively safe country, but as with any travel, it's still advisable to take basic safety precautions. Keep an eye on your personal belongings, especially in crowded areas and public transportation. Avoid being alone in remote or poorly lit areas at night and remain attentive at all times.</p>

      <p>The country offers a variety of accommodation options, from luxury hotels to hostels and Airbnb rentals. It's recommended to choose accommodation in a safe and well-connected neighborhood for easy access to major attractions and activities.</p>

      <p>Germany boasts an abundance of cultural experiences. Explore the iconic Königsallee, known for its luxury shops and picturesque canal. Immerse yourself in the city's art scene by visiting renowned museums like the Kunstsammlung Nordrhein-Westfalen, which showcases an impressive collection of modern and contemporary art.</p>

      <p>Don't miss the opportunity to savor authentic German cuisine at local restaurants and beer gardens. Indulge in hearty dishes like schnitzel and bratwurst, paired with regional beers.</p>

      <p>If you're interested in fashion, Germany hosts an annual Fashion Week and is often referred to as a fashion capital. Discover local boutiques, designer stores, and vintage shops to find unique pieces that match your style.</p>

      <p>While exploring Germany's cities, take advantage of the efficient public transportation system, including trams, buses, and the U-Bahn (subway). This will help you navigate the cities easily and reach various attractions.</p>

      <p>Overall, Germany offers a captivating blend of history, culture, and modernity, making it an ideal destination for women travelers. Embrace the country's friendly atmosphere, explore charming neighborhoods, and create unforgettable memories.</p>
      </div>
      <Menu />
    </div>
  );
};

export default Germany;