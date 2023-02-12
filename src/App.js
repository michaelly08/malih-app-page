import {useState, useEffect} from 'react'

import "./styles.css"
import Navbar from "./components/Navbar.jsx"
import {Link, Switch, Route, Routes, BrowserRouter} from "react-router-dom";


import HomePage from "./components/Pages/HomePage.js"
import EmailGuesserPage from "./components/Pages/EmailGuesserPage.js"
import ExtractorAppPage from "./components/Pages/ExtractorAppPage.js"
import CsvConverter from "./components/Pages/CsvConverterPage.js"
import ContactsValidator from "./components/Pages/ContactsValidatorPage.js"





function App() {

    

 
return (
        <BrowserRouter>
            <div className="app">
                <Navbar/>
                <Routes>
                    <Route path="/" exact element={<HomePage />}/>
                    <Route path="/email-guesser" exact element={<EmailGuesserPage />}/>
                    <Route path="/extractor-app" exact element={<ExtractorAppPage />}/>
                    <Route path="/csv-converter" exact element={<CsvConverter />}/>
                    <Route path="/contacts-validator" exact element={<ContactsValidator />}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
