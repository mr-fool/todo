import React, {Component} from 'react';
import Todos from './components/Todo';
import AddTodo from './components/AddTodo';
import Header from './components/layout/Header';
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

  //Toggle Complete
  markComplete = (id) => {
    this.setState( { todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    })});
  }

  //Delete Todo
  delTodo = (id) => {
    this.setState({todos: [...this.state.todos.filter(todo =>todo.id !==id)]})
  }

  render() {
    return (
      <div className="App">
        <div className="container">
            <Header/>
            <AddTodo/>
            <Todos todos={this.state.todos} markComplete={this.markComplete}
            delTodo={this.delTodo}/>
          </div>  
      </div>
    );
  }
  
}

export default App;
