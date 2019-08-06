// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        console.log('TodoList', props);
        
    }

    render() {
        console.log('TodoList', this.props);
        return (
            <div>
                {this.props.tasks.map(task => {
                    return (
                        <Todo
                        key={task.id}
                        todo={task}
                        toggleCompleted={this.props.toggleCompleted}
                        />
                    )
                    })
                }
            </div>
        )
    }
}

export default TodoList;