import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

<Link to="duesseldorf.jsx">Go to Your Page</Link>

const Blog = () => { 
    // const [posts, setPosts] = useState([]);

  // const cat = useLocation().search

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await axios.get(`/posts${cat}`);
  //       setPosts(res.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   fetchData();
  // }, [cat]);

  const posts = [
    {
      id: 1,
      title: "Top solo place recommended!",
      desc: "Düsseldorf, Copenhagen, Munich, etc.",
      img: "https://as1.ftcdn.net/v2/jpg/01/82/52/58/1000_F_182525816_1Nxshlre0x74QHnvcd20ssOJmbOvQDrH.jpg",
    },
    {
      id: 2,
      title: "Must do Düsseldorf",
      desc: "Learn the top tips from the local about the hipes city Düsseldorf. etc...",
      img: "https://a.cdn-hotels.com/gdcs/production61/d1121/6dfd3cfe-d31b-4514-b3af-aee8536223d1.jpg",
    },
    {
      id: 3,
      title: "Tips to travel as solo.",
      desc: "Curious about how solo trips works? Here is the best tips from our most of ours users.",
      img: "https://i0.wp.com/alexonthemap.com/wp-content/uploads/2019/02/woman-looking-at-hot-air-balloons-3278215.jpg?fit=1280%2C853&ssl=1",
    }
  ];

  const getText = (html) =>{
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }


  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="" />
            </div>
            <div className="content">
              {/* Link Titelüberschriften */}
              {post.id === 1 ? (
              <Link className="link" to={`/distributetsp`}>
                <h1>{post.title}</h1>
              </Link>
              ) : post.id === 2 ? (<Link className="link" to={`/duesseldorf`}>
                <h1>{post.title}</h1>
              </Link>)
              :
              (<Link className="link" to={`/duesseldorf`}>
                <h1>{post.title}</h1>
              </Link>
              )
              }

{/* Testblock */}


               {/* Link Read More Buttons */}
              <p>{getText(post.desc)}</p>
              {post.id === 1 ? (
                <Link to="/distributetsp" className="read-more-button">
                  <button>Read More</button>
                </Link>
              ) : post.id === 2 ? (
                <Link to= "/duesseldorf" className="read-more-button">
                  <button>Read More</button>
                </Link>
              ) : (
                <Link to="/duesseldorf" className="read-more-button">
                  <button>Read More</button>
                </Link>
              )
              }

              

            
            </div>
          </div>
        ))}
      </div>
    </div>
  );
 } 


 /* Old code from lamblog */
/*  return (
  <div className="home">
    <div className="posts">
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <div className="img">
            <img src={post.img} alt="" />
          </div>
          <div className="content">
            <Link className="link" to={`/post/${post.id}`}>
              <h1>{post.title}</h1>
            </Link>
            <p>{getText(post.desc)}</p>
            {post.id === 2 ? (
              <Link to="/dusseldorf">Must do Düsseldorf</Link>
            ) : (
              <Link to={`/post/${post.id}`}>Read More</Link>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
);
}; */

 export default Blog;