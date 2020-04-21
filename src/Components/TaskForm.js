import React, { Component } from 'react';

class TaskForm extends Component {

    state = {
        title: '',
        description: ''
    }

    onSubmit = (event) => {
        this.props.addTask(this.state.title, this.state.description);
        event.preventDefault();
    }

    onChange = (e) => {
        this.setState({
          [e.target.name] : e.target.value
        });

    }

    render() {
        return (
            <form onSubmit={this.onSubmit} className="taskForm">
                <input
                    type="text"
                    name="title"
                    placeholder="Tarea"
                    onChange={this.onChange}
                    value={this.state.title}  className="taskForm taskInput" />
                <br />
                <br />
                <textarea
                    name="description"
                    placeholder="Contenido Tarea"
                    onChange={this.onChange}
                    value={this.state.description}  className="taskForm
                     taskTextArea">
                </textarea>
                <br />
                <input type="submit" value="Guardar" className="btn btn-submit"/>
                <hr/>
            </form>
        )
    }
}

export default TaskForm;