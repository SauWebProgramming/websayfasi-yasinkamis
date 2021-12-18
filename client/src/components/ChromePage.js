import React, { useState } from 'react'
import Alt from "../assets/files/alt.png"
import Close from "../assets/files/çık.png"
import Facebook from './Facebook'
import Google from './GooglePage'

const ChromePage = () => {
    const linkFacebook = "www.facebook.com"
    const linkGoogle = "www.google.com"
    const [linkChange, setLinkChange] = useState("www.google.com")
    const [linkSearch, setLinkSearch] = useState("www.google.com")
    return (
        <div className='container-fluid chromePage'>
            <div className='chromePage_upper'>
                <div className='chromePage_upper_alt'>
                    <img src={Alt} alt="_" />
                </div>
                <div className='chromePage_upper_close'>
                    <img src={Close} alt="X" />
                </div>
            </div>
            <div className='chromePage_url-box'>
                <input type="text" placeholder={"Bir URL yazın"} defaultValue={linkSearch} onChange={(e) => { setLinkChange(e.target.value) }} />
                <button type='button' onClick={ () => { setLinkSearch(linkChange) }}>Ara</button>
            </div>
            <div className='chromePage_page-box'>
                {
                    (
                        (linkSearch === linkFacebook)
                        &&
                        <Facebook />
                    ),
                    (
                        (linkSearch === linkGoogle)
                        &&
                        <Google />
                    )


                }
            </div>
        </div>
    )
}

export default ChromePage
