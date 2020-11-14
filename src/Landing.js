import React from "react";
import "./landing.css";
import { CubeGrid } from 'styled-loaders-react'
function Landing({ handleLogout }) {
  return (
    <div className="hero">
        <nav>
        <h2>welcome</h2>
        <div>
        <button className="neon">
        {" "}
        <span onClick={handleLogout}>log out</span>
      </button>
        </div>
 
        </nav>
        <div className="preloader">
			Developed by: Vaibhav Tiwari
			<div> <br/>	
			<CubeGrid size="80px" color="white"/>
			

			</div>
	
		</div>
  
    </div>
  );
}

export default Landing;
