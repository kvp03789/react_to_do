import {useState} from 'react'

import StarOutline from '../img/star-outline.svg'
import StarFill from '../img/star-fill.svg'
import Dots from '../img/dots.svg'
import EditTaskMenu from './EditTaskMenu'

const TaskItem = (props) => {
    const [showEditTaskMenu,  setShowEditTaskMenu] = useState(false)
    const handleCompleteClick = (e) => {
        if(e.target.classList.contains("green"))e.target.classList.remove("green")
        else e.target.classList.add("green")
    }

    const handleImportant = (e) => {
        const taskName = e.target.parentElement.children[1].innerText
        const newTaskList = props.project.taskList.map(task => {
            if(task.name === taskName){
                return {...task, important: !task.important}
            }
            return task
        })
        console.log(newTaskList)
        const newProjList = props.projectList.map(proj => {
                if(proj.name === props.project.name){
                    return {...proj, taskList: newTaskList}
                }
                return proj
            })
        props.setProjectList(newProjList)
    }

    return ( 
        <div className="task-item" key={props.key}>
            <div className="task-complete-button" onClick={(e) => {handleCompleteClick(e)}}></div>
            <h3>{props.task.name}</h3>
            <p>{props.task.details}</p>
            <p>{props.task.date}</p>
            <img src={props.task.important ? StarFill : StarOutline} className="svg-img" onClick={(e) => handleImportant(e)}/>
            <img src={Dots} className="svg-img" onClick={() => setShowEditTaskMenu(prev => !prev)}/>
            {
                showEditTaskMenu && <EditTaskMenu/>
            }
        </div>
     );
}
 
export default TaskItem;