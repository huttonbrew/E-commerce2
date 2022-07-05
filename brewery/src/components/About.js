import React from 'react'
import logo from '../images/logo.png'

const About = () => {
  return (
    <div className = "about">
        <div className = "about-center">
            <div className = "about-img">
                <img src = {logo} alt="img "/>

            </div>
            <div className = "about-details">
                <p>
                    Brewery is an ecommerce lifestyle store for the high value man.
                    It provides different styles that compliment the business man, athlete, Engineer,
                    father and son.
                </p>

            </div>


        </div> 


    </div>
  )
}

export default About