import React, {Component} from 'react';
import Todos from './components/Todo';
import './App.css';

class App extends Component{
  state = {
    todos: [
      {
        id: 1,
        title: "Take out the poop bottle",
        completed: false
      },
      {
        id: 2,
        title: "Take out the piss bottle",
        completed: true
      },
      {
        id: 3,
        title: "shitposting",
        completed: false
      }
    ]
  }

  markComplete = (id) => {
    this.setState( { todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    })});
  }

  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} markComplete={this.markComplete}/>
      </div>
    );
  }
  
}

export default App;
