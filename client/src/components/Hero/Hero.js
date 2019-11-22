import React from 'react';
import './Hero.scss'

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import logo from "../../assets/logo.png"

class Hero extends React.Component {

    render() {
        return(
            <section className="hero">
                <article>
                    <p>This shows some data</p>
                </article>
                <Carousel>
                    <div>
                        <img className="picture" src={logo} alt="logo" />
                    </div>
                    <div>
                        <img src={logo} alt="logo" />
                    </div>
                </Carousel>
            </section>
        )
    }
}

export default Hero;