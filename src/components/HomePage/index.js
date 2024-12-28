import Header from "../Header"
import {Link} from "react-router-dom"
import { GiResize } from "react-icons/gi";
import { BsSmartwatch } from "react-icons/bs";
import { BiSolidWatchAlt } from "react-icons/bi";

import './index.css'


const HomePage = () => (
  <div className='home-container'>
    <Header/>
      <div className='main-header-container'>
        <h1 className="main-header">
        <span>Apple Watch Studio</span><br/>
        Choose a case.<br/>
        <span className='span2'>Pick a band.</span><br/>
          Create your own style.
        </h1>
        <button type="button" className="btn2"><Link className="link3" to="/customize">Get Started</Link></button>
      </div>
      <div className="image-container">
        <img src="https://res.cloudinary.com/dg3ufv9bj/image/upload/v1735262829/pttraligm127klg78orv.png"
        alt="apple-watch" className="watch-img"/>
        <Link to="/customize">Slide View</Link>
        <p className="watch-names">APPLE WATCH SERIES 10</p>
        <h1 className="watch-model">46mm Jet Black Aluminum Case With Black Solo Loop</h1>
        <p className="watch-price">From $429</p>
        <div className="icons-container">
           <div className="first-container"><GiResize size={17}/><p className="tags">Size</p></div>
           <div className="first-container"><BsSmartwatch size={17}/><p className="tags">Case</p></div>
           <div className="first-container"><BiSolidWatchAlt size={20}/><p className="tags">Band</p></div>
        </div>
      </div>
      <div>
    </div>
  </div>
    
 
)

export default HomePage