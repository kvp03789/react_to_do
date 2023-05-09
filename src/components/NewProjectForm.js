import React from 'react'
import ProjectIcon from '../img/project-menu.svg' 

const NewProjectForm = ({setShowAddProjectForm, setProjectList}) => {

    const handleCancelButton = () => {
        setShowAddProjectForm()
    }

    const handleAddButton = () => {
        const input = document.querySelector(".new-project-form-input")
        const newProject = {
            name: input.value,
            key: input.value
        }
        setProjectList(prev => [...prev, newProject])
        setShowAddProjectForm()
    }

    return ( 
        <div className="new-project-form">
            <div className="form-section">
                <img className="svg-img" src={ProjectIcon}/>
                <input className="new-project-form-input"/>
            </div>
            <div className="form-section">
                <button className="add" onClick={handleAddButton}>Add</button>
                <button className="cancel" onClick={handleCancelButton}>Cancel</button>
            </div>
        </div>
     );
}
 
export default NewProjectForm;