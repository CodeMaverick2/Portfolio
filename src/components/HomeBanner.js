import React from 'react';
import "./HomeBannerStyle.css";
import cartoon from "../images/profile.png";
import resume from "../images/Resume.pdf";  

export default function HomeBanner({ id }) {
  return (
    <div className="home" id={id}> 
      <div className='content'>
        <div className="wrapper">
          <div className="name">Tejas Ghatule</div>
          <div className="staticTitle">
            Adrenaline-Fueled
          </div>
          <ul className="dynamicTitle">
            <li>+<span>Developer</span></li>
          </ul>
          <a className='btn' href={resume} download="Tejas_Ghatule_Resume.pdf" target="_blank" rel="noopener noreferrer">
            Download Resume
          </a>
        </div>
      </div>
      <div className="mask">
        <img className='bg' src={cartoon} alt="boy-with-laptop" />
      </div>
    </div>
  );
}
