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
function App() {
 
  return (      
<div className="App">
<Header/>
<Routes>
<Route exact path='/' element={<Home />} />
<Route exact path='/AboutUs' element={<AboutUs />} />
<Route exact path='/Blog' element={<Blog />} />
<Route exact path='/ContactUs' element={<ContactUs />} />
<Route exact path='/Mobile' element={<MobileScreen />} />
</Routes>
<Footer />
</div>

  );
}



export default connect()(App);
