import React from 'react'
import Navi from './nav'
import About from './about'
import Features from './features'
import Image1 from './image1'
import Image2 from './image2'
import Pricing from './pricing'
import Rule from './rules'
import Slider from './Slider'
import Footer from './footer'
import Includes from './trip_tix_app_includes/includes'

function Home() {
    return (
        <div>
            <Navi/>
            <Slider/>
            <About/>
            <Features/>
            <Includes/>
            <Image1/>
            <Pricing/>
            <Image2/>
            <Rule/>
            <Footer/>
            <a href="#" class="back-to-top"style={{marginLeft:'90%'}}><button style={{backgroundColor:'#66b3ff'}}>
         <i class="fa fa-chevron-up fa-2x"></i></button></a>
        </div>
    )
}

export default Home
