import React from 'react'
import Logo from "../img/Logo.png"
import HeroBannerImg from "../img/HeroBanner.png"
import FirstApp from "../img/EmailGuesserImage.png"
import SecondApp from "../img/ValidateContactsImage.png"
import ThirdApp from "../img/CsvConverterImage.png"





const HeroBanner = () => {
    return (
            <section className="homepage-wrapper">
                <div className="homepage-hero">
                    <div className="homepage-hero-titles">
                        <div className="homepage-hero-title">
                            {/* <img src={Logo}></img> */}
                            <div>Malih.ai <span className="gradient-text">Apps</span></div>
                        </div>

                        <div className="homepage-hero-subtitle">
                            <div>Apps that help your company</div>
                        </div>

                        <a className="homepage-hero-button" href="#apps-section">
                            Explore Apps
                        </a>
                    </div>
                    <div className="homepage-hero-image">
                        <img src={HeroBannerImg} className="hero-image"></img>
                    </div>

                    {/* <img src={FirstApp} className="herobanner-images image1"></img>
                    <img src={SecondApp} className="herobanner-images image2"></img>
                    <img src={ThirdApp} className="herobanner-images image3"></img> */}



                </div>
                <div className="wave wave1"></div>
                <div className="wave wave2"></div>
                <div className="wave wave3"></div>
            </section>
    )
}

export default HeroBanner