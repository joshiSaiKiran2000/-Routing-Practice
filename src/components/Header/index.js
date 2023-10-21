import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div className="header-main-container">
    <div className="header-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="waveImage"
      />
      <p>Wave</p>
    </div>
    <ul className="nav-bar-menus">
      <li>
        {' '}
        <Link to="/">Home</Link>
      </li>

      <li>
        {' '}
        <Link to="/About">About</Link>
      </li>
      <li>
        {' '}
        <Link to="/Contact">Contact Us</Link>
      </li>
    </ul>
  </div>
)

export default Header
