import React, {useState, useEffect} from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { CSVLink } from 'react-csv';


const Inputs = () => {
    const [first, setFirst] = useState("")
    const [last, setLast] = useState("")
    const [birthday, setBirthday] = useState("")
    const [generateEmailButton, setGenerateEmailButton] = useState(false)
    const [checked, setChecked] = useState([]);
    const [searchTerm, setSearchTerm] = useState("")
    const [searchActive, setSearchActive] = useState(false)
    const [urlInputs, setUrlInputs] = useState({});
    const [numberOfUrlInputs, setNumberOfUrlInputs] = useState(2)
    const [selectAll, setSelectAll] = useState(false)
    const [activeEmails, setActiveEmails] = useState([])
    const [inactiveEmails, setInactiveEmails] = useState([])
    const [errorEmails, setErrorEmails] = useState([])
    const [validating, setValidating] = useState(false)
    const [selectAllActive, setSelectAllActive] = useState(false)
    const [validatingAmount, setValidatingAmount] = useState(0)

    


    let exportArray = [["Emails"]]
    let finalResults = []
    let companyUrls = []

    
    useEffect(() => {
        setGenerateEmailButton(false)
        setChecked([])
        setSearchActive(false)
        setSearchTerm("")
        setSelectAll(false)
        setActiveEmails([])
        setInactiveEmails([])
        setErrorEmails([])
    }, [first, last, birthday, urlInputs, numberOfUrlInputs])

    



    const handleCheck = (event) => {
        var updatedList = [...checked];
        if (event.target.checked) {
        updatedList = [...checked, event.target.value];
        } else {
        updatedList.splice(checked.indexOf(event.target.value), 1);
        }
        setChecked(updatedList);
        setSelectAll(false)
    };


    const splitStr = (string) => {
        if (string.indexOf("https://") !== -1) {
            string = string.replace("https://", "")
        }
        if (string.indexOf("http://") !== -1) {
            string = string.replace("http://", "")
        }
        if (string.indexOf("www.") !== -1) {
            string = string.replace("www.", "")
        }
        if(string.indexOf("/") !== -1) {
            string = string.split("/")[0]
        }
        return string
    }

    
    
    if (Object.keys(urlInputs).length > numberOfUrlInputs - 1) {
        for (let i = Object.keys(urlInputs).length; i > numberOfUrlInputs - 1; i--){
            delete urlInputs[`field${i}`]
        }
    }



    const handleUrlInput = (e) => {
            setUrlInputs(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
        }

    

    for (const [key, value] of Object.entries(urlInputs)) {
    companyUrls.push(splitStr(value).toLowerCase())
    }
    


    let structure = ["first!!", "f!!last!!", "f!!.last!!", "f!!_last!!", "last!!f!!", "last!!.f!!", "last!!_f!!", "l!!first!!", "l!!.first!!", "l!!_first!!", "first!!l!!", "first!!.l!!", "first!!_l!!", "last!!first!!", "last!!.first!!", "last!!_first!!", "first!!last!!", "first!!.last!!", "first!!_last!!", "first!!last!!1", "first!!last!!.1", "f!!last!!1", "f!!last!!.1", "first!!.last!!1", "first!!.last!!.1"]

    

    if (birthday.length === 4) {
        structure.push("last!!first!!" + birthday)
        structure.push("first!!last!!" + birthday)
        structure.push("f!!last!!" + birthday)
        structure.push("f!!.last!!" + birthday)
        structure.push("f!!_last!!" + birthday)
        structure.push("first!!.l!!" + birthday)
        structure.push("first!!_l!!" + birthday)
        structure.push("last!!.first!!" + birthday)
        structure.push("first!!.last!!" + birthday)
        structure.push("last!!_first!!" + birthday)
        structure.push("first!!_last!!" + birthday)
        structure.push("last!!first!!" + birthday.substr(2))
        structure.push("first!!last!!" + birthday.substr(2))
        structure.push("f!!last!!" + birthday.substr(2))
        structure.push("f!!.last!!" + birthday.substr(2))
        structure.push("f!!_last!!" + birthday.substr(2))
        structure.push("first!!.l!!" + birthday.substr(2))
        structure.push("first!!_l!!" + birthday.substr(2))
        structure.push("last!!.first!!" + birthday.substr(2))
        structure.push("first!!.last!!" + birthday.substr(2))
        structure.push("last!!_first!!" + birthday.substr(2))
        structure.push("first!!_last!!" + birthday.substr(2))
        structure.push("last!!first!!." + birthday)
        structure.push("first!!last!!." + birthday)
        structure.push("f!!last!!." + birthday)
        structure.push("f!!.last!!." + birthday)
        structure.push("f!!_last!!." + birthday)
        structure.push("first!!.l!!." + birthday)
        structure.push("first!!_l!!." + birthday)
        structure.push("last!!.first!!." + birthday)
        structure.push("first!!.last!!." + birthday)
        structure.push("last!!_first!!." + birthday)
        structure.push("first!!_last!!." + birthday)
        structure.push("last!!first!!_" + birthday)
        structure.push("first!!last!!_" + birthday)
        structure.push("f!!last!!_" + birthday)
        structure.push("f!!.last!!_" + birthday)
        structure.push("f!!_last!!_" + birthday)
        structure.push("first!!.l!!_" + birthday)
        structure.push("first!!_l!!_" + birthday)
        structure.push("last!!.first!!_" + birthday)
        structure.push("first!!.last!!_" + birthday)
        structure.push("last!!_first!!_" + birthday)
        structure.push("first!!_last!!_" + birthday)
        structure.push("last!!first!!." + birthday.substr(2))
        structure.push("first!!last!!." + birthday.substr(2))
        structure.push("f!!last!!." + birthday.substr(2))
        structure.push("f!!.last!!." + birthday.substr(2))
        structure.push("f!!_last!!." + birthday.substr(2))
        structure.push("first!!.l!!." + birthday.substr(2))
        structure.push("first!!_l!!." + birthday.substr(2))
        structure.push("last!!.first!!." + birthday.substr(2))
        structure.push("first!!.last!!." + birthday.substr(2))
        structure.push("last!!_first!!." + birthday.substr(2))
        structure.push("first!!_last!!." + birthday.substr(2))
        structure.push("last!!first!!_" + birthday.substr(2))
        structure.push("first!!last!!_" + birthday.substr(2))
        structure.push("f!!last!!_" + birthday.substr(2))
        structure.push("f!!.last!!_" + birthday.substr(2))
        structure.push("f!!_last!!_" + birthday.substr(2))
        structure.push("first!!.l!!_" + birthday.substr(2))
        structure.push("first!!_l!!_" + birthday.substr(2))
        structure.push("last!!.first!!_" + birthday.substr(2))
        structure.push("first!!.last!!_" + birthday.substr(2))
        structure.push("last!!_first!!_" + birthday.substr(2))
        structure.push("first!!_last!!_" + birthday.substr(2))
        
    }



    for (var j = 0; j < companyUrls.length; j++) {
        for (let i = 0; i < structure.length; i++) {
            if (structure[i].indexOf("first!!") !== -1) {
                structure[i] = structure[i].replace("first!!", first)
            }
            if (structure[i].indexOf("last!!") !== -1) {
                structure[i] = structure[i].replace("last!!", last)
            }
            if (structure[i].indexOf("f!!") !== -1) {
                structure[i] = structure[i].replace("f!!", first[0])
            }
            if (structure[i].indexOf("l!!") !== -1) {
                structure[i] = structure[i].replace("l!!", last[0])
            }
        }

        if(companyUrls[j].indexOf(".") !== -1) {
            for (let i = 0; i < structure.length; i++) {
                let fullName = structure[i]

                fullName = structure[i]+ "@" +companyUrls[j]
                finalResults.push(splitStr((fullName).toLowerCase()))
            }
        }
    }
    
    

    
    
    const generateButton = (e) => {
        if (first.length >= 2 && last.length >= 2 && companyUrls[0] && companyUrls[0]?.indexOf(".") !== -1) {
            e.preventDefault()
            setGenerateEmailButton(true)
        }
        else {
            e.preventDefault()
            setGenerateEmailButton(false)
        }
    }



    const searchResult = finalResults.filter((text) => text.includes(searchTerm))
    
    
    
    for (let i = 0; i < checked.length; i++) {
        exportArray.push(checked[i].split())
    }

    const searchButtonAllow = () => {
        if (first.length >= 2 && last.length >= 2 && companyUrls[0] && companyUrls[0]?.indexOf(".") !== -1 && generateEmailButton === true) {
            setSearchActive(!searchActive)
        }
        if (searchActive) {
            setSearchTerm("")
        }
    }

    const emailChecked = (email) => {
        if(checked.includes(email)) {
            return true
        }
        return false
    }

    let indents = []

    const returnUrlInput = () => {
        for (let i = 2; i < numberOfUrlInputs; i++) {
            indents.push(
                <React.Fragment key={i}>
                    <label key={i}>Company URL {i} (optional)</label>
                    <input type="text" name={`field${i}`} placeholder="e.g. reesby.com.au" onChange={handleUrlInput} key={`field${i}`}></input>
                </React.Fragment>
            )
        }
        return indents
    }


    const handleSelectAll = () => {
        if(!selectAll) {
            setChecked(searchResult)
            setSelectAll(true)
            setSelectAllActive(false)
        }
        if(selectAll) {
            setChecked([])
            setSelectAll(false)
            setSelectAllActive(false)
        }
    }
    


    const handleValidate = async () => {
        let amountSoFar = 0
        setValidatingAmount(0)
        setValidating(true)
        let active = []
        let inactive = []
        let error = []
        
        for (let i = 0; i < checked.length; i++) {
            let url = `https://email-validator-production.up.railway.app/${checked[i]}`
            let fetchData = await fetch(url)
            let result = await fetchData.json()
            if (result?.valid == true) {
                active.push(checked[i])
                amountSoFar = amountSoFar + 1
                setValidatingAmount(amountSoFar)
            }
            else if (result?.valid == false){
                inactive.push(checked[i])
                amountSoFar = amountSoFar + 1
                setValidatingAmount(amountSoFar)
            }
            else {
                error.push(checked[i])
                amountSoFar = amountSoFar + 1
                setValidatingAmount(amountSoFar)
            }
        }
        setActiveEmails(active)
        setInactiveEmails(inactive)
        setErrorEmails(error)
        setValidating(false)
    }

    
    const handleSelectAllActive = () => {
        if(selectAllActive) {
            setSelectAllActive(false)
            setChecked([])
            setSelectAll(false)
        }
        if(!selectAllActive) {
            setSelectAllActive(true)
            setChecked(activeEmails)
            setSelectAll(false)
        }
        
    }


    const validatingProgress = () => {
        if(validating) {
            return ((validatingAmount/checked?.length).toFixed(2) * 100) + "%"
        }
    }


    const validatedEmails = (email) => {
        if (activeEmails.includes(email)) {
            return "active-email"
        }
        else if (inactiveEmails.includes(email)){
            return "inactive-email"
        }
        else if (errorEmails.includes(email)) {
            return "error-email"
        }
        
        return ""
    }
    
    
    return (
        <div className="emailguesser-container">
            
            <div className="emailguesser-wrapper">
                <div className="emailguesser-box">
                    <form id="form" onSubmit={generateButton}>
                        <label>First Name <span style={{color: "red"}}>*</span></label>
                        <input type="text" placeholder="e.g. John" required onChange={(e) => setFirst(e.target.value.toLowerCase())} minLength={2}></input>

                        <label>Last Name <span style={{color: "red"}}>*</span></label>
                        <input type="text" placeholder="e.g. Doe" required onChange={(e) => setLast(e.target.value.toLowerCase())} minLength={2}></input>

                        <label>Birth Year (optional)</label>
                        <input type="number" placeholder="e.g. 1998" onChange={(e) => setBirthday(e.target.value.toString())} min="1"></input>


                        <label>Company URL <span style={{color: "red"}}>*</span></label>
                        <input type="text" name="field1" placeholder="e.g. reesby.com.au" onChange={handleUrlInput} required></input>
                        {returnUrlInput()}



                        <div className="buttons-addurl">
                            {numberOfUrlInputs > 2 && 
                            <div className="button-addurl" onClick={() => {setNumberOfUrlInputs(prev => prev - 1)}}>
                                <i className='bx bx-minus'></i>
                                <div className="button-addurl-explain">Remove Company Url</div>
                            </div>}
                            

                            <div className="button-addurl" >
                                <i className='bx bx-plus' onClick={() => setNumberOfUrlInputs(prev => prev + 1)}></i>
                                <div className="button-addurl-explain">Add Another Company Url</div>
                            </div>
                        </div>



                        <button className={`copy-button submit-button ${first.length >= 2 && last.length >= 2 && companyUrls[0] && companyUrls[0]?.indexOf(".") !== -1 ? "button-enabled" : "button-disabled"}`} type="submit" value="submit">Generate Emails</button>
                    </form>
                </div>


                <div className="emailguesser-list-box">

                    <div className="loading-box" style={{display: validating ? "flex" : "none"}}>
                        <div className="loading-text">
                            Validating  {validatingAmount}/{checked?.length}
                        </div>
                        <div className="loading-bar">
                            <div className="loading-progress" style={{width: validatingProgress()}}>

                            </div>
                        </div>
                    </div>

                    <div className="buttons">
                        <div className="buttons-left">
                            <div className={`copy-button button-fixed ${first.length >= 2 && last.length >= 2 && companyUrls[0] && companyUrls[0]?.indexOf(".") !== -1 && generateEmailButton === true ? "button-enabled" : "button-disabled"}`} id="search-button">
                                <div onClick={searchButtonAllow} >
                                    {!searchActive ? <i className='bx bx-search'></i> : <i className='bx bx-x'></i>}
                                </div>
                                {searchActive ? <input type="text" placeholder="Search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}></input> : ""}
                            </div>
                        </div>
                        <div className="buttons-right">
                            <CopyToClipboard text={checked}>
                                <div className={`copy-button button-fixed ${checked.length > 0 ? "button-enabled" : "button-disabled"}`}>Copy</div>
                            </CopyToClipboard>

                            {exportArray.length > 1 ? 
                            <CSVLink data={exportArray} style={{textDecoration: "none"}} filename='Malih_Selected_Emails'>
                            <div className={`copy-button button-fixed ${checked.length > 0 ? "button-enabled" : "button-disabled"}`}>
                                Export to CSV
                            </div>
                            </CSVLink>
                            : 
                            <div className={`copy-button button-fixed ${checked.length > 0 ? "button-enabled" : "button-disabled"}`}>
                                Export to CSV
                            </div>
                            }
                        </div>
                    </div>
                    <div className="emailguesser-list">
                        { first.length >= 2 && last.length >= 2 && companyUrls[0] && companyUrls[0]?.indexOf(".") !== -1 && generateEmailButton === true ?
                            <>
                                <div className="emailguesser-list-results">
                                    <div className="emailguesser-list-results-text">Showing {searchResult?.length} results</div>
                                    <div className="emailguesser-list-selectAll" onClick={handleSelectAll}>Select All</div>
                                </div>
                                {searchResult?.map((email, i) => (
                                    <label key={email} className={`email-checkboxes ${validatedEmails(email)}`}>
                                        <input type="checkbox" id={email} name={email} value={email} onChange={handleCheck} checked={emailChecked(email)}></input>
                                        <span className="checkmark"></span>
                                        <label htmlFor={email}>{email}</label><br></br>
                                    </label>
                                ))}
                            </>

                        : <div className="emailguesser-noemails">Enter details and click "Generate Emails" to get emails</div>}
                    </div>
                    


                    <div className="validate-buttons">
                        <div className="buttons-right">
                            <div className={`copy-button button-fixed ${finalResults?.length && companyUrls[0]?.indexOf(".") !== -1 && activeEmails?.length > 0 && generateEmailButton === true ? "button-enabled" : "button-disabled"}`} 
                                onClick={finalResults?.length && companyUrls[0]?.indexOf(".") !== -1 && activeEmails?.length > 0 && generateEmailButton === true ? handleSelectAllActive : null}>
                                Select All Active
                            </div>
                            <div className={`copy-button button-fixed  ${checked.length > 0 && validating == false ? "button-enabled" : "button-disabled"}`} onClick={checked?.length > 0 ? handleValidate : null}>
                                    {validating == false ? "Validate" : `Validating...`}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Inputs
