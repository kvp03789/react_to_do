import React from 'react'
import '../styles/index.css'
import Flag from '../img/flag.svg'
import Calendar from '../img/calendar.svg'
import Calendar2 from '../img/calendar2.svg'
import Star from '../img/star.svg'

const Sidebar = () => {

    return(
        <nav>
            <h1>Home</h1>
            <div className="nav-section">
                <div className="item svg-img">
                    <img src={Flag}/>
                    <h3 className="item-title">All Tasks</h3>
                </div>
                <div className="item svg-img">
                    <img src={Calendar}/>
                    <h3 className="item-title">Today's Tasks</h3>
                </div>
                <div className="item svg-img">
                    <img src={Calendar2}/>
                    <h3 className="item-title">This Week's Tasks</h3>
                </div>
                <div className="item svg-img">
                    <img src={Star}/>
                    <h3 className="item-title">Important Tasks</h3>
                </div>
            </div>
            <h1>Projects</h1>
            <div className="nav-section">
                
            </div>
        </nav>
    )
}

export default Sidebar