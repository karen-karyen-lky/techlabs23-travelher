import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import Hero from "../components/Hero";
import Facts from "../components/Facts";

const Home = () => { 


  return (
    <div>
      <Hero />
      <Facts />
    </div>
  );
 } 

 export default Home;