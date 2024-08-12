import "./Home.css"
import Component1 from './components/Component1'
import Component2 from './components/Component2'
import Component3 from './components/Component3'
import Component4 from './components/Component4'
import Component5 from './components/Component5'
import Component6 from './components/Component6'
import Footer from '../../components/Footer'
import { useState } from "react"

const Home = () => {

 const [scroll, setScroll] = useState("scroll")

  return (
    <div className='home' style={{overflowY: scroll}}>
        <Component1 setScroll={setScroll}/>
        <Component2 setScroll={setScroll}/>
        <Component3/>
        <Component4 setScroll={setScroll}/>
        <Component5/>
        <Component6/>
        <Footer/>
    </div>
  )
}

export default Home