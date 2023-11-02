import React from 'react';
import '../styles/components/Footer.css';
import Logo from "../assets/components/Logo.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faEnvelopeOpen, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import Send from '../assets/components/telegram.png';
import facebookImg from '../assets/components/facebook.png';
import twitterImg from '../assets/components/twitter.png';
import instaImg from '../assets/components/instagram.svg';
import linkedinImg from '../assets/components/linkedin.png';
import playstore from '../assets/components/playstore.webp';
import appstore from '../assets/components/appStore.webp';
import { NavLink } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="footer-section">
        <div className="row" style={{padding:20}}>
            
            <div className='col-lg-4 col-6' style={{textAlign:'center'}}>
            <div className='linksHeader'>Useful Links</div>
            <div className='d-flex justify-content-center linksSection'>
                <div className='leftLinks' >
                  <ul>
                    <li>
                        About
                    </li>
                    <li>
                        Careers
                    </li>
                    <li>
                        Blog
                    </li>
                    <li>
                        Press
                    </li>
                    <li>
                        Lead
                    </li>
                    <li>
                        Value
                    </li>
                  </ul>
                </div>
                <div className='rightLinks'>
                <ul>
                    <li>
                        Privacy
                    </li>
                    <li>
                        Terms
                    </li>
                    <li>
                        FAQs
                    </li>
                    <li>
                        Security
                    </li>
                    <li >
                    <NavLink exact to="/Mobile" className="nav-link" activeClassName="active">
            Mobile
          </NavLink>
                    </li>
                    <li>
                        Contact
                    </li>
                  </ul>
                </div>
            </div>
            </div>
            <div className='col-lg-4 col-6' style={{textAlign:'center'}}>
            <div className='linksHeader'>Categories</div>
            <div className='d-flex justify-content-center linksSection'>
                <div className='leftLinks' >
                  <ul>
                    <li>
                        Vegetables & Fruits
                    </li>
                    <li>
                    Cold Drinks & Juices
                    </li>
                    <li>
                    Paan Corner
                    </li>
                    <li>
                    Dairy & Breakfast
                    </li>
                    <li>
                    Chicken, Meat & Fish
                    </li>
                    <li>
                    Atta, Rice & Dal
                    </li>
                  </ul>
                </div>
                <div className='rightLinks'>
                <ul>
                    <li>
                    Tea, Coffee & Health Drinks
                    </li>
                    <li>
                        
                    Munchies
                    </li>
                    <li>
                    Home & Office
                    </li>
                    <li>
                    Sauces & Spreads
                    </li>
                    <li>
                    Instant & Frozen Food
                    </li>
                    <li>
                        
                    Books
                    </li>
                  </ul>
                </div>
            </div>
            </div>
            <div className='col-lg-4 col-6' style={{textAlign:'center'}}>
            <div className='linksHeader'>Other Links</div>
            <div className='d-flex justify-content-center linksSection'>
                <div className='leftLinks' >
                  <ul>
                    <li>
                        Link1
                    </li>
                    <li>
                        Link2
                    </li>
                    <li>
                        Link3
                    </li>
                    <li>
                        Link4
                    </li>
                    <li>
                        Link5
                    </li>
                    <li>
                        Link6
                    </li>
                  </ul>
                </div>
                <div className='rightLinks'>
                <ul>
                    <li>
                        Link1
                    </li>
                    <li>
                        Link2
                    </li>
                    <li>
                        Link3
                    </li>
                    <li>
                        Link4
                    </li>
                    <li>
                        Link5
                    </li>
                    <li>
                        Link6
                    </li>
                  </ul>
                </div>
            </div>
            </div>
           
        </div>
        <div className='d-flex justify-content-around align-items-center' style={{padding:20}}>
            <div className='d-flex align-items-center'>
            <div style={{fontWeight:500,marginRight:20}}>Download App</div>
            <div>
                <img style={{width:92,height:30,marginRight:20}}  src={playstore}/>
            </div>
            <div>
                <img style={{width:92,height:30}}  src={appstore}/>
            </div>
            </div>
            <div>
            <div className="d-flex">
                               <div style={{marginRight:20,cursor:'pointer'}}>
                                <img src={facebookImg} />
                               </div>
                               <div style={{marginRight:20,cursor:'pointer'}}>
                                <img src={twitterImg} />
                               </div>
                               <div style={{cursor:'pointer'}}>
                                <img style={{width:50,height:50}} src={instaImg} />
                               </div>
            </div>
            </div>
                    
        </div>
        
        <div className="copyright-area">
            
            <div className="copyright-text">
                            <p>Copyright &copy; 2023, All Right Reserved <a href="">Infinis</a></p>
                        </div>
           
        </div>
    </footer>
  );
};

export default Footer;
