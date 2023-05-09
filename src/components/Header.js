import React from 'react'
import '../styles/sliderStyles.css'
import '../styles/index.css'

import HamburgerIcon from '../img/menu.svg'
import ListoLogo from '../img/listo_logo.png'

const Header = (props) => {

    const handleShowSidebar = () => {
        props.setShowSidebar(prev => {
            if(prev === false){
                props.setShowSidebar(true)
                // console.log("show")
            }else {
                props.setShowSidebar(false)
                // console.log("hide")
            }
        });
    }

    return(
        <header>
            <div className="header-section hamburger-icon-container" onClick={handleShowSidebar}>
                <img src={HamburgerIcon} className="hamburer-icon" alt="hamburger menu"/>
            </div>
            <div className="header-section">
                <img src={ListoLogo} className="logo" alt="website logo"></img>
            </div>
            <div className="header-section">
                <label className="switch">
                    <input  type="checkbox"/>
                    <span className="slider round"></span>
                </label>
            </div>
        </header>
    )
}

export default Header