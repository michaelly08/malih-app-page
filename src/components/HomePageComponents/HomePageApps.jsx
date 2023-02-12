import React from 'react'
import EmailGuesserImage from "../img/EmailGuesserImage.png"
import ExtractContactsImage from "../img/ExtractContactsImage.png"
import CsvConverterImage from "../img/CsvConverterImage.png"
import ValidateContactsImage from "../img/ValidateContactsImage.png"


import {Link} from "react-router-dom"

const HomePageApps = () => {
    return (
        <div className="homepage-apps-wrapper" id="apps-section">
            <div className="homepage-apps-title">
                Explore Malih Apps
            </div>
            <div className="homepage-apps-apps">
                <AppTemplate 
                    linkTo="/email-guesser" 
                    name="Email Guesser" 
                    description="Guess for emails based on information given and validate which emails are active and which are not."
                    image={EmailGuesserImage}
                />

                <AppTemplate 
                    linkTo="/extractor-app" 
                    name="Extractor App" 
                    description="Extract contacts such as emails/phone numbers or websites from text or CSV files. Emails can be validated."
                    image={ExtractContactsImage}
                />

                <AppTemplate 
                    linkTo="/csv-converter" 
                    name="Xlsx to CSV"
                    description="Mass convert xlsx files into csv files."
                    image={CsvConverterImage}
                />

                <AppTemplate 
                    linkTo="/contacts-validator" 
                    name="Contacts Validator"
                    description="This app will help you validate contacts to see which is active and which is an inactive contact."
                    image={ValidateContactsImage}
                />


                
            </div>
        </div>
    )
}

export default HomePageApps






const AppTemplate = ({linkTo, name, description, image}) => {
    return (
        <Link to={linkTo} style={{textDecoration: "none"}} className="homepage-apps-box" onClick={() => {window.scrollTo({top: 0, left: 0})}}>
            <div className="homepage-apps-name">
                {name}
            </div>
            <div className="homepage-apps-description">
                {description}
            </div>
            <img src={image} className="homepage-apps-image"></img>
        </Link>
    )
}
