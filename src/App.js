import React, {Component} from 'react';
import Todos from './components/Todo';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import Header from './components/layout/Header';
import {BrowserRouter as Router, Route} from "react-router-dom";
import axios from 'axios';
import { MuiThemeProvider } from '@material-ui/core/styles';

import './App.css';

class App extends Component{
  state = {
    todos: []
  }
  
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then(res =>this.setState({todos: res.data}))
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
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.setState({todos: [...this.state.todos.filter(todo =>todo.id !==id)]}));
    
  }


  //Add Todo
  addTodo = (title) => {
    axios.post("https://jsonplaceholder.typicode.com/todos", {
      title: title,
      completed: false
    })
      .then(res => this.setState({todos: [...this.state.todos, res.data]}));

  }

  render() {
    return (
      <MuiThemeProvider>
      <Router>
          <div className="App">
            <div className="container">
                <Header/>
                <Route exact path="/" render={props => (
                  <React.Fragment>
                       <AddTodo addTodo={this.addTodo}/>
                      <Todos todos={this.state.todos} markComplete={this.markComplete}
                      delTodo={this.delTodo}/>
                  </React.Fragment>
                )} />
                <Route path="/about" component={About}/>
               
              </div>  
          </div>
      </Router>
      </MuiThemeProvider>
    );

  }
  
}

export default App;
