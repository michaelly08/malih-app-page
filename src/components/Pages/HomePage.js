import React from 'react'
import Logo from "../img/Logo.png"
import HeroBanner from "../HomePageComponents/HeroBanner.jsx"
import HomePageApps from "../HomePageComponents/HomePageApps.jsx"


const HomePage = () => {
    return (
        <div className="homepage-container">
            <HeroBanner />
            <HomePageApps />
        </div>
    )
}

export default HomePage