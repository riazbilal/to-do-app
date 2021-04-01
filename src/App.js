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
        id: 1, 
        title: "Take out trash",
        completed: false
      },
      {
        id: 2,
        title: "Clean room",
        completed: false 
      },
      {
        id: 3,
        title: "Wash dishes",
        completed: false
      },
      {
        id: 4, 
        title: "Learn React",
        completed: false
      },
      {
        id: 5, 
        title: "Workout",
        completed: false
      },
      {
        id: 6, 
        title: "Mark task as complete",
        completed: false
      },
      {
        id: 7, 
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
      id: uuid.v4,
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

