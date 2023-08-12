import React from 'react'
import Edit from '../img/edit.png'
import Delete from '../img/delete.png'
import { Link } from 'react-router-dom'
import Menu from "../components/Menu";
import Toppic from '../img/toprated.jpg';



function UsersIndexPage({ users }) {
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={user.id}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

const Distributetsp = () => {

  return (
    <div className='home'>
      <div className="post">
        <img src={Toppic} alt="" />
     
        <h1>Top Solo Places Recommended by Users</h1>
		<br></br>
		<h2>1. Best Rated Cities</h2>
		<br></br>
		<p>... is the safest rated city based on our blogs</p>
		<br></br>
		<p>... is the most rated city based on our blogs</p>
		<br></br>
		<br></br>
		<h2>2. Best Rated Countries</h2>
		<br></br>
		<p>... is the safest rated country based on our blogs</p>
		<br></br>
		<p>... is the most rated country based on our blogs</p>
		<br></br>
		<br></br>
        
      </div>
     {/*  <Menu /> */}
    </div>
  );
};

export default Distributetsp;