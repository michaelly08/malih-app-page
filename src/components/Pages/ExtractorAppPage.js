import React, {useState, useEffect} from 'react'
import Logo from "../img/Logo.png"

import Title from "../ExtractorAppComponents/Title.jsx"
import TypeSelector from '../ExtractorAppComponents/ExtractTypeSelector.jsx'
import Extractor from '../ExtractorAppComponents/Extractor.jsx'


const ExtractorAppPage = () => {
    const [extractType ,setExtractType] = useState("Text")
    return (
        <div className="container-margin">
            <Title />
            <TypeSelector extractType={extractType} setExtractType={setExtractType}/>
            <Extractor extractType={extractType}/>
        </div>
    )
}

export default ExtractorAppPage