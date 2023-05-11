import StarOutline from '../img/star-outline.svg'
import StarFill from '../img/star-fill.svg'
import isToday from 'date-fns/isToday'
import parseISO from 'date-fns/parseISO'

function Today(props) {
    return ( 
        <div className="content-section">
            <div className="title-bar">
                <h1>Today</h1>
            </div>
            <div className="tasks">
                {
                    props.projectList.map(proj => (
                        proj.taskList.map((task, i) => (

                            isToday(parseISO(task.date)) &&
                                <div className="task-item" key={i}>
                                <h3>{task.name}</h3>
                                <p>{task.details}</p>
                                <p>{task.date}</p>
                                <img src={task.important ? StarFill : StarOutline} className="svg-img"/>
                            </div>
                        ))
                            
                        ))
                    
                }
            </div>
        </div>
     );
}

export default Today;