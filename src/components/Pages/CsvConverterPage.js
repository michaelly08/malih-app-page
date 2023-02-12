import React, {useState, useEffect} from 'react'
import Title from "../CsvConverterComponents/Title.jsx"
import TypeSelector from '../CsvConverterComponents/TypeSelector.jsx'
import Converter from '../CsvConverterComponents/Converter.jsx'


const CsvConverter = () => {
    const [guesserType ,setGuesserType] = useState("Emails Validator")
    return (
        <div className="container-margin">
            <Title />
            <TypeSelector guesserType={guesserType} setGuesserType={setGuesserType}/>
            <Converter />
        </div>
    )
}

export default CsvConverter