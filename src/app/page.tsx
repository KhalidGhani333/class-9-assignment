
import React from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Project from './components/project';
import Extension from './components/extension';
import Customise from "./components/customise"
import Ourwork from './components/ourwork';
import Oursponsers from './components/oursponsers';
import Footer from './components/footer';


const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Project/>
      <Extension/>
      <Customise/>
      <Ourwork/>
      <Oursponsers/>
      <Footer/>

    </div>
  )
}

export default Home
