import React, {useState, useEffect} from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { CSVLink } from 'react-csv';
import Papa from 'papaparse'
import {phone} from "phone"

const Extractor = ({extractType}) => {
    const [guessByCheck, setGuessByCheck] = useState(["Emails"])
    const [inputText, setInputText] = useState('');
    const [extractedEmails, setExtractedEmails] = useState([]);
    const [extractButton, setExtractButton] = useState(false)
    const [selectAll, setSelectAll] = useState(false)
    const [selectAllActive, setSelectAllActive] = useState(false)
    const [checked, setChecked] = useState([]);
    const [activeEmails, setActiveEmails] = useState([])
    const [inactiveEmails, setInactiveEmails] = useState([])
    const [errorEmails, setErrorEmails] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const [searchActive, setSearchActive] = useState(false)
    const [validating, setValidating] = useState(false)
    const [validatingAmount, setValidatingAmount] = useState(0)
    const [selectedFiles, setSelectedFiles] = useState([])
    const [draggingFile, setDraggingFile] = useState(false)
    const [uploadingCsv, setUploadingCsv] = useState(false)
    const [clearButton, setClearButton] = useState(false)
    const [validateType, setValidatingType] = useState("Emails")
    
    
    const searchResult = extractedEmails?.filter((text) => text.includes(searchTerm))

    const guessByOptions = ["Emails", "Phone Numbers", "Websites"]

    let exportArray = [[guessByCheck.join(" & ")]]


    useEffect(() => {
        setExtractButton(false)
        setChecked([])
        setSearchActive(false)
        setSearchTerm("")
        setSelectAll(false)
        setActiveEmails([])
        setInactiveEmails([])
        setErrorEmails([])
    }, [guessByCheck, inputText, extractType, validateType])


    useEffect(() => {
        setSelectedFiles([])
        setInputText("")
    }, [extractType])

    useEffect(() => {
        setExtractButton(false)
        setChecked([])
        setSearchActive(false)
        setSearchTerm("")
        setSelectAll(false)
        setActiveEmails([])
        setInactiveEmails([])
        setErrorEmails([])
        setInputText("")
    }, [clearButton])



    // both /[\w\d\.-]+@[\w\d\.-]+\.[\w\d\.-]+|[+]?(\d{1,3}\-|\d{1,3}\s|\d{1,3}|\d{1,3}\-|\d{1,3}\s|)?((\(\d{3,4}\))|\d{3,4})(\-|\s)?(\d{3,4})(\-|\s)?(\d{3,4})/gm

    //phone: /[+]?(\d{1,3}\-|\d{1,3}\s|\d{1,3}|\d{1,3}\-|\d{1,3}\s|)?((\(\d{3,4}\))|\d{3,4})(\-|\s)?(\d{3,4})(\-|\s)?(\d{3,4})/g

    const handleExtractCheck = (event) => {
        var updatedList = [...guessByCheck];
        if (event.target.checked) {
            updatedList = [...guessByCheck, event.target.value];
        } else {
            updatedList.splice(guessByCheck.indexOf(event.target.value), 1);
        }
        setGuessByCheck(updatedList);
    };


    const extractChecked = (option) => {
        if(guessByCheck.includes(option)) {
            return true
        }
        return false
    }


    let regex
    
    
    let emailsRegex = new RegExp(/[\w\d\.-]+@[\w\d\.-]+\.[\w\d\.-]+/gi)
    let phonesRegex = new RegExp(/[+](\d{1,3}\-|\d{1,3}\s|\d{1,3}|\d{1,3}\-|\d{1,3}\s|)?((\(\d{3,4}\))|\d{3,4})(\-|\s)?(\d{3,4})(\-|\s)?(\d{3,4})/g)
    let websitesRegex = new RegExp(/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi)




    useEffect(() => {
        // let regexString = `${guessByCheck.includes("Emails") ? emailsRegex.source : ""}${guessByCheck.includes("Emails") && guessByCheck?.length > 1 ? "|" : ""}${guessByCheck.includes("Phone Numbers") ? phonesRegex.source : ""}${guessByCheck.includes("Phone Numbers") && guessByCheck?.length > 1 && guessByCheck.includes("Websites") ? "|" : ""}${guessByCheck.includes("Websites") ? websitesRegex.source : ""}`
        if (validateType === "Emails") {
            regex = new RegExp(emailsRegex, "gi");
        }
        if (validateType === "Phone Numbers") {
            regex = new RegExp(phonesRegex, "gi");
        }
        
       
    })
    



    const extractEmails = (e) => {
        e.preventDefault()
        const emails = inputText.match(regex);
        setExtractedEmails([...new Set(emails)]);
        if(guessByCheck?.length > 0) {
            setExtractButton(true)
        }  
    };

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



    const emailChecked = (email) => {
        if(checked.includes(email)) {
            return true
        }
        return false
    }


    const searchButtonAllow = () => {
        if (extractedEmails?.length > 0) {
            setSearchActive(!searchActive)
        }
        if (searchActive) {
            setSearchTerm("")
        }
    }

    for (let i = 0; i < checked.length; i++) {
        exportArray.push(checked[i].split())
    }


    const validatingProgress = () => {
        if(validating) {
            return ((validatingAmount/checked?.length).toFixed(2) * 100) + "%"
        }
    }


    const handleValidate = async () => {
        
        let amountSoFar = 0
        setValidatingAmount(0)
        setValidating(true)
        let active = []
        let inactive = []
        let error = []
        if(validateType === "Emails") {
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
        }

        else if (validateType === "Phone Numbers") {
            for (let i = 0; i < checked.length; i++) {
                let result = phone(checked[i])
                if (result?.isValid == true) {
                    active.push(checked[i])
                    amountSoFar = amountSoFar + 1
                    setValidatingAmount(amountSoFar)
                }
                else if (result?.isValid == false){
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

    const handleDragOver = (e) => {
        e.preventDefault();
        setDraggingFile(true)
    }

    const handleDrop = async (e) => {
        e.preventDefault();
        setUploadingCsv(true)
        setDraggingFile(false)
        let filesSelected = []
        let textFromFiles = []
        for (let i = 0; i < e.dataTransfer.files?.length; i++) {
            filesSelected.push(e.dataTransfer.files[i].name)

            Papa.parse(e.dataTransfer.files[i], {
                header: false,
                skipEmptyLines: true,
                complete: function (results) {
                    for (let j = 0; j < results.data.length; j++) {
                        for (let k = 0; k < results.data[j].length; k++){
                            textFromFiles.push(results.data[j])
                        }
                    }
                    setInputText(textFromFiles.join(" "))
                },
            });
            
            setSelectedFiles(filesSelected)
        }
        setUploadingCsv(false)
    }

    const handleFile = async (e) => {
        e.preventDefault();
        setUploadingCsv(true)
        let filesSelected = []
        let textFromFiles = []
        for (let i = 0; i < e.target.files.length; i++) {
            filesSelected.push(e.target.files[i].name)

            Papa.parse(e.target.files[i], {
                header: false,
                skipEmptyLines: true,
                complete: function (results) {
                    for (let j = 0; j < results.data.length; j++) {
                        for (let k = 0; k < results.data[j].length; k++){
                            textFromFiles.push(results.data[j])
                        }
                    }
                    setInputText(textFromFiles.join(" "))
                },
            });
            setSelectedFiles(filesSelected)
        }
        setUploadingCsv(false)
    }


    


    return (
        <div className="emailguesser-container">
            <div className="emailguesser-wrapper">
                <div className="emailguesser-box">
                    <form id="form" onSubmit={extractEmails}>
                        <label>What would you like to validate? <span style={{color: "red"}}>*</span></label>
                        <select type="text" required
                        onChange={(e) => setValidatingType(e.target.value)}>
                            <option>Emails</option>
                            <option>Phone Numbers</option>
                        </select>

                        {validateType == "Phone Numbers" &&
                            <div className="note-validation">
                                <div>Note: Please ONLY use international phone numbers format</div>
                                <div>E.g. +61401452568</div>
                            </div>
                        }
                        
                        
                        <label className="company-urls-label">
                            <div>
                                {extractType === "Text" ? `Enter ${validateType} To Validate` : "Upload CSV File(s)"} <span style={{color: "red"}}>*</span>
                            </div>
                            {extractType === "Text" ? 
                                <div className="company-urls-import">
                                    <label className="import-button" onClick={() => setClearButton(!clearButton)}>Clear</label>
                                </div> : ""
                            }
                        </label>
                        
                        {extractType === "Text" ?
                            <textarea className="extractor-textarea" onChange={(e) => setInputText(e.target.value)} value={inputText} style={{height: "400px"}}></textarea>
                            :
                        <>
                            <div className={`uploadcsv-box ${draggingFile && "dragging"}`} onDragOver={handleDragOver} onDrop={handleDrop}>
                                Drag and Drop CSV Files<br/> 
                                OR<br/> 
                                <div>
                                    <input type="file" onChange={(e) => handleFile(e)} multiple accept=".csv" className="inputfile" id="file"></input>
                                    <label htmlFor="file" className="import-button" style={{fontSize: "16px"}}>Select files</label>
                                </div>
                                {uploadingCsv && <div className="uploading-message">Uploading...</div>}
                            </div>
                            <label>Showing selected files ({selectedFiles?.length})</label>
                            <div className="selected-files-box">
                                {selectedFiles?.map(file => (
                                    <div key={file} className="selected-files-names">{file}</div>
                                ))}

                            </div>
                        </>
                        }

                        


                        <button 
                            className={`copy-button submit-button ${guessByCheck?.length > 0 ? "button-enabled" : "button-disabled"}`} 
                            type="submit" 
                            value="submit">
                                Submit
                        </button>
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
                            <div className={`copy-button button-fixed ${extractedEmails?.length > 0 && extractButton == true ? "button-enabled" : "button-disabled"}`} id="search-button">
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
                            <CSVLink data={exportArray} style={{textDecoration: "none"}} filename='Malih_Extracted'>
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
                        {extractButton === true ?
                            <>
                                <div className="emailguesser-list-results">
                                    <div className="emailguesser-list-results-text">Showing {searchResult?.length >= 1 ? searchResult?.length : "0"} result{searchResult?.length > 1 ? "s" : ""}</div>
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

                        : <div className="emailguesser-noemails">
                            {guessByCheck?.length > 0 ? `${extractType === "Text" ? "Enter text" : "Upload csv file(s)"} and click \"Submit\" to get ${guessByCheck?.join(" & ").toLowerCase()}` : "Please select what you would like to extract"}
                            </div>}
                    </div>

                    <div className="validate-buttons">
                        <div className="buttons-right">
                            {guessByCheck?.length == 1 && guessByCheck?.includes('Emails') ?
                            <>
                                <div className={`copy-button button-fixed ${activeEmails?.length > 0 && extractButton === true ? "button-enabled" : "button-disabled"}`} 
                                    onClick={activeEmails?.length > 0 && extractButton === true ? handleSelectAllActive : null}>
                                    Select All Active
                                </div>
                                <div className={`copy-button button-fixed  ${checked.length > 0 && validating == false ? "button-enabled" : "button-disabled"}`} onClick={checked?.length > 0 ? handleValidate : null}>
                                        {validating == false ? "Validate" : `Validating...`}
                                </div>
                            </>
                            : 
                                <div className={`copy-button button-fixed button-disabled`}>
                                    Validation Available For Emails Only
                                </div>
                            }
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Extractor





        // <div className="emailguesser-container">
        //     <div className="emailguesser-wrapper">
        //         <div className="emailguesser-box">
        //             <form id="form" onSubmit={null}>
        //                 <label>Extract {extractType} With <span style={{color: "red"}}>*</span></label>
        //                 <select type="text" required
        //                 onChange={(e) => {setGuessBy(e.target.value)}}>
        //                     <option>Text</option>
        //                     <option>Upload Csv</option>
        //                 </select>
        //                 <label>Enter Text To Extract <span style={{color: "red"}}>*</span></label>
        //                 <textarea className="extractor-textarea"></textarea>
        //             </form>
        //         </div>

        //         <div className="emailguesser-list-box">
        //             test
        //         </div>


        //     </div>
        // </div>