import {React,useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
// Components
import Header from './components/header';
import Footer from './components/footer';
// Screens
import Home from './screens/home';
import AboutUs from './screens/aboutUs';
import Blog from './screens/blog';
import ContactUs from './screens/contactUs';
import MobileScreen from './components/mobileScreen';
import Spotlight from './components/spotlight';
import PartnerShip from './components/partnerShip';
import Deliver from './components/deliver';

function App() {
 
  return (      
<div className="App">
<Header/>
<div style={{    background: 'rgb(245, 245, 245)',
    padding: 10,
    height: '100%',
    width: '100%'}}>

<Routes>
<Route exact path='/' element={<Home />} />
<Route exact path='/AboutUs' element={<AboutUs />} />
<Route exact path='/Blog' element={<Blog />} />
<Route exact path='/ContactUs' element={<ContactUs />} />
<Route exact path='/Mobile' element={<MobileScreen />} />
<Route exact path='/Spotlight' element={<Spotlight />} />
<Route exact path='/Partnership' element={<PartnerShip />} />
<Route exact path='/Deliver' element={<Deliver />} />




</Routes>
</div>
<Footer />
</div>

  );
}



export default connect()(App);
