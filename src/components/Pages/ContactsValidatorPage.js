import React, {useState, useEffect} from 'react'
import Title from "../ContactsValidatorComponents/Title.jsx"
import TypeSelector from '../ContactsValidatorComponents/TypeSelector.jsx'
import Validator from '../ContactsValidatorComponents/Validator.jsx'



const CsvConverter = () => {
    const [extractType ,setExtractType] = useState("Text")
    return (
        <div className="container-margin">
            <Title />
            <TypeSelector extractType={extractType} setExtractType={setExtractType}/>
            <Validator extractType={extractType}/>
        </div>
    )
}

export default CsvConverter