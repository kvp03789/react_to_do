import React,  {useState, useEffect} from 'react'
import ProjectIcon from '../img/project-menu.svg' 
import Dots from '../img/dots.svg' 
import { ProjectContext } from '../App'


function ProjetListItem(props) {

    const [showProjectEditMenu, setShowProjectEditMenu] = useState(false)
    const [showProjectEditName, setShowProjectEditName] = useState(false)
    const [nameInput, setNameInput] = useState()

    const handleDots = () => {
        setShowProjectEditMenu(prev => !prev)
    }

    const handleNameInput = (e) => {
        setNameInput(e.target.value)
    }

    const handleProjectDelete = (e) => {
        const projectName = e.target.parentElement.parentElement.children[1].innerText
        props.setProjectList(prevState => prevState.filter(proj => proj.name !== projectName))
    }

    const handleProjectEdit = (e) => {
        setShowProjectEditName(prev => !prev)
        setShowProjectEditMenu(prev => !prev)
    }

    const handleProjectEditSave = (e) => {
        //const projectName = e.target.parentElement.parentElement.firstChild.children[1].innerText
        const newToDoList = props.projList.map(proj =>{
            if(proj.name === props.proj.name){
                return {...proj, name: nameInput}
            }
            return proj
        })
        props.setProjectList(newToDoList)
        setShowProjectEditName(prev => !prev)
    }
        
        
    
    return ( 
    <div className="project-item-container">
        <div className="item project-item">
            <img className="svg-img" src={ProjectIcon}/>
            <h3>{props.proj.name}</h3>
            <div className="dots-button" onClick={handleDots}>
                <img className="svg-img" src={Dots}/>
            </div>
            {
                showProjectEditMenu &&
                <div className="project-edit-menu">
                    <div className="delete" onClick={(e) => {handleProjectDelete(e)}}>Delete</div>
                    <div className="edit" onClick={(e) => {handleProjectEdit(e)}}>Edit</div>
                </div> 
            }
        </div>
        {
        showProjectEditName&&
            <div className="edit-project-form">
                <input className="edit-project-input" onChange={(e) => {handleNameInput(e)}}></input>
                <button className="add" onClick={(e) => {handleProjectEditSave(e)}}>Save</button>
                <button className="cancel" onClick={() => setShowProjectEditName(prev => !prev)}>Cancel</button>
            </div>
        }
    </div> 
    );
}

export default ProjetListItem;