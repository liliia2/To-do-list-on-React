import React from 'react';
import classes from './Cockpit.css';

const Cockpit = ({title, countOfAllTasks, countOfCompletedTasks}) => {
    return(
        <div className={classes.Cockpit}>
            <h1>{title}</h1>
            <div className='counter'>
                <span>All tasks</span>
                <div>{countOfAllTasks}</div>
            </div>
            <div className='counter'>
                <span>Completed tasks</span>
                <div>{countOfCompletedTasks}</div>
            </div>
        </div>
    );
};

export default Cockpit;
