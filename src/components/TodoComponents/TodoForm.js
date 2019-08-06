import React from 'react';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newtodo: ""
        }
    }

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log('handleSubmit', this.props);
        this.props.addTodo(this.state.newtodo);
        this.setState({newtodo: ""});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                type="text"
                name="newtodo"
                placeholder="Add a new todo"
                onChange={this.handleChange}
                value={this.state.newtodo}
                />
                <button type="submit">Add a new Todo</button>
            </form>
        )
    }
}

export default TodoForm;