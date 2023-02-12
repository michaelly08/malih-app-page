import React, {useState, useEffect} from 'react'
import EmailGuesserSimple from "../EmailGuesserComponents/EmailGuesserSimple.jsx"
import EmailGuesserAdvanced from '../EmailGuesserComponents/EmailGuesserAdvanced'
import Title from "../EmailGuesserComponents/Title.jsx"
import TypeSelector from '../EmailGuesserComponents/TypeSelector.jsx'


const EmailGuesserPage = () => {
    const [guesserType ,setGuesserType] = useState("Simple")
    return (
        <div className="container-margin">
            <Title />
            <TypeSelector guesserType={guesserType} setGuesserType={setGuesserType}/>
            {guesserType === "Simple" ?
                <EmailGuesserSimple/> : <EmailGuesserAdvanced/>
            }
        </div>
    )
}

export default EmailGuesserPage