import React, {Component} from 'react';
import './App.css';
import Tasks from '../components/Tasks/Tasks';
import Cockpit from '../components/Cockpit/Cockpit';
import Inputfield from '../components/Inputfield/Inputfield';

class App extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        'First task', 'Second task', 'Third task'
      ],
      listOfCompletedTask: [],
      textOfNewTask: '',
      showTasks: false  
    }
  }
 
  // Добавление в список/удаление из списка выполненных тасков
  addToCompletedTask = (clickedTask) => {
    const {listOfCompletedTask, tasks} = this.state;
    if (listOfCompletedTask.includes(clickedTask)) {
      const cleanedList = listOfCompletedTask.filter(item => item !== clickedTask);
      this.setState({
        tasks: tasks,
        listOfCompletedTask: cleanedList
      });
    } else {
      this.setState((prev) => ({
        tasks: tasks,
        listOfCompletedTask: [...prev.listOfCompletedTask, clickedTask]
      }));
    }
  }

  //Удаление таска
  deleteTask = (task) => {
    const {tasks, listOfCompletedTask} = this.state;
    const cleanedFullList = tasks.filter(item => item !== task);
    this.setState({tasks: cleanedFullList});
    if (listOfCompletedTask.includes(task)) {
      const cleanedList = listOfCompletedTask.filter(item => item !== task);
      this.setState({listOfCompletedTask: cleanedList});    
    }
  }

  // Новый текст в инпуте
  inputUpdateHandler = (event) => {
    const textOfNewTask = event.target.value;
    this.setState({textOfNewTask: textOfNewTask});
  }

  // Добавление нового таска по нажатию Add Task Button
  addNewTask = () => {
    const {textOfNewTask, tasks} = this.state;
    if (tasks.includes(textOfNewTask)) {
      alert('This task has already been added.');
    } else if (textOfNewTask.length === 0) {
      alert('Enter text for new task.');
    } else if (textOfNewTask.length > 0) {
      this.setState((prev) => ({
        tasks: [...prev.tasks, textOfNewTask],
        textOfNewTask: ''}));
    } 
  }

  // Добавление нового таска по нажатию Enter
  handleKeyPressed = (target) => {
    if(target.charCode===13){
      this.addNewTask();
    } 
  }

  render () {
    const { textOfNewTask, tasks, listOfCompletedTask } = this.state;
    const { appTitle } = this.props;
    
    return (
      <div className="App">
        <Cockpit 
          title={appTitle}
          countOfAllTasks={tasks.length}
          countOfCompletedTasks={listOfCompletedTask.length}
        />
        <Tasks 
          tasks={tasks}
          listOfCompletedTask={listOfCompletedTask}
          clicked={this.addToCompletedTask}
          iconClicked={this.deleteTask}
        />
        <Inputfield 
          data={textOfNewTask}
          changed={this.inputUpdateHandler}
          clicked={this.addNewTask}
          handleKeyPress={this.handleKeyPressed}
        />
      </div>
    ); 
  }
}
  
export default App;