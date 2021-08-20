import React from 'react'
import footielogo from '../src/footielogo.png'
import './Home.css';
import { IoIosNotificationsOutline } from "react-icons/io";
import { Slide } from 'react-slideshow-image';

const Home=()=>{
    const slideImages = [
       'src/bac.jpg',
       'src/bac.jpg',
       'src/bac.jpg',


      ];
    return(
        <>
        <div className="MainHomeDiv">
            {/* <div className="Homediv"> */}
                <img src={footielogo}/>
                <h5 className="dic">Dicover</h5>
                <h5 className="work">How its Work</h5>
                <div style={{flexDirection:'row'}}>
                    <input placeholder="Search"/>
                    {/* <BiSearch style={{marginRight:}}/> */}

                </div>
                <IoIosNotificationsOutline className="icon"/>
                <button type="button" className="uploadButton">UPLOAD</button>
                <button type="button" className="CONNECT">CONNECT WALLET</button>



            {/* </div> */}
           
            
        
        </div>
        <div>
        <div>
        <Slide easing="ease">
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
              <span>Slide 1</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
              <span>Slide 2</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
              <span>Slide 3</span>
            </div>
          </div>
        </Slide>
      </div>
        </div>
</>
    )
}
export default Home