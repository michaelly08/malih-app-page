import React, {useState, useEffect} from 'react'

const TypeSelector = ({extractType, setExtractType}) => {

    
    const [button, setButton] = useState({
        activeObject: {id: extractType},
        objects: [{id: "Text"}, {id: "Upload CSV"}]
    })


    

    const toggleActive = (index) => {
        setButton({...button, activeObject : button.objects[index]})
        
    }

    function toggleActiveStyles(index) {
        if(button.objects[index].id === button.activeObject.id) {
            return "typeselector-box typeselected"
        }
        else {
            return "typeselector-box"
        }
    }

    
    
    


    return (
        <div className="typeselector-container">
            <div className="typeselector-wrapper">
                {button.objects?.map((element, index) => (
                <div key={element?.id} className={toggleActiveStyles(index)} onClick={() => {
                    toggleActive(index)
                    setExtractType(element?.id)
                    }}>
                    {element?.id}
                </div>
            ))}
            </div>
        </div>
    )
}

export default TypeSelector