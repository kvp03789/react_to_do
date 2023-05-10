import {useState} from 'react'
import NewTaskForm from './NewTaskForm';

import TaskItem from './TaskItem';

function ProjectView(props) {
    
    const [showForm, setShowForm] = useState(false)

    return ( 
        <div className="content-section" key={props.key}>
            <div className="title-bar">
                <h1>{props.project.name}</h1>
            </div>
            <div className="tasks">
                {
                    props.project.taskList.length === 0 
                    ? <p className="no-tasks">--Currently no tasks for this project--</p>
                    : props.project.taskList.map((task, i) => (
                        <TaskItem task={task} setProjectList={props.setProjectList} key={i} project={props.project} projectList={props.projectList}/>
                    ))
                }
            </div>
            
                {
                    showForm && <NewTaskForm setShowForm={setShowForm} setProjectList={props.setProjectList} project={props.project} projectList={props.projectList}/>
                    
                }
            <div className="buttons-container">
                <button className="add" onClick={() => {setShowForm(prev => !prev)}}>New Task</button>
                <button className="cancel">Clear Completed</button>
            </div>
        </div>
     );
}

export default ProjectView;