import React, {useState } from 'react'
import txtValue from "../data/txtValue.json"

const TxtFile = () => {
    const [textAlign, setTextAlign] = useState("left")
    return (
        <div className='container-fluid txt-file'>
            <div className='txt-file_upper'>

            </div>
            <div className='txt-file_nav'>

            </div>
            <div className='txt-file_content'>
                <textarea defaultValue={txtValue.txtValue} className="justify"></textarea>
            </div>
        </div>
    )
}

export default TxtFile
