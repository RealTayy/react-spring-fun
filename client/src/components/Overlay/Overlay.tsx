import './Overlay.scss'
import React from 'react'
import miniLogoImg from '../../assets/images/miniLogo.png';
import miniLogoMonoImg from '../../assets/images/miniLogoMono.png';
import { useSpring, animated } from "react-spring";

const links = [
  {

  }
]

const Overlay = () => {
  return (
    <div className="Overlay">
      <div className="overlay__links">
        <img className="Overlay__links__logo-mono" src={miniLogoImg} alt="mini-logo" />
        <img className="Overlay__links__logo-color" src={miniLogoMonoImg} alt="mini-logo" />
      </div>
      <div className="Overlay__header">
        react-spring demo
      </div>
      <div className="Overlay__subHeader">
        by MaiCoding
      </div>
      <div className="Overlay__links">
        I am some links..?
      </div>
    </div>
  )
}

export default Overlay
