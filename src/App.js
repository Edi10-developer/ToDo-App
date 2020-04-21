import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';

//Componentes
import tasks from './Eixample/tasks.json';
import Tasks from './Components/Tasks';
import TaskForm from './Components/TaskForm';

class App extends Component {

  state = {
    tasks: tasks
  }

  addTask = (title, description) => {
    const newTask = {
      title: title,
      description: description,
      id: this.state.tasks.length
    }
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }

  deleteTask = (id) => {
    const newTasks = this.state.tasks.filter(task => task.id !== id);
    this.setState({ tasks: newTasks });
  }

  checkDone = (id) => {
    const newTasks = this.state.tasks.map(task => {
      if (task.id === id) {
        task.done = !task.done
      }
      return task;
    });
    this.setState({ tasks: newTasks });
  }

  render() {
    return <div id="app-body">
      <Router>
        <div className="nav">
          <h1>Lista de cosas para hacer:</h1>
        
        </div>
        <br/>
        <Route exact path="/" render={() => {
          return <div>
            <TaskForm addTask={this.addTask} />
            <Tasks tasks={this.state.tasks}
              deleteTask={this.deleteTask}
              checkDone={this.checkDone}
            />
          </div>
        }}>
        </Route>
        <a href="/" id="btn-clean">Limpiar tareas</a>
      </Router>
      
    </div>
  
    
  }
}

export default App;
