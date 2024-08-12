import "./Home.css"
import Component1 from './components/Component1'
import Component2 from './components/Component2'
import Component3 from './components/Component3'
import Component4 from './components/Component4'
import Component5 from './components/Component5'
import Component6 from './components/Component6'
import Footer from '../../components/Footer'
import { useEffect, useRef, useState } from "react"

const Home = () => {


   
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // smooth harakati bilan siljitadi
});


  return (
    <div className='home'>
        <Component1 />
        <Component2 />
        <Component3/>
        <Component4 />
        <Component5/>
        <Component6/>
        <Footer/>
    </div>
  )
}

export default Home