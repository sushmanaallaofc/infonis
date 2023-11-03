import {React,useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
// Components
import Header from './components/header';
import Footer from './components/footer';
// Screens
import Home from './screens/home';
import Spotlight from './screens/spotLight';
import Blog from './screens/blog';
import ContactUs from './screens/contactUs';
import MobileScreen from './components/mobileScreen';
import PartnerScreen from './screens/partner';


function App() {
 
  return (      
<div className="App">
<Header/>
<div style={{    background: 'rgb(245, 245, 245)',
    height: '100%',
    width: '-webkit-fill-available',
    borderTop:'1px solid #F5F5F5',
    borderBottom:'1px solid #F5F5F5'}}>

<Routes>
<Route exact path='/' element={<Home />} />
<Route exact path='/Spotlight' element={<Spotlight />} />
<Route exact path='/Blog' element={<Blog />} />
<Route exact path='/ContactUs' element={<ContactUs />} />
<Route exact path='/Mobile' element={<MobileScreen />} />
<Route exact path='/Partner' element={<PartnerScreen />} />




</Routes>
</div>
<Footer />
</div>

  );
}



export default connect()(App);
