import React from 'react';
import classes from './Statistics.css';

const Statistics = ({title, countOfAllTasks, countOfCompletedTasks}) => {
    return(
        <div className={classes.Statistics}>
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

export default Statistics;
