import React, {Component} from 'react'; 
import './Task.css';

class Task extends Component {    
    render() {
        return (
            <div className='Task'>
                <div 
                    onClick={this.props.click}
                    className={this.props.className}
                >
                    {this.props.numb + 1}. {this.props.task}
                </div>
                <img
                    id="del_icon"
                    src={'https://img.icons8.com/metro/50/000000/cancel.png'}
                    alt={'delete_icon'}
                    onClick={this.props.delclick} 
                />
            </div>
        );
    }
}

export default Task;