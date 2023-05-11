const EditTaskMenu = (props) => {

    const handleDeleteTask = () => {
        console.log("deleted task")
        const newTaskList = props.project.taskList.filter(task => task.name !== props.task.name)
        console.log(newTaskList)
        const newProjectList = props.projectList.map(proj => {
            if(proj.name === props.project.name){
                return {...proj, taskList: newTaskList}
            }
            return proj
        })
        props.setProjectList(newProjectList)
    }

    const handleEditTask = () => {
        props.setShowEditTaskForm(prev => !prev)
        props.setShowEditTaskMenu(prev => !prev)
        console.log("edited task")
    }

    return ( 
        <div className="edit-task-menu">
            <div onClick={handleEditTask}>Edit</div>
            <div onClick={handleDeleteTask}>Delete</div>
        </div>
     );
}

export default EditTaskMenu;