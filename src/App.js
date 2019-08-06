import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const tasks = [
  {
    task: 'Cook dinner',
    id: 1,
    completed: false
  },
  {
    task: 'Buy groceries',
    id: 2,
    completed: true
  },
  {
    task: 'Sleep',
    id: 3,
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      tasks
    }
  }

  toggleCompleted = (id) => {
    this.setState({

      tasks: this.state.tasks.map(task => {
        if (id === task.id) {
          return {...task, completed: !task.completed};
        } else {
          return task;
        }
        
      })
    })
  }

  addTodo = task => {
    this.setState({
      tasks: [...this.state.tasks, {
        task: task,
        id: Date.now(),
        completed: false
      }]
    })
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList
        tasks={this.state.tasks}
        toggleCompleted={this.toggleCompleted}
        />
        <TodoForm addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
