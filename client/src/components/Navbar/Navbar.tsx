import React, { FunctionComponent, HTMLAttributes } from 'react';
import { Link } from "react-router-dom";
import placeholderImgRect from '../../assets/images/placeholderRect.png';
import classnames from 'classnames';

import './Navbar.scss';
const links = [
  {
    to: '/',
    text: "Home",
  },
  {
    to: '/friends',
    text: "Friend List",
  },
  {
    to: '/add-friend',
    text: "Add Friend",
  },
]

const Navbar: FunctionComponent<HTMLAttributes<HTMLElement>> = ({ className }) => {
  return (
    <nav className={classnames(['Navbar', className])}>
      <div className="Navbar__logo">
        <img className="Navbar__logo-image" src={placeholderImgRect} />
        <div className="Navbar__logo-text">
          Boiler Plate friend app
        </div>
      </div>
      <ul className="Navbar__list">
        {links.map((link, i) =>
          <li key={i} className="Navbar__list-item">
            <Link to={link.to}>{link.text}</Link>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default Navbar
