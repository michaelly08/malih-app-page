import React, {useEffect, useState} from 'react'
import { read, utils } from 'xlsx';
import { buildURI, toCSVm, jsons2csv } from './core';

const Converter = () => {
    var JSZip = require("jszip");
    var FileSaver = require('file-saver');
    const [data, setData] = useState([])
    const [successFileName, setSuccessFileName] = useState([])
    const [uploading, setUploading] = useState(false)
    const [downloading, setDownloading] = useState(false)
    const [error, setError] = useState(false)
    const [draggingFile, setDraggingFile] = useState(false)

    
    

    
    const handleFile = async (e) => {
        setError(false)
        setUploading(true)
        try {
            let datas = []
            let names = []
            for (let i = 0; i < e.target.files?.length; i++) {
                let f = await (await e.target.files[i]).arrayBuffer();
                let wb = read(f);
                let d = utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]])
                datas.push(d)
                names.push(e.target.files[i].name)
            }
            setData(datas)
            setSuccessFileName(names)
            setUploading(false)
        }
        catch(err) {
            setUploading(false)
            setError(true)
        }
    
    }



    
    const downloadZip = () => {
            setDownloading(true)
            if(data?.length > 0) {
            var zip = new JSZip();

            for (var i = 0; i < data.length; i++) {
                zip.file(`${successFileName[i].split(".")[0]}.csv`, jsons2csv(data[i]))
                }
                // zip.file(`1.csv`, convertToCSV(data[0]))
                zip.generateAsync({type:"blob"})
                .then(function(content) {
                    // see FileSaver.js
                    FileSaver.saveAs(content, "Converted.zip");
                    setDownloading(false)
                });
            }
            
    }


    const handleDragOver = (e) => {
        e.preventDefault();
        setDraggingFile(true)
    }

    const handleDrop = async (e) => {
        e.preventDefault();
        setError(false)
        setUploading(true)
        setDraggingFile(false)
        
        try {
            let datas = []
            let names = []
            let dropped = e.dataTransfer.files
            console.log(dropped)
            for (let i = 0; i < dropped?.length; i++) {
                let f = await (await dropped[i]).arrayBuffer();
                let wb = read(f);
                let d = utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]])
                datas.push(d)
                names.push(dropped[i].name)
                
            }
            setData(datas)
            setSuccessFileName(names)
            setUploading(false)
        }
        catch(err) {
            setUploading(false)
            setError(true)
            console.log(err)
        }
        
    }
    return (
        <div className="emailguesser-container">
            <div className="emailguesser-wrapper">
                <div className="emailguesser-box">
                    <div className={`uploadcsv-box ${draggingFile && "dragging"}`} onDragOver={handleDragOver} onDrop={handleDrop} style={{height: "360px"}}>
                        Drag and Drop XLSX Files<br/> 
                        OR<br/> 
                        <div>
                            <input type="file" onChange={(e) => handleFile(e)} multiple accept=".xls,.xlsx" className="inputfile" id="file"></input>
                            <label htmlFor="file" className="import-button" style={{fontSize: "16px"}}>Select files</label>
                        </div>
                        {uploading && <div className="uploading-message">Uploading...</div>}
                    </div>
                </div>

                <div className="emailguesser-list-box csv-converter-box" style={{height: "380px"}}>
                    <div className="selected-files-title">Selected {successFileName?.length} file{successFileName?.length > 1 ? "s" : ""}</div>
                    <div className="selected-files">
                        
                        {successFileName?.map(name => (
                            <div key={name} className="selected-file-name">{name}</div>
                        ))}
                    </div>
                    

                    <div className="downloadAll" onClick={successFileName?.length > 0 ? downloadZip : null}>Convert to CSV and Download</div>
                    {error ? <div className="error-message">ERROR: please only upload xlsx or xls files</div> : ""}
                    <div className="uploading-loader" style={{display: `${downloading ? "flex" : "none"}`}}>
                        <div class="lds-ripple"><div></div><div></div></div>
                        <div>Preparing Download...</div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Converter