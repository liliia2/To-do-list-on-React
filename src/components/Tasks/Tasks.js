import React, {Fragment} from 'react';
import Task from './Task/Task';

const Tasks = ({tasks, listOfCompletedTask, clicked, iconClicked}) => {    
        return (
            <Fragment>
            <span>List of tasks:</span>
            {tasks.map((task, index) => (
                <Task 
                    className={listOfCompletedTask && listOfCompletedTask.includes(task) ? 'completedTasks' : 'uncompletedTasks'} 
                    numb={index}
                    click={() => clicked(task)}
                    task={task}
                    key={index}
                    delclick={() => iconClicked(task)}
                />
            ))} 
            </Fragment>
        );
}
 
export default Tasks; 