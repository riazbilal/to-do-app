import React, { Component } from 'react'

export class AddTodo extends Component {
    state = {
        title: ''
    }
    // Allows user to type whatever task they would like 
    onChange = (e) => this.setState({ [e.target.name]: e.target.value}); 
    // Adds task to toDo list once submit is pressed
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title); // have to pass it up to other files
        this.setState({title: ''}); // sets input bar back to blank once submit is clicked
    }
    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
                <input 
                  type="text" 
                  name="title" 
                  style={{flex: '10', padding: '5px'}}
                  placeholder="Add Todo..."
                  value={this.state.title}
                  onChange={this.onChange}
                  />
                  <input 
                    type="submit" 
                    value="Submit" 
                    className="btn"
                    style={{flex: '1'}}
                    />
                    
            </form>
        )
    }
}

export default AddTodo
