import { Component } from 'react';
import './App.css';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import {v4 as uuid} from 'uuid';

class App extends Component
{
  state = 
  {
    todos:
    [
      {
        id: uuid(), 
        title: "Take out trash",
        completed: false
      },
      {
        id: uuid(),
        title: "Clean room",
        completed: false 
      },
      {
        id: uuid(),
        title: "Wash dishes",
        completed: false
      },
      {
        id: uuid(), 
        title: "Learn React",
        completed: false
      },
      {
        id: uuid(), 
        title: "Workout",
        completed: false
      },
      {
        id: uuid(), 
        title: "Mark task as complete",
        completed: false
      },
      {
        id: uuid(), 
        title: "Delete Task",
        completed: false
      },
    ]
  }
  //checks and marks toDo item as completed when checkBox has been clicked
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if (todo.id === id) // check if current toDo we are iterating through matches id passed from the function 
      {
        todo.completed = !todo.completed //set task as completed 
      }
      return todo; 
    })  });
  }

  //Remove toDo --> deletes task from list 
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]});
  }

  //Add toDo --> adds task to list
  addTodo = (title) => {
    const newTodo = {
      id: uuid(),
      title: title,
      completed: false 
    }
    this.setState({ todos: [...this.state.todos, newTodo]})
  }
  getRandomID = () => {
    return Math.floor((Math.random() * 1000) + 1);
  }
  render()
  {
    return ( 
      <div className="App">
        <div className="container">
          <AddTodo addTodo={this.addTodo} />
          <Todos todos={this.state.todos} markComplete={this.markComplete}
          delTodo ={this.delTodo} />
        </div>
      </div>
    );
  }
}
export default App;

