import React from 'react';
import './Inputfield.css';
  
const Inputfield = (props) => {
    return(
        <div className='Inputfield'>
            <input 
                type='text' 
                value={props.data} 
                placeholder='Add new task' 
                onChange={props.changed} 
                onKeyPress={props.handleKeyPress}
            />
            <button 
                onClick={props.clicked}>Add Task
            </button>
        </div>
    );
};

export default Inputfield;
