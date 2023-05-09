import React, {useState, useEffect, useContext} from 'react'
import NewProjectForm from './NewProjectForm'
import '../styles/index.css'
import Flag from '../img/flag.svg'
import Calendar from '../img/calendar.svg'
import Calendar2 from '../img/calendar2.svg'
import Star from '../img/star.svg'
import Plus from '../img/plus.svg' 
import ProjectIcon from '../img/project-menu.svg' 
import { ProjectContext } from '../App'

const Sidebar = ({setProjectList}) => {
    const [showAddProjectForm, setShowAddProjectForm] = useState()
    const projectListArray = useContext(ProjectContext)

    useEffect(() => {
        setShowAddProjectForm(false)
    }, [])

    const handleShowHide = () => {
        setShowAddProjectForm(prev => !prev)
    }
    
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
                {
                   projectListArray.map(proj => (
                    <div className="item" key={proj.key}>
                        <img className="svg-img" src={ProjectIcon}/>
                        <h3>{proj.name}</h3>
                    </div>
                   )) 
                }
                {showAddProjectForm && < NewProjectForm setShowAddProjectForm={setShowAddProjectForm} setProjectList={setProjectList}/>}

                <div className="add-project-button" onClick={handleShowHide}>
                    <img className="svg-img" src={Plus}/><h3>Add Project</h3>
                </div>
                 
            </div>
        </nav>
    )
}

export default Sidebar