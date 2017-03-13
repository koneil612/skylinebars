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
    return (
      <div>
        <Navigation />
        <button onClick={this.readUser.bind(this)}>Log In</button>
        <TodoList />
        {this.props.children}
        <button onClick={this.loadTodos.bind(this)}>Search Locations</button>
        {/* add this */}

      </div>
    );
  }
}
