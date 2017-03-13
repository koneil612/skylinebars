import React from "react";
import TodoList from "./TodoList";
import { connect } from "react-redux";
import * as user from "../actions/userActions";
import * as todo from "../actions/todoActions";
import Navigation from "./Navigation";

@connect((store)=>{
    //the return becomes props
    return {
        user:store.user.user,
        todos:store.todos.todos
    }
})
export default class TodoApp extends React.Component {
  componentWillMount(){
    //   console.log("Mounting:",this.props.user);
      this.props.dispatch(user.readUser());
  }

  handleSubmit(e){
      e.preventDefault();
  }

  readUser(){
      this.props.dispatch(user.readUser());
    //   this.props.dispatch(todo.readAll(channel));
  }

  loadTodos(){
      this.props.dispatch(todo.readAll());
  }

  render() {
    //   console.log(this.props);
    //   const todos = this.props.todos.map(todo => <li>{todo.text}</li>);
    return (
      <div>
        <Navigation />
        <h3>Locations!!!!!</h3>
        <p>hgfds</p>
        <TodoList />
        <button onClick={this.readUser.bind(this)}>Log In</button>
        <button onClick={this.loadTodos.bind(this)}>Search Locations</button>
        {/* add this */}
        {this.props.children}
      </div>
    );
  }
}
