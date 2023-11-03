import React,{useState} from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/components/Header.css';
import Logo from "../assets/components/logo2.jpg"
const Header = () => {
  const [isOpenList, setIsOpenList] = useState(false);

  const toggleOpenList = () => {
    setIsOpenList(!isOpenList);
  };
  return (
    <div className='headerDiv'>
    <nav className="header">
      <ul className="nav-list">
        <li>
          <NavLink exact to="/" className="nav-link" activeClassName="active" style={{border:'transparent'}}>
            <img style={{ height: "50px" }} src={Logo} />
          </NavLink>
        </li>

        </ul>
        <ul className="nav-list">
        
        <li>
          <NavLink exact to="/" className="nav-link" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/Spotlight" className="nav-link" activeClassName="active">
            Spotlight
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/Blog" className="nav-link" activeClassName="active">
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/Partner" className="nav-link" activeClassName="active">
            Partner
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/ContactUs" className="nav-link" activeClassName="active">
            Contact Us
          </NavLink>
        </li>
      </ul>
    </nav>
    <div className="showBars">
          <ul>
            <li>
              <NavLink exact to="/" className="nav-link" activeClassName="active" style={{border:'transparent'}}>
                <img style={{ height: "50px" }} src={Logo} />
              </NavLink>
            </li>
          </ul>
          <div onClick={toggleOpenList}>Menu</div>
          <ul className={"openList" + (isOpenList ? ' open' : '')}>
          <li>
          <NavLink exact to="/Journals" className="nav-link" activeClassName="active">
            Journals
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/PublishWithUs" className="nav-link" activeClassName="active">
            Publish With Us
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/PublishingPatnership" className="nav-link" activeClassName="active">
            Publishing Patnership
          </NavLink>
        </li>
        
        <li>
          <NavLink exact to="/AboutUs" className="nav-link" activeClassName="active">
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/Blog" className="nav-link" activeClassName="active">
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/ContactUs" className="nav-link" activeClassName="active">
            Contact Us
          </NavLink>
        </li>
          </ul>
        </div>
    </div>
  );
};

export default Header;
