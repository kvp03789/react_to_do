import {useState} from 'react'
import StarOutline from '../img/star-outline.svg'
import StarFill from '../img/star-fill.svg'

function NewTaskForm(props) {
    const [isImportant, setIsImportant] = useState(false)

    const handleAdd = (e) => {
        e.preventDefault()
        const form = document.querySelector("form")
        const name = form.taskName.value
        const details = form.taskDetails.value
        const date = form.taskDate.value
        const newTask = {
            name, details, date, important: isImportant, completed: false
        }
        const thisProjectTaskList = props.project.taskList;
        const newTaskList = [...thisProjectTaskList, newTask]
        
        const newProjectList = props.projectList.map(proj => {
                if(proj.name === props.project.name){
                    return{...proj, taskList: newTaskList}
                }
                return proj
            })
        props.setProjectList(newProjectList)

        console.log("task added: ", newProjectList)
        props.setShowForm(prev => !prev)
    }

    const handleStarClick = (e) => {
        setIsImportant(prev => !prev)
    }

    return ( 
        <div className="form-container">
            <form>
                <div className="form-section">
                    <label htmlFor="name">Task Name:</label>
                    <input name="taskName"></input>
                </div>
                <div className="form-section">
                    <label htmlFor="details">Details:</label>
                    <input name="taskDetails"></input>
                </div>
                <div className="form-section">
                    <label htmlFor="date">Date:</label>
                    <input type="date" name="taskDate"></input>
                </div>
                <div className="form-section">
                    <label htmlFor="date">Mark Important?</label>
                    <img className="svg-img" id="star-img" src={isImportant ? StarFill : StarOutline} onClick={e => handleStarClick(e)}/>
                </div>
                <div className="task-buttons-container">
                    <button className="add" onClick={e => {handleAdd(e)}} type="submit">Add</button>
                    <button className="cancel" onClick={() => {props.setShowForm(prev => !prev)}}>Cancel</button>
                </div>
            </form>
        </div>
     );
}

export default NewTaskForm;