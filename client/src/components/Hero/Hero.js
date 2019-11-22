import React from 'react';
import './Hero.scss'

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import companiesPic from "../../assets/companies-that-offer.png";
import shutter from "../../assets/shutterstock.jpg";
import screenShot from "../../assets/screenShot.png"

class Hero extends React.Component {

    render() {
        return(
            <section className="hero">
                <Carousel>
                    <div>
                        <img className="picture" src={companiesPic} alt="companies" />
                        <p className="p-tag">Education company Chegg is helping pay down its employees’ student loan debt</p>
                        <p>seijas</p>
                    </div>
                    <div>
                        <img src={shutter} alt="shutter" />
                        <p className="p-tag">This 1 Thing Could Change The Way You Pay Off Student Loans</p>
                    </div>
                    <div>
                        <img src={screenShot} alt="screens" />
                        <p className="p-tag">Networking Tips for Graduate Students</p>
                    </div>
                </Carousel>
            </section>
        )
    }
}

export default Hero;