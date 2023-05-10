import React, {useState, useEffect, useContext} from 'react'
import { Link } from 'react-router-dom'
import NewProjectForm from './NewProjectForm'
import '../styles/index.css'
import Flag from '../img/flag.svg'
import Calendar from '../img/calendar.svg'
import Calendar2 from '../img/calendar2.svg'
import Star from '../img/star.svg'
import Plus from '../img/plus.svg' 
import ProjectListItem from './ProjectListItem'

const Sidebar = (props) => {
    const [showAddProjectForm, setShowAddProjectForm] = useState()

    useEffect(() => {
        setShowAddProjectForm(false)
    }, [])

    const handleSelected = (e) => {
        const navList = document.querySelectorAll(".item");
        let ele;
        if(e.target.nodeName.toLowerCase() === "a"){
            ele = e.target.firstChild
        } else if(e.target.nodeName.toLowerCase() !== "div"){
             ele = e.target.parentElement
        }else{
             ele = e.target
        }
        console.log(ele)
        
        navList.forEach((item) => {
                item.classList.remove("selected")
        })   
        ele.classList.add("selected")
    }

    const handleShowHide = () => {
        setShowAddProjectForm(prev => !prev)
    }

    
    
    return(
        <nav>
            <h1>Home</h1>
            <div className="nav-section">
                <Link to="/all">
                    <div className="item" onClick={(e) => {handleSelected(e)}}>
                        <img src={Flag} className="svg-img"/>
                        <h3 className="item-title">All Tasks</h3>
                    </div>
                </Link>
                <Link to="/today">
                    <div className="item" onClick={(e) => {handleSelected(e)}}>
                        <img src={Calendar} className="svg-img"/>
                        <h3 className="item-title">Today's Tasks</h3>
                    </div>
                </Link>
                <Link to="/week">
                    <div className="item" onClick={(e) => {handleSelected(e)}}>
                        <img src={Calendar2} className="svg-img"/>
                        <h3 className="item-title">This Week's Tasks</h3>
                    </div>
                </Link>
                <Link to="/important">
                    <div className="item" onClick={(e) => {handleSelected(e)}}>
                        <img src={Star} className="svg-img"/>
                        <h3 className="item-title">Important Tasks</h3>
                    </div>
                </Link>
            </div>
            <h1>Projects</h1>
            <div className="nav-section">
                {props.projList &&
                   props.projList.map((proj, i) => (
                    <div key={i}>
                        <Link to={proj.name} onClick={(e) => {handleSelected(e)}}>
                            <ProjectListItem proj={proj} projList={props.projList} setProjectList={props.setProjectList} setShowAddProjectForm={setShowAddProjectForm}/>
                        </Link>
                    </div>
                   )) 
                }
                {
                    showAddProjectForm && < NewProjectForm setShowAddProjectForm={setShowAddProjectForm} setProjectList={props.setProjectList}/>
                }

                <div className="add-project-button" onClick={handleShowHide}>
                    <img className="svg-img" src={Plus}/><h3>Add Project</h3>
                </div>
                 
            </div>
        </nav>
    )
}

export default Sidebar