import React, { useState } from 'react'
import Txt from "../assets/navbar/txt.png"
import Chrome from "../assets/navbar/chrome.png"
import ChromePage from './ChromePage'
import PopUp from './PopUp'
//import TxtFile from './TxtFile'

const Desktop = () => {
    const [tick, setTick] = useState(null)
    const [open, setOpen] = useState(null)
    const [openPop, setOpenPop] = useState(false)
    return (
        <div className='container-fluid desktop' >
            <div
                className={`desktop_icons ${(tick === "txt") && "active"}`}
                onClick={() => { setTick("txt") }}
                onDoubleClick={() => { setOpen(true); alert(open) }}
            >
                <img src={Txt} alt="icon" />
            </div>
            <div
                className={`desktop_icons ${(tick === "chrome") && "active"}`}
                onClick={() => { setTick("chrome") }}
                onDoubleClick={() => { setOpen(true); alert(open) }}>
                <img src={Chrome} className='chrome' alt="icon" />
            </div>
            {/*<TxtFile/>*/}
            <ChromePage/>
            {
                ( !openPop && <button type='button' className='popUp-button' onClick={()=>{setOpenPop(true)}}>Bilgi</button>)
            }
            {
                (
                    openPop
                    &&
                    <PopUp/>
                )
            }
        </div>
    )
}

export default Desktop
