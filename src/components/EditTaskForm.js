import {useState, useEffect} from'react'
import StarOutline from '../img/star-outline.svg'
import StarFill from '../img/star-fill.svg'

const EditTaskForm = (props) => {
    const [isImportant, setIsImportant] = useState(props.task.important)

    useEffect(() => {
        //setIsImportant(props.task.important)
        console.log(isImportant)
    }, [isImportant])

    const handleUpdate = (e) => {
        console.log("task updated")
        e.preventDefault()
        const form = document.querySelector("form")
        const name = form.taskName.value
        const details = form.taskDetails.value
        const date = form.taskDate.value
        const newTask = {
            name, details, date, important: isImportant, completed: false
        }
        const thisProjectTaskList = props.project.taskList.map(task => {
            if(task.name === props.task.name){
                return {...newTask}
            }
        });
        const newTaskList = [...thisProjectTaskList]
        
        const newProjectList = props.projectList.map(proj => {
                if(proj.name === props.project.name){
                    return{...proj, taskList: newTaskList}
                }
                return proj
            })
        props.setProjectList(newProjectList)
        props.setShowEditTaskForm(prev => !prev)
    }

    const handleStarClick = () => {
        console.log("star clicked")
        setIsImportant(prev => !prev)
    }

    return ( 
        <div className="form-container">
            <form>
                <div className="form-section">
                    <label htmlFor="name">Task Name:</label>
                    <input name="taskName" defaultValue={props.task.name}></input>
                </div>
                <div className="form-section">
                    <label htmlFor="details">Details:</label>
                    <input name="taskDetails" defaultValue={props.task.details}></input>
                </div>
                <div className="form-section">
                    <label htmlFor="date">Date:</label>
                    <input type="date" name="taskDate" defaultValue={props.task.date}></input>
                </div>
                <div className="form-section">
                    <label htmlFor="date">Mark Important?</label>
                    <img className="svg-img" id="star-img" src={isImportant ? StarFill : StarOutline} onClick={(e) =>{handleStarClick(e)}}/>
                </div>
                <div className="task-buttons-container">
                    <button className="add" onClick={e => {handleUpdate(e)}} type="submit">Add</button>
                    <button className="cancel" onClick={() => {props.setShowEditTaskForm(prev => !prev)}}>Cancel</button>
                </div>
            </form>
        </div>
     );
}
 
export default EditTaskForm;